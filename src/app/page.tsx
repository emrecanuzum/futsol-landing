import Image from "next/image";
import React from "react";
import FootballField from "../../public/field.jpg";
import MiddleText from "./components/middle-text";

const LandingPage = () => {
  return (
    <div className="bg-[#160023] h-screen">
      <div className=" justify-center  flex max-w-screen">
        <div className="md:w-full bg-[#160023] w-[150vw]  md:h-screen text-auto justify-center md:flex">
          <Image
            className=" scale-[3] top-1/3 md:top-0 fixed  md:scale-100 md:relative w-screen md:w-[96vw] mt-10 "
            src={FootballField}
            alt="football-field"
          />
          <MiddleText />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
