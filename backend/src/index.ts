import express from "express";
import { connectDataBase } from "./utils/data";
import dotenv from "dotenv";
import cors from "cors";
connectDataBase();
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).send({ succes: true, msg: "hello" });
});
app.listen(PORT, () => {
  console.log(`SERVER ON , ${PORT}`);
});
