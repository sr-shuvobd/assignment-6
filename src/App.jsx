import "./App.css";
import Banner from "./Component/Banner/Banner";
import Ratting from "./Component/Banner/Ratting";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  return (
    <>
      <div>
        <div className="w-11/12 m-auto">
        <NavBar/>
        <Banner/>
        </div>
        <Ratting/>

        <div>

        </div>
      </div>
    </>
  );
}

export default App;
