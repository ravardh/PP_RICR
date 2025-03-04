import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "../config/api";
import pp from "../assets/pp.png";
import showToast from "../components/toast";

export default function UpdateProfile() {
  const [inputData, setInputData] = useState({
    fullName: "",
    gender: "",
    age: "",
    mobile: "",
    image: "",
  });
  
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/user/check");
        setInputData({
          fullName: response.data.fullName || "",
          gender: response.data.gender || "",
          age: response.data.age || "",
          mobile: response.data.mobile || "",
          image: response.data.profilePic || "",
        });
      } catch (error) {
        showToast.error("Error fetching profile data");
      }
    };

    fetchUserProfile();
  }, []);
  
  const validate = () => {
    let tempErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!nameRegex.test(inputData.fullName)) tempErrors.fullName = "Full Name is required.";
    if (!inputData.gender) tempErrors.gender = "Please select a gender.";
    if (!inputData.age || inputData.age < 18) tempErrors.age = "Age must be at least 18.";
    if (!mobileRegex.test(inputData.mobile)) tempErrors.mobile = "Invalid mobile number.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setInputData((prev) => ({ ...prev, image: URL.createObjectURL(selectedFile) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      let imageUrl = inputData.image;
      if (file) {
        const imageData = new FormData();
        imageData.append("file", file);
        imageData.append("upload_preset", import.meta.env.VITE_C_P_Name);

        const res = await fetch(import.meta.env.VITE_C_BaseURL, {
          method: "POST",
          body: imageData,
        });
        const uploadedImageURL = await res.json();
        imageUrl = uploadedImageURL.secure_url;
      }

      const formData = new FormData();
      formData.append("fullName", inputData.fullName);
      formData.append("gender", inputData.gender);
      formData.append("age", inputData.age);
      formData.append("mobile", inputData.mobile);
      formData.append("image", imageUrl);

      await axios.put("/api/user/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      showToast.success("Profile Updated Successfully");
      window.location.reload();
    } catch (error) {
      showToast.error("Error updating profile");
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
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Update your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col items-center gap-2 ">
            <img src={inputData.image || pp} alt="Profile" className="w-40 h-40 border-3 border-gray-800 rounded-full p-1 object-cover" />
            <label className="cursor-pointer bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-700">
              Change Profile Picture
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
            {file && <p className="text-green-600">File added: {file.name}</p>}
          </div>
          
          <input name="fullName" type="text" placeholder="Full Name" value={inputData.fullName || ""} onChange={(e) => setInputData({ ...inputData, fullName: e.target.value })} className="w-full p-2 border rounded-lg" />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          <div className="flex space-x-3">
            <label>Gender: </label>
            <label><input type="radio" name="gender" value="M" checked={inputData.gender === "M"} onChange={(e) => setInputData({ ...inputData, gender: e.target.value })} /> Male</label>
            <label><input type="radio" name="gender" value="F" checked={inputData.gender === "F"} onChange={(e) => setInputData({ ...inputData, gender: e.target.value })} /> Female</label>
          </div>
          <input name="age" type="number" placeholder="Age" value={inputData.age || ""} onChange={(e) => setInputData({ ...inputData, age: e.target.value })} className="w-full p-2 border rounded-lg" />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          <input name="mobile" type="text" placeholder="Mobile Number" value={inputData.mobile || ""} onChange={(e) => setInputData({ ...inputData, mobile: e.target.value })} className="w-full p-2 border rounded-lg" />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          <button type="submit" className="bg-gray-900 text-white w-full p-2 rounded-lg">Update</button>
        </form>
      </motion.div>
    </div>
  );
}
