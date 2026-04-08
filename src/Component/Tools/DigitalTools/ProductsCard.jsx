
import { FcCheckmark } from "react-icons/fc";
import Card from "./Card";

const ProductsCard = ({ data, cartData, setCartData }) => {
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.map((plane, index) => {
        return (
          <Card key={index} plane={plane} cartData={cartData} setCartData={setCartData} />
        );
      })}
    </div>
  );
};

export default ProductsCard;
