import express from "express";
import cors from "cors";
import connectDB from "./lib/db.lib.js";

import UserRouter from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Server Connected Sucessfully" });
  next();
});

app.use("/api/user", UserRouter);

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log("Server Started at " + PORT);
  connectDB();
});
