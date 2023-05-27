import "./App.css";
import Circles from "./Components/Circles";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
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
        <div className="lg:my-56 ">
          <Circles />
         
        </div>

        {/* support */}
        <div>
          <Support />
        </div>

        {/* scroller */}
      </div>
    </>
  );
}

export default App;
