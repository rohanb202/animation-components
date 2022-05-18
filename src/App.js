import Dots from "./components/3dots";
import "./App.css";
import ImageAni from "./components/imageAni";
import Header from "./components/Header";
import HeaderLink from "./components/HeaderLink";
import MainText from "./components/MainText";
import ScrollText from "./components/ScrollText";
import NavPanel from "./components/NavPanel";
import LogoLoder from "./components/LogoLoder";

function App() {
  return (
    <div className="relative h-screen overflow-x-hidden text-white ">
      <div className="flex items-center justify-center w-full h-full">
        <LogoLoder />
      </div>
      {/* <NavPanel /> */}
      {/* <HeaderLink text="Contact" />
      <MainText text="Xono" />
      <ImageAni />
      <ScrollText />
      <ImageAni /> */}
    </div>
  );
}

export default App;
