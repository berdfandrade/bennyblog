import express, { Request, Response } from "express";
import POST_ROUTES from "./postRoutes";

export const routes = (app: any) => {
  app.route("/").get((req: Request, res: Response) => {
    res.status(200).send({ message: "Olá" });
  });

  app.use(POST_ROUTES);
};
