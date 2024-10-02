import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(3000, () => {
  connectToDB();
  console.log("Server is running on port 3000");
});
