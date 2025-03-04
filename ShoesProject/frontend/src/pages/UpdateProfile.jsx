import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "../config/api";
import pp from "../assets/pp.png";

export default function UpdateProfile() {
  const [inputData, setInputData] = useState({
    fullName: "",
    gender: "",
    age: "",
    mobile: "",
  });

  const [profilePic,setProfilePic] = useState()
  const [errors, setErrors] = useState({});

  const validate = () => {
    setErrors({});
    let tempErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!nameRegex.test(inputData.fullName) || inputData.fullName.length < 3)
      tempErrors.fullName = "Full Name is required.";

    if (!emailRegex.test(inputData.email))
      tempErrors.email = "Invalid email format.";

    if (!passwordRegex.test(inputData.password))
      tempErrors.password =
        "Password must be at least 8 characters long and combination of A-Z , a-z , 0-9 and special characters.";

    if (!inputData.gender) tempErrors.gender = "Please select a gender.";

    if (!inputData.age || inputData.age < 18)
      tempErrors.age = "Age must be at least 18.";

    if (!mobileRegex.test(inputData.mobile))
      tempErrors.mobile = "Invalid mobile number.";

    if (!inputData.agree)
      tempErrors.agree = "You must agree to the Terms & Conditions.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const formData = new FormData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = validate();
    if (!valid) return;
    for (const key in inputData) {
      formData.append(key, inputData[key]); // Append key-value pairs
    }
    console.log(formData);
    try {
      const response = await axios.post("/api/user/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
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
          Update your Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <div className="flex justify-center">
              <img
                src={pp}
                alt=""
                className="w-40 h-40 border-3 border-b-gray-800 rounded-full p-1 object-cover"
              />
            </div>
            <input type="file"  onChange={setProfilePic(value)}/>
          </div>

          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={inputData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
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
            value={inputData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}

          <input
            name="mobile"
            type="text"
            placeholder="Mobile Number"
            value={inputData.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile}</p>
          )}

          <button
            type="submit"
            className="bg-gray-900 text-white w-full p-2 rounded-lg"
          >
            Update
          </button>
        </form>
        <button
          type="button"
          className="bg-gray-400 text-white w-full p-2 rounded-lg mt-2"
        >
          Cancel
        </button>
      </motion.div>
    </div>
  );
}
