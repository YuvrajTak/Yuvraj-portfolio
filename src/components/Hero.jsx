"use client";
import { useEffect, useRef } from "react";
import  Shapes  from "./Shape";
import Bounded from "./Bounded";
import gsap from "gsap";


/**
 * Component for "Hero" Slices.
 */
const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  const renderLetters = (name, key) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Bounded
      data-slice-type={'hero'}
      data-slice-variation={undefined}
      ref={component}
    >
      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
      <Shapes />
        {/* <Shapes /> */}
        <div className="col-start-1 md:row-start-1 " data-speed=".2">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label={
             'Yuvarj' + " " + 'Tak'
            }
          >
            <span className="block text-black-300 ml-10">
              {renderLetters('Yuvraj', "first")}
            </span>
            <span className="-mt-[.2em] ml-12 block text-slate-500  ">
              {renderLetters('Tak', "last")}
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            {'Full Stack Developer'}
          </span>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
