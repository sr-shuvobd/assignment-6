import React, { use, useState } from "react";
import ProductsCard from "./ProductsCard";
import CartCard from "./CartCard";



const DigitalTools = ({dataPromish, cartData , setCartData}) => {
  const [card, setCard] = useState("products");
  
  const data = use(dataPromish);

  return (
    <div className="mt-12 container mx-auto">
      <div className="felex text-center space-y-5">
        <h1 className=" font-semibold md:text-5xl">Premium Digital Tools</h1>
        <p className="text-gray-500">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="inline-flex py-2 px-4 rounded-3xl shadow mb-15">
          <button
            onClick={() => setCard("products")}
            className={`btn ${card === "products" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-2 rounded-3xl" : "btn-ghost"}`}
          >
            Products
          </button>
          <button
            onClick={() => setCard("cart")}
            className={`btn ${card === "cart" ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-2 rounded-3xl" : "btn-ghost"}`}
          >
            Cart ({cartData.length})
          </button>
        </div>
      </div>
      {/* card */}
      <div>{card === "products" ? <ProductsCard data={data} cartData={cartData} setCartData={setCartData} /> : <CartCard cartData={cartData} setCartData={setCartData} />}</div>
    </div>
  );
};

export default DigitalTools;
