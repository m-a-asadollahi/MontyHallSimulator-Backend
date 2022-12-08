import { ErrorRequestHandler } from "express";

export const error: ErrorRequestHandler = (err: Error, req, res, next) => {
  res.status(500).json({ message: err.message });
};
