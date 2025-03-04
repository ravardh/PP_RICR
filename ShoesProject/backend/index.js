import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./src/routes/user.routes.js";
import connectDB from "./src/lib/db.js";
import cookieParser from "cookie-parser";

//create Express Instance
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//parse Cookies Data
app.use(cookieParser());

//creating Routes
app.use("/api/user", userRoutes);

//Deafult Route
app.get("/", (req, res) => {
  try {
    console.log("Test Request is getiing executed");
    res.status(200).json({ message: "Server is working properly" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
});

//Default error Handeling middleware
app.use((err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Server is not working properly" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server Started at port " + PORT);
  connectDB();
});
