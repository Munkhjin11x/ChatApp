import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).send({ succes: true, msg: "hello" });
});
app.listen(PORT, () => {
  console.log(`SERVER ON , ${PORT}`);
});
