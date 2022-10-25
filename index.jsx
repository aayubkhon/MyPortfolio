import React, { useState } from "react";
import { Menu } from "@styled-icons/open-iconic/Menu";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { FilePersonFill } from "@styled-icons/bootstrap/FilePersonFill";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { Github } from "@styled-icons/bootstrap/Github";
import { Email } from "@styled-icons/material/Email";
import {Link} from 'react-scroll'
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <div className="Header fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className="logo">Portfolio</h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to='home' smoth={true} duration={500}>
          Home
          </Link>          
        </li>
        <li>
          <Link to='about' smoth={true} duration={500}>
          About
          </Link> </li>
        <li>
          <Link to='skills' smoth={true} duration={500}>
          Skills
          </Link> 
          </li>
        <li><Link to='work' smoth={true} duration={500}>
          Work
          </Link> </li>
        <li><Link to='contact' smoth={true} duration={500}>
          Contact
          </Link> </li>
      </ul>
      {/* ham */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!open ? (
          <Menu className="w-[15px] h-[15px]" />
        ) : (
          <CloseOutline className="w-[25px] h-[25px]" />
        )}
      </div>
      {/* Mobile menu> */}
      <ul
        className={
          !open
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl"> 
        <Link onClick={handleClick} to='home' smoth={true} duration={500}>
          Home
          </Link></li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to='about' smoth={true} duration={500}>
          About
          </Link> </li>
        <li className="py-6 text-4xl"> 
        <Link onClick={handleClick} to='skills' smoth={true} duration={500}>
          Skills
          </Link> </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to='work' smoth={true} duration={500}>
          Work
          </Link> 
        </li>
        <li onClick={handleClick} className="py-6 text-4xl"> <Link to='contact' smoth={true} duration={500}>
          Contact
          </Link> </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex  fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/ayubkhon-akramov-9280b6235"
            >
              Linkedin <Linkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/aayubkhon"
            >
              GitHub <Github size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="#"
            >
              Email <Email size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="file:///C:/Users/hi/Downloads/Telegram%20Desktop/My%20Portfolo.pdf"
            >
              Resume <FilePersonFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
