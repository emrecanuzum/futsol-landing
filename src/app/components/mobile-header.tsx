"use client";
import React, { useState } from "react";
import Logo from "../../../public/beyaz-logo-png.png";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-28 bg-primary relative">
      <div className="w-full px-5 md:px-20 mx-auto">
        <div className="items-center flex justify-between">
          <div className="flex items-center">
            <Image src={Logo} className="h-20 w-20 my-4" alt="logo" />
            <div className="hidden md:flex gap-5 ml-16 md:text-2xl">
              <Link className="hover:text-aquagreen" href={"/home"}>
                Home
              </Link>
              <p className="hover:text-aquagreen cursor-not-allowed text-2xl opacity-50">
                About
              </p>
              <p className="hover:text-aquagreen cursor-not-allowed text-2xl opacity-50">
                My Team
              </p>
              <p className="hover:text-aquagreen cursor-not-allowed text-2xl opacity-50">
                League
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="hidden md:flex gap-3 items-center">
              <Link
                className="flex items-center"
                href={"https://twitter.com/playfutsol"}
                target="_blank"
              >
                <BsTwitterX className="text-aquagreen" size={20} />
              </Link>
              <Link
                className="flex items-center"
                href={"https://medium.com/@playfutsol"}
                target="_blank"
              >
                <FaMedium className="text-aquagreen" size={24} />
              </Link>
            </div>
            <button className="border text-lg text-black hover:bg-primary bg-secondary hover:shadow-glow p-3 h-auto hover:text-white hidden md:block">
              Connect Wallet
            </button>
            <button className="md:hidden text-aquagreen" onClick={toggleMenu}>
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-primary z-50 shadow-lg flex flex-col items-center p-6 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className=" justify-end mb-10" onClick={toggleMenu}>
          <FiX size={34} />
        </button>
        <Link
          className="hover:text-aquagreen text-2xl mb-4"
          href={"/home"}
          onClick={toggleMenu}
        >
          Home
        </Link>
        <p className="hover:text-aquagreen cursor-not-allowed text-2xl opacity-50 mb-4">
          About
        </p>
        <p className="hover:text-aquagreen cursor-not-allowed text-2xl opacity-50 mb-4">
          My Team
        </p>
        <p className="hover:text-aquagreen cursor-not-allowed text-2xl opacity-50 mb-4">
          League
        </p>
        <div className="flex gap-3 items-center mt-4">
          <Link
            className="flex items-center"
            href={"https://twitter.com/playfutsol"}
            target="_blank"
            onClick={toggleMenu}
          >
            <BsTwitterX className="text-aquagreen" size={20} />
          </Link>
          <Link
            className="flex items-center"
            href={"https://medium.com/@playfutsol"}
            target="_blank"
            onClick={toggleMenu}
          >
            <FaMedium className="text-aquagreen" size={24} />
          </Link>
        </div>
        <button className="border text-lg text-black hover:bg-primary bg-secondary hover:shadow-glow p-3 h-auto hover:text-white mt-4">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
