import User from "../models/user.model.js";

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

    const newUser = await User.create({
      fullName,
      email,
      password,
      gender,
      age,
      mobile,
    });

    res.status(201).json({ message: "User Signup Sucessfull", newUser });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userLogin = (req, res, next) => {
  try {
    res.status(200).json({ message: "User Login Sucessfull" });
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

export const userUpdate = (req, res, next) => {
  try {
    res.status(200).json({ message: "User Update Sucessfull" });
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
};

export const userReset = (req, res, next) => {
  try {
    res.status(200).json({ message: "User Reset Sucessfull" });
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
