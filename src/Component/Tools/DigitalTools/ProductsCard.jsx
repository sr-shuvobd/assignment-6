
import AfterCart from "../../AfterCart/AfterCart";
import Card from "./Card";

const ProductsCard = ({ data, cartData, setCartData }) => {
  
  return (
    <div>
      {/* card */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.map((plane, index) => {
        return (
          <Card key={index} plane={plane} cartData={cartData} setCartData={setCartData} />
        );
      })}
    </div>
      <AfterCart/>
    </div>
  );
};

export default ProductsCard;
