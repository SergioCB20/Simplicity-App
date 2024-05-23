import React from "react";
import { useAppContext } from "../context/appContext";
import SimplicityBanner from "../assets/simplicity_logo_final.png";

const Navbar = () => {

  const { theme, setTheme } = useAppContext();

  const handleChangeTheme = () => {
    setTheme((theme) => (!theme));
  };

  return (
    <nav className={`w-full h-[60px] block fixed ${theme && "dark"} z-50`}>
      <ul className="w-full h-full flex px-5 bg-blue-500 dark:bg-cyan-950">
        <li className="w-1/2 h-full flex items-center">
          <div className="h-full hidden lg:flex items-center">
          <img src={SimplicityBanner} alt="" className="h-[80%]" />
          <h1 className="text-white font-semibold text-lg tracking-widest">Simplicity</h1>
          </div>
          <button type="button" className="dark:text-white scale-[2] lg:hidden">
      <i className="fa-solid fa-bars"></i>
      </button>
        </li>
        <li className="w-1/2">
          <div className="w-full h-full flex justify-end items-center">
          <button
          type="button"
          className={` dark:text-white scale-[2]`}
          onClick={handleChangeTheme}
        >
          {theme?<i className="fa-regular fa-sun"></i>:<i className="fa-solid fa-moon"></i>}
        </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
