import React from "react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function HeaderLink({ text }) {
  let ref = useRef(null);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    let tl = gsap.timeline();
    if (hover) {
      tl.to(ref, {
        duration: 0.5,
        y: "-30px",
        opacity: 0,
      })
        .to(ref, {
          y: "10px",
        })
        .to(ref, {
          opacity: 1,
          y: "0px",
        });
    }

    //console.log(hover);
  }, [hover]);
  return (
    <div className="">
      <div className="inline-block p-2 " onMouseLeave={() => setHover(false)}>
        <h1
          onMouseEnter={() => setHover(true)}
          ref={(el) => {
            ref = el;
          }}
          className="inline-block cursor-pointer BGB "
        >
          {text}
        </h1>
      </div>
    </div>
  );
}

export default HeaderLink;
