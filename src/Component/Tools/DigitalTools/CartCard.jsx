import { FaCartPlus } from "react-icons/fa";
import CartComponent from "./CartComponent";

const CartCard = ({ cartData, setCartData }) => {
  const total = cartData.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="mb-20">
      {cartData.length === 0 ? (
        <div className="shadow-2xl rounded-2xl p-7">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <div className="flex justify-center items-center text-2xl text- h-40">
            <div className="w-50 text-center flex flex-col justify-center items-center space-y-2 text-gray-500">
              <FaCartPlus className="text-[100px]" />
              <h1>Your cart is empty</h1>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="shadow-2xl  p-10 space-y-5 rounded-2xl">
            <h1 className="font-bold text-4xl">Your Cart</h1>
            {cartData.map((data, ind) => {
              return (
                <CartComponent
                  key={ind}
                  data={data}
                  cartData={cartData}
                  setCartData={setCartData}
                />
              );
            })}
            <div className="flex justify-between">
              <h1 className="text-gray-600">Total: </h1>
              <p className="font-bold text-2xl">${total}</p>
            </div>
            <button
              onClick={() => setCartData([])}
              className="btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-4 py-2 rounded-3xl"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCard;
