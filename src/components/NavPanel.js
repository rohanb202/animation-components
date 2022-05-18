import React from "react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function NavPanel() {
  const contain = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);
  const box10 = useRef(null);

  useEffect(() => {
    const boxes = [
      box1.current,
      box2.current,
      box3.current,
      box4.current,
      box5.current,
      box6.current,
      box7.current,
      box8.current,
      box9.current,
      box10.current,
    ];
    let tl = gsap.timeline();

    tl.to([...boxes], {
      stagger: 0.1,
      duration: 1,

      x: "-10px",
      opacity: 0,

      ease: "power3.inOut",
    }).to([...boxes], {});
  }, []);

  return (
    <div>
      <div className="absolute z-10 flex overflow-x-hidden " ref={contain}>
        <div ref={box1} className="w-[10vw] h-[100vh] bg-lime-400"></div>
        <div ref={box2} className="w-[10vw] h-[100vh] bg-lime-400"></div>
        <div ref={box3} className="w-[10vw] h-[100vh] bg-lime-400"></div>
        <div ref={box4} className="w-[10vw] h-[100vh] bg-lime-400"></div>
        <div ref={box5} className="w-[10vw] h-[100vh] bg-lime-400"></div>
        <div ref={box6} className="w-[10vw] h-[100vh] bg-lime-400"></div>
        <div ref={box7} className="w-[10vw] h-[100vh] bg-lime-400"></div>
        <div ref={box8} className="w-[10vw] h-[100vh] bg-lime-400"></div>
        <div ref={box9} className="w-[10vw] h-[100vh] bg-lime-400"></div>
        <div ref={box10} className="w-[10vw] h-[100vh] bg-lime-400"></div>
      </div>
    </div>
  );
}

export default NavPanel;
