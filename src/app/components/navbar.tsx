import React from "react";

const NavbarComponent = () => {
  // Double the number of items for a smooth looping effect
  const items = Array.from({ length: 10 }); // Create an array with 20 items

  return (
    <div className="overflow-hidden md:h-screen md:sticky bg-aquagreen">
      <div
        className="grid w-full px-4 gap-6 justify-center pt-4"
        style={{
          animation: "smoothScroll 10s linear infinite",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {items.map((_, index) => (
          <div
            key={index}
            className="border bg-black bg-opacity-80 text-aquagreen px-12 text-5xl h-32 flex text-center justify-center items-center border-black"
          >
            PLAYER NFT
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarComponent;
