import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes)

app.listen(3000, () => {
  connectToDB();
  console.log("Server is running on port 3000");
});
