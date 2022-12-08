import express from "express";

import simulatorRouter from "./routers/simulator";
import { error } from "./middlewares/error";
import { header } from "./middlewares/headers";
import { prod } from "./middlewares/prod";

const app = express();

app.use(express.json());
app.use(header);
app.use("/", simulatorRouter);
app.use(error);
prod(app);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
