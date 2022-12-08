import { Express } from "express";
import helmet from "helmet";
import compression from "compression";

export const prod = (app: Express) => {
  app.use(helmet());
  app.use(compression());
};
