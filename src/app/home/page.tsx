"use client";
import React from "react";
import fieldPlayers from "../../../public/field_with_players.png";
import tokenomic from "../../../public/tokenomics.png";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className=" min-h-screen my-6 md:my-10" style={{}}>
      <style jsx global>{`
        p {
          font-size: 1.2vw;
        }
      `}</style>
      <div className="md:pl-20 pl-5 pr-5">
        <div className=" grid md:grid-cols-12">
          <div className="md:order-1 order-2 md:col-span-8">
            <Image src={fieldPlayers} alt="field_players"></Image>
          </div>
          <div className="md:pr-6 md:col-span-4">
            <div className="text-center">
              <h1 className="text-7xl">FUTSOL</h1>
            </div>
            <p className="text-aquagreen md:text-justify text-center md:text-lg text-xl">
              {`Compete, win & earn. Solana's next-gen fantasy football game.
              Glory is one transfer away.`}
            </p>

            <p
              style={{
                boxShadow: "inset 0 -20px 20px -20px rgba(255,255,255,0.5)",
              }}
              className="pb-4 my-4 md:my-auto md:text-[1.2vw] overflow-auto md:overflow-hidden h-40 md:h-auto text-[16px] text-justify"
            >
              {` Welcome to the exciting world of Solana's Next-Gen Fantasy
              Football Game "FUTSOL", where sports passion meets blockchain
              innovation. We are thrilled to announce a platform that redefines
              the fantasy sports you've seen before, providing not only the
              excitement of competition but also the ability to win prizes like
              never before.`}
            </p>
          </div>
        </div>
        <p className="text-justify md:text-[1.2vw] text-[16px] pt-6">
          Our vision is simple yet ambitious: to create a thrilling gaming
          experience on the Solana blockchain, where players can compete in
          fantasy football leagues, showcase their managing skills, and earn
          valuable tokens for their achievements. What sets us apart is our
          commitment to leveraging the power of blockchain to provide a fair and
          engaging experience for all participants.
        </p>
        <div className="pt-8 grid md:grid-cols-12 md:border-none border-t mt-10 md:mt-5">
          <div className=" md:pr-6 md:col-span-6">
            <div className="text-center">
              <h1 className="text-4xl">TOKENOMICS</h1>
            </div>
            <p className="text-aquagreen text-center md:text-lg text-xl">
              {`First step of earn `}
            </p>

            <p
              style={{
                boxShadow: "inset 0 -20px 20px -20px rgba(255,255,255,0.5)",
              }}
              className="md:text-[1.2vw] pb-4 text-justify overflow-auto md:overflow-hidden h-40 my-6 md:text-lg text-[16px]"
            >
              {` One of the key innovations of our platform is the introduction of two distinct tokens, each serving a unique purpose within the ecosystem. These tokens will revolutionize the way players interact with the game. Our first token will provide revenue-sharing rights as well as a discount on purchasing NFTs, and our second token will introduce new ways to earn, trade, and participate in the community. Additionally, we're proud to announce that all footballers featured in the game are represented as Non-Fungible Tokens (NFTs), each with its own unique attributes and characteristics.`}
            </p>
          </div>
          <div className=" md:col-span-6">
            <Image src={tokenomic} alt="tokenomics map"></Image>
          </div>
        </div>
        <div className="md:hidden block mt-10 border-t w-full">
          <div className="text-center">
            <h1 className="text-4xl my-6">LEARN MORE</h1>
          </div>
          <div className="flex gap-6 mx-auto justify-center text-center items-center">
            <Link
              className=" flex items-center"
              href={"https://twitter.com/playfutsol"}
              target="blank"
            >
              <BsTwitterX className="text-aquagreen " size={40} />
            </Link>

            <Link
              className=" flex items-center"
              href={"https://medium.com/@playfutsol"}
              target="blank"
            >
              <FaMedium className=" text-aquagreen" size={48} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
