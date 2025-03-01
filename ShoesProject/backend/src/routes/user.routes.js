import express from "express";
import {
  userSignup,
  userCheck,
  userDelete,
  userLogout,
  userLogin,
  userReset,
  userUpdate,
} from "../controller/user.controller.js";


import { userLog } from "../middlewares/user.middleware.js";

const route = express.Router();

route.post("/signup", userLog, userSignup);
route.post("/login", userLog, userLogin);
route.post("/logout", userLog, userLogout);
route.put("/reset", userLog, userReset);
route.put("/update", userLog, userUpdate);
route.delete("/delete", userLog, userDelete);
route.get("/check", userLog, userCheck);


export default route;