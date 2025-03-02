import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const userLog = (req, res, next) => {
  console.log(
    `Test Request is executed for user 
    ${req.url} with 
    ${req.method} Method at 
    ${new Date().toISOString()}`
  );

  next();
};


export const confirmUser = async (req,res,next)=>{
  const token = req.cookies.jwt;

  const decode = jwt.verify(token,process.env.JWT_SECRET);

  const verfiedUser = await User.findByID(decode.key);

  req.verfiedUser = verfiedUser;
  next();
}