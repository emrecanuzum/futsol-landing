import Image from "next/image";
import React from "react";
import FootballField from "../../public/field.jpeg";
import MiddleText from "./components/middle-text";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="bg-[#160023] h-screen">
      <div className=" justify-center  flex max-w-screen">
        <div className="md:w-full bg-[#160023] w-[150vw]  md:min-h-screen  text-auto justify-center md:flex">
          <Image
            className=" scale-[3] overflow-auto block top-1/3 md:top-0  aspect-video  md:scale-100 md:relative w-screen md:w-[96vw] mt-10 "
            src={FootballField}
            alt="football-field"
          />
          <div className="fixed gap-3 flex top-5">
            <Link
              className=" shadow-glow md:bg-opacity-35 bg-black hover:bg-white hover:text-black text-white shadow-white rounded-lg flex border p-2 top-10 items-center"
              href={"https://twitter.com/playfutsol"}
              target="blank"
            >
              <BsTwitterX className="" size={16} />
              <p className=" font-thin pl-1">playfutsol</p>
            </Link>

            <Link
              className=" shadow-glow md:bg-opacity-35 bg-black hover:bg-white hover:text-black text-white shadow-white rounded-lg flex border p-2 top-10 items-center"
              href={"https://medium.com/@futsolgamenft"}
              target="blank"
            >
              <FaMedium className="" size={20} />
              <p className=" font-thin pl-1">futsolgame</p>
            </Link>
          </div>

          <MiddleText />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
