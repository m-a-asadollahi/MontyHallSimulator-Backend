import { ErrorRequestHandler } from "express";

//* Error middleware for handling errors.
export const error: ErrorRequestHandler = (err: Error, req, res, next) => {
  res.status(500).json({ message: err.message });
};
