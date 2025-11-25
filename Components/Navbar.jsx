import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Akash Blog App</h1>
        <div className="flex gap-6">
          <Link 
            to="/home" 
            className="hover:text-gray-200 transition"
          >
            Home
          </Link>
          
          <Link to="/form"
          className="hover:text-gray-200 transition">
          Write Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
