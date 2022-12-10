"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const simulator_1 = __importDefault(require("./routers/simulator"));
const error_1 = require("./middlewares/error");
const headers_1 = require("./middlewares/headers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(headers_1.header);
app.use("/", simulator_1.default);
app.use(error_1.error);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
