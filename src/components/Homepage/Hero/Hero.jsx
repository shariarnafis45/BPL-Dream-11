import React from "react";
import Herobg from "../../../assets/bg-shadow.png";
import Herologo from "../../../assets/banner-main.png"

const Hero = () => {
  return (
    <div
      className="hero min-h-[80vh] w-11/12 mx-auto rounded-2xl overflow-hidden bg-cover bg-center bg-black"
      style={{
        backgroundImage: `url(${Herobg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <img src={Herologo} alt="" className="mx-auto" />
          <h1 className="mb-5 text-4xl font-bold mt-6 ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="mb-5 text-xl text-gray-400">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="btn btn-primary bg-amber-300 border-none text-black outline outline-yellow-300 shadow-md shadow-amber-100">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
