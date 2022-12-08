import { RequestHandler } from "express";
export const header: RequestHandler = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,DELETE,GET,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
};
