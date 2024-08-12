import AccountController from "../controllers/accountController";
import { Router } from "express";

const router = Router();

router
  .post("/accounts", AccountController.CreateAccount)
  .post("/accounts/login", AccountController.FazerLogin);

export default router;
