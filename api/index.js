import express from "express";
import { connectDB } from "../config/db.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import path from 'path';

const __dirname =path.resolve()

const app = express();
app.use(express.static(path.join(__dirname, 'client/dist'))) 

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);



app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(3000, () => {
  connectDB();
  console.log("server up and running on port 3000!");
});
