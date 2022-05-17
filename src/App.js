import Dots from "./components/3dots";
import "./App.css";
import ImageAni from "./components/imageAni";
import Header from "./components/Header";
import HeaderLink from "./components/HeaderLink";
import MainText from "./components/MainText";

function App() {
  return (
    <div className="h-screen text-white bg-black">
      <HeaderLink text="Contact" />
      <MainText text="Xono" />
      <ImageAni />
    </div>
  );
}

export default App;
