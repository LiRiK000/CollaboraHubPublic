"use client";

import { Feature } from "../DiverseFeatures/Feature";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const FuturePlans = () => {
  const sectionRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { xPercent: 100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "-=400 center",
          end: "bottom center",
          scrub: false,
        },
        xPercent: 0,
        opacity: 1,
      }
    );
  }, []);
  const handleCardHover = (e: any) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      duration: 0.1,
      ease: "power2.inOut",
    });
  };

  const handleCardLeave = (e: any) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.1,
      ease: "power2.inOut",
    });
  };
  return (
    <div className="w-screen min-h-screen bg-black relative">
      <div
        className="absolute top-[50%] left-[30%] w-[244px] h-[344px] rounded-full blur-[58px] z-0"
        style={{
          background:
            "linear-gradient(180.00deg, rgb(242, 47, 176),rgba(245, 138, 37, 0) 100%,rgb(112, 97, 163) 100%)",
        }}
      />
      <div
        className="absolute top-[0%] right-[5%] w-[344px] h-[244px] rounded-full blur-[58px] z-0"
        style={{
          background: "linear-gradient(180.00deg, red, yellow 100%)",
        }}
      />
      <div
        className="absolute top-[0%] left-[5%] w-[344px] h-[244px] rounded-full blur-[48px] z-0"
        style={{
          background:
            "linear-gradient(180.00deg, red,rgba(17, 84, 255, 0.46) 100%)",
        }}
      />
      <div className="z-20" ref={sectionRef}>
        <div className="max-w-7xl mx-auto z-20">
          <h1 className="text-center text-white text-6xl font-semibold">
            Future Plans
          </h1>
          <p className="text-center text-gray-400 text-2xl mt-7 font-semibold">
            What features and features are we going to implement in CollaboraHub
            in the near future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-16 gap-8 p-5">
          <Feature
            title="Changing the color theme"
            description="We want to implement the functionality. which will perform the functions of changing the color theme"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          />
          <div className="grid max-md:grid-col-2 lg:row-auto">
            <Feature
              title="Notes"
              description="A service for creating notes with the possibility of team interaction"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            />
            <Feature
              title="Localization"
              description="Translate the service into a number of other languages"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            />
          </div>
          <Feature
            title="Kanban board"
            description="We want to add a kanban board to our service with the ability to interact in real-time"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          />
        </div>
      </div>
    </div>
  );
};
