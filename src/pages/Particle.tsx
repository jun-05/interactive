import React from "react";

export const Particle = () => {
  const buttonStyle =
    "z-10 mx-1 bg-white text-black px-5 py-2 transition-all duration-300 ease-out ";
  const buttonActive =
    " hover:bg-black hover:text-white active:bg-black active:text-white";

  return (
    <div className="overflow-hidden font-serif bg-cyan-400 transition-all duration-500 ">
      <h1 className="fixed w-full font-thin text-center">
        Random Number Particle With GSAP
      </h1>
      <div className="w-screen h-screen"></div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <button className={buttonStyle + buttonActive}>NO 1</button>
        <button className={buttonStyle + buttonActive}>NO 2</button>
        <button className={buttonStyle + buttonActive}>NO 3</button>
      </div>
    </div>
  );
};

export default Particle;
