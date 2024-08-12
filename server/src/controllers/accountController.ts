import Account from "../models/accountModel";
import { Request, Response } from "express";
import { hashPassword, comparePassword } from "../../utils/hashPassword";
import jwt from "jsonwebtoken";

export default class AccountController {
  static async CreateAccount(req: Request, res: Response): Promise<void> {
    
    const { nome, email, senha, userName } = req.body;
    
    if (!nome || !email || !senha) {
      res.status(400).send({
        message: "Preencha o corpo da requisição",
      });
      return;
    }

    try {
      const account = await Account.find({ email: email });

      if (account) {
        res.status(400).send({ message: "Já existe uma conta com esse email" });
        return;
      }

      const conta = new Account({
        nome: nome,
        email: email,
        userName: userName || "",
        senha: await hashPassword(senha),
      });

      await conta.save();
      res.status(201).send({
        message: "Conta criada com sucesso!", conta
      });
    } catch (error) {
      res.status(500).send({
        message: "Erro ao criar conta",
        error : error instanceof Error ? error.message : "Erro desconhecido"
      });
    }
  }

  static async FazerLogin(req: Request, res: Response): Promise<void> {
    const { email, senha } = req.body;

    try {
      const conta = await Account.findOne({ email: email });
      if (!conta) {
        res.status(404).send({ message: "Email não encontrado" });
        return;
      }

      const verificarSenha = await comparePassword(senha, conta.senha);
      if (!verificarSenha) {
        res.status(404).send({
          message: "Email ou senha estão errados",
        });
        return;
      }

      // Gerar token JWT
      const token = jwt.sign(
        { id: conta._id, email: conta.email },
        "SIMPLESMENTEFRESNOENXZERO",
        {
          expiresIn: "1h", // Define a duração do token
        }
      );

      res.status(200).send({
        message: "Login bem-sucedido",
        token: token,
      });
    } catch (error) {
      res.status(500).send({
        message: "Erro ao realizar login",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}
