import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import cors from 'cors'
dotenv.config();

const app = express();
const __dirname = path.resolve();

// middleware
app.use(express.json());

app.use("/api/products", productRoutes);

// process.env.NODE_ENV = 'production'; // Manually setting NODE_ENV
if (process.env.NODE_ENV === "production") {
  app.use(cors())
  app.use(express.static(path.join(__dirname, "Frontend", "dist")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "Frontend", "dist", "index.html")
    );
  });
}
console.log("node env is set to:", process.env.NODE_ENV);
// console.log("all env variables:", process.env);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDb();
  console.log(`Server connected at port ${PORT}`);
});
