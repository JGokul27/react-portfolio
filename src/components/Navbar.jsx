import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h2 className="text-3xl font-semibold">GJ</h2>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/gokul-j-91183530a/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/JGokul27" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/warlord_goku/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
