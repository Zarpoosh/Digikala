import "./App.css";
import AutoSlider from "./Components/AutoSlider";
import Circles from "./Components/Circles";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import SuperMarket from "./Components/SuperMarket";
import Support from "./Components/Support";

function App() {
  return (
    <>
      <div className="flex flex-col w-full ">
        {/* header */}
        <div className=" border-b fixed bg-white" style={{ zIndex: "1" }}>
          <Header className="" />
        </div>

        {/* slider */}
        <div className="">
          <Slider />
        </div>

        {/* circles */}
        <div className="lg:mt-[200px]">
          <Circles />         
        </div>

        {/* support */}
        <div style={{ zIndex: "1" }}>
          <Support />
        </div>

        {/* carousel */}
        <div>
          <AutoSlider/>
        </div>

        {/* supermarket */}
        <div>
          {/* <SuperMarket/> */}
        </div>
       
      </div>
    </>
  );
}

export default App;
