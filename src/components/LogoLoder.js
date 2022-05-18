import React from "react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function LogoLoder() {
  const line = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    let tl2 = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    let tl3 = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(line.current, { rotateZ: "90", duration: 1 })
      .to(line.current, {
        rotateZ: "180",
        duration: 1,
      })
      .to(line.current, {
        rotateZ: "270",
        duration: 1,
      })
      .to(line.current, {
        rotateZ: "360",
        duration: 1,
      })
      .to(line.current, {
        rotateZ: "0",
        duration: 1,
      });
    tl2
      .to(box1.current, { x: "62px", duration: 1 })
      .to(box1.current, { y: "70px", duration: 1 })
      .to(box1.current, { x: "-70px", duration: 1 })
      .to(box1.current, { y: "0px", duration: 1 })
      .to(box1.current, { x: "0px", duration: 1 });
    tl3
      .to(box2.current, { x: "-62px", duration: 1 })
      .to(box2.current, { y: "-70px", duration: 1 })
      .to(box2.current, { x: "+70px", duration: 1 })
      .to(box2.current, { y: "0px", duration: 1 })
      .to(box2.current, { x: "0px", duration: 1 });
  }, []);

  return (
    <div className=" flex flex-col text-[40px]  BGB">
      <div ref={box1}>XO</div>
      <div ref={line} className="inline-block h-1 bg-white w-[70px]"></div>
      <div ref={box2}>NO</div>
    </div>
  );
}

export default LogoLoder;
