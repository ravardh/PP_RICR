import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/Home";
import NewCollection from "./pages/NewCollection";
import Men from "./pages/men";
import Women from "./pages/Women";
import Sale from "./pages/Sale";
import Kids from "./pages/Kids";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UpdateProfile from "./pages/UpdateProfile";



export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewCollection />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/updateProfile" element={<UpdateProfile/>}/>
       
      </Routes>
    </Router>
  );
}
