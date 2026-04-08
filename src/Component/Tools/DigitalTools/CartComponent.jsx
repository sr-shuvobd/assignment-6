import React from "react";
import { toast } from "react-toastify";

const CartComponent = ({ data, cartData, setCartData }) => {
    const deletehendel= (data) => {
        const filterData = cartData.filter(afterDelet => afterDelet.id != data.id);
        setCartData(filterData)
        toast.success("Product removed successfully")
    }
  return (
    <div className="flex shadow justify-between p-6 rounded-2xl">
      <div className="flex gap-6">
        <img className="shadow p-3 rounded-4xl" src={data.icon} alt="" />
        <div>
          <h1 className="truncate font-semibold">{data.name}</h1>
          <h2 className="text-gray-500">${data.price}</h2>
        </div>
      </div>
      <button onClick={()=> deletehendel(data)} className="text-red-600">Remove</button>
    </div>
  );
};

export default CartComponent;
