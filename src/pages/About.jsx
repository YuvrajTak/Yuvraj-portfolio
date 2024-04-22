import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader, Hero } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Town, Plane, Sky } from "../models";

import "react-vertical-timeline-component/style.min.css";

const About = () => {

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // useEffect(() => {
  //   if (isPlayingMusic) {
  //     audioRef.current.play();
  //   }

  //   return () => {
  //     audioRef.current.pause();
  //   };
  // }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <>
   <section className=''>
   <h1 className='head-text'>
  
        👋
      </h1>
   </section>
      <section className='w-full h-screen relative'>

        {/* <div className='absolute top-28 right-0 z-10 flex items-center justify-center' style={{left:'-400px'}}>
          <h1 className='head-text absolute'>
            Hello, I'm{" "}
            <span className='blue-gradient_text font-semibold drop-shadow'>
              {" "}
              Yuvraj
            </span>{" "}
            👋
          </h1>

        </div>
        <div className='absolute top-28 right-0 z-10 flex items-center justify-center' style={{left:'-150px'}}>
          <div className='mt-6 flex flex-col gap-3 text-slate-500'>
            <p>
              Software Engineer based in India, specializing in building and maintaining Web applications.
            </p>
          </div>

        </div> */}
        <div className='absolute flex items-center justify-center mt-10 mr-4 ml-14 md:ml-40 lg:mt-8 lg:ml-40 lg:mr-16 z-10'>
          <div className='flex flex-col sm:pt-4 sm:pl-1 sm:pr-1 lg:pt-28 lg:pl-40 lg:pr-40 '>
            <h3 className='subhead-text'>My Skills</h3>

            <div className='mt-16 flex flex-wrap gap-12'>
              {skills.map((skill) => (
                <div className='block-container w-20 h-20' key={skill.name}>
                  <div className='btn-back rounded-xl' />
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <Canvas
          className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"
            }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <hemisphereLight
              skyColor='#b1e1ff'
              groundColor='#000000'
              intensity={1}
            />

            <Bird />
            {/* <Sky isRotating={isRotating} /> */}

            {/* <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Town/> */}
            {/* <Plane
              isRotating={isRotating}
              position={biplanePosition}
              rotation={[0, 20.1, 0]}
              scale={biplaneScale}
            /> */}
          </Suspense>
        </Canvas>

      </section>

      <section className='max-container'>
        <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Yuvraj
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in India, specializing in building and maintaining Web applications.
        </p>
      </div>


        <div className='py-16'>
          <h3 className='subhead-text'>Work Experience.</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              I've worked with all sorts of companies, leveling up my skills and
              teaming up with smart people. Here's the rundown:
            </p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p
                      className='text-black-500 font-medium text-base'
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className='text-black-500/50 font-normal pl-1 text-sm'
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <hr className='border-slate-200' />

        <CTA />
      </section>
    </>
  );
};

export default About;
