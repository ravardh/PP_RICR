import React from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import ContactMe from "./pages/contactme";
import Hobbies from "./pages/hobbies";
import Qualification from "./pages/qualification";

function App() {
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>
        <main className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exp" element={<Experience />} />
            <Route path="/pro" element={<Projects />} />
            <Route path="/con" element={<ContactMe />} />
            <Route path="/hob" element={<Hobbies />} />
            <Route path="/quali" element={<Qualification />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
