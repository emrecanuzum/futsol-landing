import React from "react";
import Logo from "../../../public/beyaz-logo-png.png";
import Image from "next/image";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <div className="w-full h-28  bg-primary">
      <div className="w-full container mx-auto">
        <div className="items-center flex justify-between">
          <div className="flex items-center">
            <Image src={Logo} className="h-20 w-20 my-4" alt="logo"></Image>
            <div className="flex gap-5 ml-16 md:text-2xl">
              <Link className="hover:text-aquagreen" href={"/home"}>
                Home
              </Link>
              <Link className="hover:text-aquagreen" href={"/about"}>
                About
              </Link>
              <Link className="hover:text-aquagreen" href={"/team"}>
                My Team
              </Link>
              <Link className="hover:text-aquagreen" href={"/league"}>
                League
              </Link>
            </div>
          </div>
          <button className="border text-lg text-black hover:bg-primary bg-secondary hover:shadow-glow p-3 h-auto hover:text-white">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
