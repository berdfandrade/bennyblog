import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../../src/app";
import Account from "../../src/models/accountModel";
import { hashPassword } from "../../utils/hashPassword";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  await Account.deleteMany({});
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("AccountController", () => {
  describe("POST /accounts", () => {
    it("should create a new account", async () => {
      const accountData = {
        nome: "John Doe",
        email: "john@example.com",
        senha: "password123",
        userName: "johnny",
      };

      const response = await request(app).post("/accounts").send(accountData);

      expect(response.status).toBe(201);
      expect(response.body.message).toBe("Conta criada com sucesso!");
    });

    it("should return an error if account already exists", async () => {
      const accountData = {
        nome: "John Doe",
        email: "john@example.com",
        senha: "password123",
        userName: "johnny",
      };

      const existingAccount = new Account({
        nome: accountData.nome,
        email: accountData.email,
        senha: await hashPassword(accountData.senha),
        userName: accountData.userName,
      });

      await existingAccount.save();

      const response = await request(app).post("/accounts").send(accountData);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Já existe uma conta com esse email");
    });

    it("should return an error if required fields are missing", async () => {
      const response = await request(app).post("/accounts").send({
        nome: "John Doe",
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Preencha o corpo da requisição");
    });

    it("should return an error if account creation fails", async () => {
      jest.spyOn(Account.prototype, "save").mockImplementationOnce(() => {
        throw new Error("Simulated Error");
      });

      const accountData = {
        nome: "John Doe",
        email: "john@example.com",
        senha: "password123",
        userName: "johnny",
      };

      const response = await request(app).post("/accounts").send(accountData);

      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Simulated Error");
    });
  });

  describe("POST /accounts/login", () => {
    it("should log in an existing account", async () => {
      const accountData = {
        nome: "John Doe",
        email: "john@example.com",
        senha: "password123",
      };

      const hashedPassword = await hashPassword(accountData.senha);

      const newAccount = new Account({
        nome: accountData.nome,
        email: accountData.email,
        senha: hashedPassword,
        userName: "johnny",
      });

      await newAccount.save();

      const response = await request(app)
        .post("/accounts/login")
        .send({ email: accountData.email, senha: accountData.senha });

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Login bem-sucedido");
      expect(response.body.token).toBeDefined();
    });

    it("should return an error if email is not found", async () => {
      const response = await request(app)
        .post("/accounts/login")
        .send({ email: "notfound@example.com", senha: "password123" });

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Email não encontrado");
    });

    it("should return an error if password is incorrect", async () => {
      const accountData = {
        nome: "John Doe",
        email: "john@example.com",
        senha: "password123",
      };

      const hashedPassword = await hashPassword(accountData.senha);

      const newAccount = new Account({
        nome: accountData.nome,
        email: accountData.email,
        senha: hashedPassword,
        userName: "johnny",
      });

      await newAccount.save();

      const response = await request(app)
        .post("/accounts/login")
        .send({ email: accountData.email, senha: "wrongpassword" });

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Email ou senha estão errados");
    });

    it("should return an error if login fails", async () => {
      jest.spyOn(Account, "findOne").mockImplementationOnce(() => {
        throw new Error("Simulated Error");
      });

      const response = await request(app)
        .post("/accounts/login")
        .send({ email: "john@example.com", senha: "password123" });

      expect(response.status).toBe(500);
      expect(response.body.message).toBe("Erro ao realizar login");
      expect(response.body.error).toBe("Simulated Error");
    });
  });
});
