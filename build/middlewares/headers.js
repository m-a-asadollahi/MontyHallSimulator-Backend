"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.header = void 0;
const header = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,DELETE,GET,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
};
exports.header = header;
