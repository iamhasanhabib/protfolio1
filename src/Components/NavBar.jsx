import React, { useState } from "react";
import { logo } from "../assets";
import "./NavBar.css";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full p-[10px] flex justify-between items-center">
      <img src={logo} alt='' className="h-[20px]" />
      <div>
        <ul className="hidden md:flex">
          <li className="transition-all duration-300 ease-in-out menuItem hover:scale-110 hover:z-50">
            <a href="/#home">Home</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#aboutme">About Me</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#skills">Skills</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#companies">Companies</a>
          </li>
          <li className="menuItem hover:scale-110">
            <a href="/#contact">Contact Us</a>
          </li>
        </ul>
        {/* <img src={logo} className="sm:hidden w-[40px] h-[40px]" /> */}
        <div className="flex flex-col items-end">
      {!toggle?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={()=>setToggle(!toggle)}
        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
         className="w-6 h-6 cursor-pointer md:hidden">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>:<svg onClick={()=>setToggle(!toggle)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer md:hidden">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
}

{toggle?
            <ul className="absolute flex flex-col p-2 mt-8 bg-gray-200 rounded-sm md:hidden">
          <li className="p-3 transition-all duration-300 ease-in-out menuItem hover:scale-110 hover:z-50">
            <a href="/#home">Home</a>
          </li>
          <li className="p-3 menuItem hover:scale-110">
            <a href="/#aboutme">About Me</a>
          </li>
          <li className="p-3 menuItem hover:scale-110">
            <a href="/#skills">Skills</a>
          </li>
          <li className="p-3 menuItem hover:scale-110">
            <a href="/#companies">Companies</a>
          </li>
          <li className="p-3 menuItem hover:scale-110">
            <a href="/#contact">Contact Us</a>
          </li>
        </ul>:null}
        </div>
        {/* <ul className={!toggle?'hidden':'flex'}>
                LOGO
            </ul> */}
      </div>
    </div>
  );
};

export default NavBar;
