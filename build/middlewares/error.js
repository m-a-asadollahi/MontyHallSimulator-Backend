"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
const error = (err, req, res, next) => {
    res.status(500).json({ message: err.message });
};
exports.error = error;
