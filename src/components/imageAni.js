import React from "react";
import img1 from "./img1.jpg";
import "../App.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
const ImageAni = () => {
  let container = useRef(null);
  let image = useRef(null);
  let tl = gsap.timeline({ delay: 0.8 });
  useEffect(() => {
    tl.to(container, { duration: 0, visibility: "visible" })
      .to("html", {
        "--width": "0%",
        duration: 1.4,
        ease: "Power2.easeInOut",

        transformOrigin: "right top",
      })
      .from(image, {
        scale: 1.6,
        duration: 1.4,
        ease: "Power2.easeInOut",
        delay: -1.6,
      });
  }, [tl]);

  return (
    <div className="flex items-center justify-center w-full h-screen m-auto">
      <div
        className="relative w-8/12 overflow-hidden h-3/4 img-con "
        ref={(el) => {
          container = el;
        }}
      >
        <img
          className="absolute object-cover w-full h-full "
          src={img1}
          ref={(el) => {
            image = el;
          }}
        ></img>
      </div>
    </div>
  );
};

export default ImageAni;
