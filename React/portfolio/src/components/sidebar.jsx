import React from "react";
import pic from "../assets/pic.jpg";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  return (
    <>
      <div className="w-70 h-[90vh] bg-emerald-300 text-amber-700">
        <div className="flex justify-center py-2">
          <img
            src={pic}
            alt="Raj Vardhan"
            className="border-5 rounded-full p-2 w-60 h-60"
          />
        </div>
        <span className="text-4xl font-bold flex justify-center p-5">
          Raj Vardhan
        </span>

        <div className="container p-5 ms-10">
          <ul className="list-disc">
            <li>
              <NavLink to={"/"}>
                <span className="text-amber-700 text-2xl font-bold my-1">
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/exp"}>
                <span className="text-amber-700 text-2xl font-bold my-1">
                  Experience
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/pro"}>
                <span className="text-amber-700 text-2xl font-bold my-1">
                  Projects
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Quali"}>
                <span className="text-amber-700 text-2xl font-bold my-1">
                  Qualification
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/hob"}>
                <span className="text-amber-700 text-2xl font-bold my-1">
                  Hobbies
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/con"}>
                <span className="text-amber-700 text-2xl font-bold my-1">
                  Contact Me
                </span>
              </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
