import React from "react";
import banner from "../../assets/banner.png";
import dot from "../../assets/dot.png";
import { CiPlay1 } from "react-icons/ci";
import Ratting from "./Ratting";

const Banner = () => {
  return (
    <div>
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-3 bg-[#E1E7FF] rounded-2xl p-2 px-6 text-[#4F39F6] ">
          <img src={dot} alt="" className="w-5 h-5"/>
          <h2> New: AI-Powered Tools Available</h2>
        </div>

        <div>
          <h1 className="text-[72px] font-extrabold">Supercharge Your <br /> Digital Workflow</h1>
        </div>
        <div className="w-[640px] text-[#627382]">
          <p>
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
        </div>
        <div className="space-x-5">
          <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl text-white">Explore Products</button>
          <button className="btn btn-outline btn-primary rounded-3xl "><CiPlay1 />Watch Demo</button>
        </div>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
    
    </div>
  );
};

export default Banner;
