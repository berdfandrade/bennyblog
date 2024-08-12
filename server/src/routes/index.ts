import express, { Request, Response } from "express";
import POST_ROUTES from "./postRoutes";
import ACCOUNTS_ROUTES from "./accountRoutes";

export const routes = (app: any) => {
  app.route("/").get((req: Request, res: Response) => {
    res.status(200).send({ message: "Olá" });
  });

  app.use(POST_ROUTES, ACCOUNTS_ROUTES);
};
