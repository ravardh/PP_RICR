import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DataBase Connected");
  } catch (Error) {
    console.log("Error in DB Connection");
    console.log(Error);
  }
};

export default connectDB;
