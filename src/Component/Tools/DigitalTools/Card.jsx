
import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ plane, cartData, setCartData }) => {
const [isSelected, setIsSelected] = useState(true);

const clickhendelal = (plane) => {

    setCartData([...cartData,plane]);
    setIsSelected(false);
    toast.success("Added susces fuley")
}
  return (
    <div className="shadow p-10 space-y-7 rounded-2xl ">
      <div className="flex justify-between">
        <img src={plane.icon} alt="" className="" />
        <h1
          className={`${plane.tag === "new" ? "bg-[#DBFCE7] text-[#0A883E]" : plane.tag === "best seller" ? "bg-[#FEF3C6] text-[#BB4D00]" : "bg-[#E1E7FF] text-[#9514FA]"} py-1 px-3 rounded-2xl`}
        >
          {plane.tag}
        </h1>
      </div>
      <div className="space-y-2">
        <h1 className="text-[24px] font-bold">{plane.name}</h1>
        <p className="text-gray-500 line-clamp-2">{plane.description}</p>
        <h2 className="text-gray-500">
          <span className="text-[24px] text-black font-bold">
            ${plane.price}
          </span>
          /{plane.period}
        </h2>
      </div>
      <div className="text-gray-500 space-y-2">
        {plane.features.map((feat, index) => {
          return (
            <p key={index} className="flex items-center gap-2">
              <FcCheckmark />
              {feat}
            </p>
          );
        })}
      </div>
      <button onClick={() => clickhendelal(plane)} className="inline-full btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">
        {isSelected? "Bye Now" : "Add Suces"}
      </button>
      
    </div>
  );
};

export default Card;
