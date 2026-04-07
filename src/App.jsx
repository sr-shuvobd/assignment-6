import { Suspense } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Ratting from "./Component/Banner/Ratting";
import NavBar from "./Component/NavBar/NavBar";
import DigitalTools from "./Component/Tools/DigitalTools/DigitalTools";

const fetchData = async() => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const dataPromish = fetchData();
  return (
    <>
      <div>
        
        <NavBar/>
        <Banner/>
        <Ratting/>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <DigitalTools dataPromish={dataPromish}/>
        </Suspense>
        
      </div>
    </>
  );
}

export default App;
