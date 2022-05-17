import "../App.css";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
function Dots() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  useEffect(() => {
    gsap.to(app, { duration: 0, css: { visibility: "visible" } });
    /*gsap.from(circle, {
      opacity: 0,
      duration: 0.8,
      x: 40,
      ease: "Power3.easeOut",
    });
    gsap.from(circleRed, {
      opacity: 0,
      duration: 0.8,
      x: 40,
      delay: 0.2,
      ease: "Power3.easeOut",
    });
    gsap.from(circleBlue, {
      opacity: 0,
      duration: 0.8,
      x: 40,
      delay: 0.4,
      ease: "Power3.easeOut",
    });*/
    gsap.from([circle, circleRed, circleBlue], {
      opacity: 0,
      duration: 0.8,
      x: 80,
      ease: "Power3.easeOut",
      stagger: 0.3,
    });
  }, []);
  const [toggle, setToggle] = useState(true);
  const expand = () => {
    gsap.to(circleRed, {
      duration: 0.8,
      width: 200,
      height: 200,
      ease: "Power3.easeOut",
    });
    setToggle(!toggle);
  };
  const shrink = () => {
    gsap.to(circleRed, {
      duration: 0.8,
      width: 75,
      height: 75,
      ease: "Power3.easeOut",
    });
    setToggle(!toggle);
  };
  return (
    <div
      className="App"
      ref={(el) => {
        app = el;
      }}
    >
      <div className="App-header">
        <div className="cirlce-container">
          <div
            className="circle"
            ref={(el) => {
              circle = el;
            }}
          ></div>
          <div
            onClick={toggle ? expand : shrink}
            className="circle red "
            ref={(el) => {
              circleRed = el;
            }}
          ></div>
          <div
            className="circle blue"
            ref={(el) => {
              circleBlue = el;
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
export default Dots;
