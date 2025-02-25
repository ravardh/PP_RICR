import express from "express";

const app = express();

app.use(express.json());

const middleware = (req, res, next) => {
  console.log(`${req.method}  |  ${req.url}  |  ${new Date().toISOString()}`);
  next();
};

app.use(middleware);

const middleware2 = (req, res, next) => {
  console.log(`${req.method}  |  ${req.url}  |  ${new Date().toISOString()}`);
  console.log("I am midddleware 2");
  next();
};

const middleware3 = (req, res, next) => {
  console.log(`${req.method}  |  ${req.url}  |  ${new Date().toISOString()}`);
  console.log("I am midddleware 3");
  next();
};

app.delete("/login", (req, res) => [res.send("Login Done")]);

app.post("/signup", middleware2, middleware3 , (req, res) => {
  let { nm, unm, pass } = req.body;

  console.log(req.body);
  console.log("User Login Data");

  console.log(nm, unm, pass);
  res.status(200).json({ message: "User Created" });
});

app.listen(5000, () => {
  console.log("Server is running at 5000");
  console.log("I am backend server");
});
