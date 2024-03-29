import React from "react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ScrollText() {
  const w = useRef(null);
  const ref = useRef(null);
  useEffect(() => {
    const [x, xEnd] =
      0 % 2
        ? ["100%", (w.current.scrollWidth - ref.current.offsetWidth) * -1]
        : [w.current.scrollWidth * -1, 0];
    console.log(x, xEnd);
    console.log(w.current, ref.current);
    gsap.fromTo(
      ref.current,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: ref.current,
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <section ref={ref}>
      <div
        className="relative flex justify-between left-56 text-9xl BGB textStroke2"
        ref={w}
      >
        <h1>Xono</h1>
        <h1>Xono</h1>
        <h1>Xono</h1>
        <h1>Xono</h1>
        <h1>Xono</h1>
        <h1>Xono</h1>
        <h1>Xono</h1>
        <h1>Xono</h1>
      </div>
    </section>
  );
}

export default ScrollText;
