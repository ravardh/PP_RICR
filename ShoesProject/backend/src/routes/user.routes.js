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

import { userLog, confirmUser } from "../middlewares/user.middleware.js";
import multer from "multer";


const upload = multer();

const route = express.Router();

route.post("/signup", userLog, upload.none(), userSignup);
route.post("/login", userLog, userLogin);
route.post("/logout", userLog, confirmUser, userLogout);
route.put("/reset", userLog, confirmUser, userReset);
route.put("/update", userLog, confirmUser, userUpdate);
route.delete("/delete", userLog, confirmUser, userDelete);
route.get("/check", userLog, confirmUser,userCheck);

export default route;
