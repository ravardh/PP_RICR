import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "../config/api"

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    mobile: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    setErrors({});
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!formData.fullName) tempErrors.fullName = "Full Name is required.";

    if (!emailRegex.test(formData.email))
      tempErrors.email = "Invalid email format.";

    if (!passwordRegex.test(formData.password))
      tempErrors.password =
        "Password must be at least 8 characters long and include a number.";

    if (!formData.gender) tempErrors.gender = "Please select a gender.";

    if (!formData.age || formData.age < 18)
      tempErrors.age = "Age must be at least 18.";

    if (!mobileRegex.test(formData.mobile))
      tempErrors.mobile = "Invalid mobile number.";

    if (!formData.agree)
      tempErrors.agree = "You must agree to the Terms & Conditions.";

    setErrors(tempErrors);
    console.log(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid =validate();
    if (!valid) return;

    try {
      const response = await axios.post("/api/user/signup",formData)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-200 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-4 rounded-2xl shadow-2xl w-96"
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <div className="flex space-x-3">
            <label>Gender : </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="M"
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="F"
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}

          <input
            name="age"
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}

          <input
            name="mobile"
            type="text"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile}</p>
          )}

          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to the{" "}
            <span className="text-blue-500 cursor-pointer hover:underline ml-1">
              Terms & Conditions
            </span>
          </label>
          {errors.agree && (
            <p className="text-red-500 text-sm">{errors.agree}</p>
          )}

          <button
            type="submit"
            className="bg-gray-900 text-white w-full p-2 rounded-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-blue-500 font-semibold hover:underline"
          >
            Login
          </NavLink>
        </p>
      </motion.div>
    </div>
  );
}
