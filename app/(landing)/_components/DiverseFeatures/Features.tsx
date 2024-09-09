"use client";

import { Feature } from "./Feature";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Features = () => {
  const featuresRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      featuresRef.current,
      { xPercent: -100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: featuresRef.current,
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
    <div className="w-screen h-max mb-48 bg-black relative">
      <div
        className="absolute max-2xl:top-[38%] top-[20%] left-[5%] w-[244px] h-[544px] rounded-full blur-[38px] z-0"
        style={{
          background: "linear-gradient(180.00deg, yellow, red 100%)",
        }}
      />
      <div
        className="absolute max-lg:top-0 top-[20%] right-[5%] w-[244px] h-[544px] rounded-full blur-[88px] z-0"
        style={{
          background:
            "linear-gradient(180.00deg, red,rgba(17, 84, 255, 0.46) 100%)",
        }}
      />

      <div className="z-20" ref={featuresRef}>
        <div className="max-w-7xl mx-auto z-20">
          <h1 className="text-center text-white text-6xl font-semibold">
            Unlock Powerful Features
          </h1>
          <p className="text-center text-gray-500 text-2xl mt-7 font-semibold">
            Discover the range of powerful features that make CollaboraHub the
            ultimate collaborative platform. From real-time document editing and
            seamless communication to customizable project management tools,
            CollaboraHub has everything you need to streamline your workflow and
            achieve your goals faster.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-16 gap-8 p-5">
          <Feature
            title="Real-time Collaborations"
            description="Collaborate seamlessly with real-time updates, fostering a culture of transparency and accountability."
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          />
          <div className="grid max-md:grid-col-2 lg:row-auto">
            <Feature
              title="User-Centric Approach"
              description="We listen to the wishes and suggestions of our users"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            />
            <Feature
              title="Free"
              description="Our service is completely free"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            />
          </div>
          <Feature
            title="Boards"
            description="Here is a Boards service on our website where you can create joint boards with your team members and plan work on the project."
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          />
        </div>
      </div>
    </div>
  );
};
