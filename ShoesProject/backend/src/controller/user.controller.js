import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../lib/auth.js";

export const userSignup = async (req, res, next) => {
  try {
    const { fullName, email, password, gender, age, mobile } = req.body;

    if (!fullName || !email || !password || !gender || !age || !mobile) {
      const er = new Error("All Feilds Required !!");
      er.statusCode = 400;
      next(er);
      return;
    }

    if (password.length < 8 || password.length > 15) {
      const er = new Error("Paswword needs to be in range 8-15 characters !!");
      er.statusCode = 400;
      next(er);
      return;
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: encryptedPassword,
      gender,
      age,
      mobile,
    });

    res.status(201).json({ message: "Welcome to the world of Footwear !!" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const er = new Error("All Feilds Required !!");
      er.statusCode = 400;
      next(er);
      return;
    }

    if (password.length < 8 || password.length > 15) {
      const er = new Error("Paswword needs to be in range 8-15 characters !!");
      er.statusCode = 400;
      next(er);
      return;
    }

    const getUser = await User.findOne({ email });
    if (email !== getUser.email) {
      const er = new Error("User Not Found !!");
      er.statusCode = 404;
      next(er);
      return;
    }

    const checkpasword = await bcrypt.compare(password, getUser.password);
    if (!checkpasword) {
      const er = new Error("Unauthorized");
      er.statusCode = 401;
      next(er);
      return;
    }

    generateToken(getUser._id, res);

    res.status(200).json({ message: `Welcome Back ${getUser.fullName}` });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userLogout = (req, res, next) => {
  try {
    res.status(200).json({ message: "User Logout Sucessfull" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userUpdate = async (req, res, next) => {
  try {
    const { fullName, gender, age, mobile } = req.body;
    const userID = req.verifiedUSer._id;


    const UpdatedUser = await User.findByIdAndUpdate(userID, {
      fullName,
      gender,
      age,
      mobile,
    });

    res.status(200).json({ message: "User Update Sucessfull" , UpdatedUser});
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userReset = async (req, res, next) => {
  try {
    const { oldPassword , newPassword } = req.body;
    const userID = req.verifiedUSer._id;

    const checkpasword = await bcrypt.compare(oldPassword, req.verifiedUSer.password);
    if (!checkpasword) {
      const er = new Error("Incorrect Password");
      er.statusCode = 401;
      next(er);
      return;
    }

    const encryptedPassword = await bcrypt.hash(newPassword, 10);

    const UpdatedUser = await User.findByIdAndUpdate(userID, {
     password:encryptedPassword,
    });
    res.status(200).json({ message: "Password Changed Sucessfull"});
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userDelete = (req, res, next) => {
  try {
    res.status(200).json({ message: "User Delete Sucessfull" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userCheck = (req, res, next) => {
  try {
    res.status(200).json({ message: "User Check Sucessfull" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};
