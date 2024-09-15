import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { ButtonProps } from "../../common";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="bg-[#181c25] font-mono flex items-center justify-center w-full h-20
    sticky
    top-0
    z-[999]
    ">
      <div className="w-[85%] h-[80%] flex items-center justify-between">
        <div className="w-[60px] h-[60px] object-contain cursor-pointer">
          <img src={logo} alt="" />
        </div>
        <div className="hidden sm:flex justify-between items-center cursor-pointer text-white">
          <Link offset={-100} smooth={true} duration={500} to="Hero">
            <p className="mr-5 text-lg hover:text-[#FBC02D]">Home</p>
          </Link>

          <Link offset={-100} smooth={true} duration={500} to="UpcomingMatches">
            <p className="mr-5 text-lg hover:text-[#FBC02D]">Matches</p>
          </Link>

          <Link offset={-100} smooth={true} duration={500} to="MatchTable">
            <p className="mr-5 text-lg hover:text-[#FBC02D]">
              Fixtures & Predict
            </p>
          </Link>
          <Link
            offset={-100}
            smooth={true}
            duration={500}
            to="LatestAndResultWrapper">
            <p className="mr-5 text-lg hover:text-[#FBC02D]">Results</p>
          </Link>
          <Link offset={-100} smooth={true} duration={500} to="matchGallery">
            <p className="mr-5 text-lg hover:text-[#FBC02D]">Gallery</p>
          </Link>
          <Link offset={-100} smooth={true} duration={500} to="contact">
            <p className="mr-5 text-lg hover:text-[#FBC02D]">Contact</p>
          </Link>
        </div>
        <div className="hidden sm:flex justify-between items-center">
          <NavLink to="/sign-up">
            <ButtonProps
              className="px-4 py-2 mr-5 cursor-pointer rounded-md bg-[#FBC02D]  hover:bg-transparent hover:border hover:border-[#FBC02D] text-white transition-all duration-100"
              text="Sign Up"
            />
          </NavLink>
          <NavLink to="/login">
            <ButtonProps
              className="px-4 py-2 cursor-pointer rounded-md border border-[#FBC02D] text-[#FBC02D] hover:bg-[#FBC02D] hover:text-white"
              text="Login"
            />
          </NavLink>
        </div>
        {/* *************************** */}

        {/* {toggle
          ? "bg-purple-500 text-white fixed w-[70%] pl-4 top-0 mt-20 duration-300 transition-all z-[-2] md:hidden "
          : "bg-purple-500 text-white fixed w-[70%] pl-4 top-[-100%] mt-20 duration-300 transition-all  z-[-2] md:hidden"} */}
        {/* <div className="text-white text-2xl md:hidden" onClick={toggleMenu}>
          {toggle ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div> */}
        {/* <div
          className={
            toggle
              ? "hidden bg-[#FBC02D] sm:flex justify-between items-center cursor-pointer text-white"
              : ""
          }>
          <Link offset={-100} smooth={true} duration={500} to="Hero">
            <p className="mr-5 text-lg hover:text-[#FBC02D]">Home</p>
          </Link>

          <Link offset={-100} smooth={true} duration={500} to="UpcomingMatches">
            <p className="mr-5 text-lg hover:text-[#FBC02D]">Matches</p>
          </Link>

          <Link offset={-100} smooth={true} duration={500} to="MatchTable">
            <p className="mr-5 text-lg hover:text-[#FBC02D]">
              Fixtures & Predict
            </p>
          </Link>
          <Link
            offset={-100}
            smooth={true}
            duration={500}
            to="LatestAndResultWrapper">
            <p className="mr-5 text-lg hover:text-[#FBC02D]">Results</p>
          </Link>
          <Link offset={-100} smooth={true} duration={500} to="matchGallery">
            <p className="mr-5 text-lg hover:text-[#FBC02D]">Gallery</p>
          </Link>
          <Link offset={-100} smooth={true} duration={500} to="contact">
            <p className="mr-5 text-lg hover:text-[#FBC02D]">Contact</p>
          </Link>
        </div> */}
        {/* <div className="hidden sm:flex justify-between items-center">
          <ButtonProps
            className="px-4 py-2 mr-5 cursor-pointer rounded-md bg-[#FBC02D]  hover:bg-transparent hover:border hover:border-[#FBC02D] text-white transition-all duration-100"
            text="Sign Up"
          />
          <ButtonProps
            className="px-4 py-2 cursor-pointer rounded-md border border-[#FBC02D] text-[#FBC02D] hover:bg-[#FBC02D] hover:text-white"
            text="Login"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
