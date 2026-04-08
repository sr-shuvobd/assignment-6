import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Ratting from "./Component/Banner/Ratting";
import NavBar from "./Component/NavBar/NavBar";
import DigitalTools from "./Component/Tools/DigitalTools/DigitalTools";
import { ToastContainer } from "react-toastify";

const fetchData = async() => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const dataPromish = fetchData();

  const [cartData, setCartData] = useState([])
  return (
    <>
      <div>
        
        <NavBar cartData={cartData}/>
        <Banner/>
        <Ratting/>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <DigitalTools dataPromish={dataPromish} cartData={cartData} setCartData={setCartData}/>
        </Suspense>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
