import Dots from "./components/3dots";
import "./App.css";
import ImageAni from "./components/imageAni";
import Header from "./components/Header";
import HeaderLink from "./components/HeaderLink";
import MainText from "./components/MainText";
import ScrollText from "./components/ScrollText";

function App() {
  return (
    <div className="overflow-x-hidden text-white  ">
      <HeaderLink text="Contact" />
      <MainText text="Xono" />
      <ImageAni />
      <ScrollText />
      <ImageAni />
    </div>
  );
}

export default App;
