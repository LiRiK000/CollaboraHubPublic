"use client";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import Link from "next/link";
import React from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const Hero = () => {
  const textBlockRef = useRef(null);
  const blobsRef = useRef(null);
  useGSAP(() => {
    gsap.to(blobsRef.current, {
      opacity: 1,
      duration: 0.2,
      delay: 0.2,
    });
    gsap.to(textBlockRef.current, {
      opacity: 1,
      duration: 1,
      delay: 0.8,
    });
  }, []);
  return (
    <div className="w-screen h-max z-50 relative mb-24">
      <div ref={blobsRef} style={{ opacity: 0 }}>
        <div
          className="absolute top-[20%] left-[35%] w-[644px] h-[644px] rounded-full blur-[168px]"
          style={{
            background:
              "linear-gradient(180.00deg, rgb(66, 142, 255),rgba(17, 84, 255, 0.46) 100%)",
          }}
        />
        <div
          className="absolute top-[20%] left-[60%] w-[340px] h-[340px] rounded-full blur-[85px]"
          style={{
            background:
              "linear-gradient(180.00deg, rgb(242, 47, 176),rgba(245, 138, 37, 0) 100%,rgb(112, 97, 163) 100%)",
          }}
        />
        <div
          className="absolute top-[60%] left-[20%] w-[340px] h-[340px] rounded-full blur-[68px]"
          style={{
            background:
              "linear-gradient(180.00deg, rgb(125, 64, 255),rgba(245, 138, 37, 0) 100%,rgb(114, 48, 255) 100%)",
          }}
        />
      </div>
      <div className="flex flex-col gap-y-12 max-w-4xl mx-auto h-screen justify-center items-center">
        <div className="z-10" style={{ opacity: 0 }} ref={textBlockRef}>
          <h1 className="max-md:text-4xl text-6xl text-white text-center font-semibold">
            CollaboraHub - The place where you and your colleagues can
            collaborate on any project, anytime, anywhere.
          </h1>
          <p className="max-md:text-2xl text-3xl text-gray-300 text-center mt-6 font-semibold">
            Manage your projects the way it suits you
          </p>
          <div className="text-center mt-6">
            <Link href="/dashboard">
              <Button
                className="bg-white text-black rounded-3xl hover:bg-white hover:text-violet-950 mr-2 text-lg"
                size={"lg"}
              >
                Go to Dashboard
              </Button>
            </Link>
            <Hint
              side="right"
              label={"In work"}
              children={
                <Button
                  size={"lg"}
                  className="bg-gray-600 text-white hover:bg-gray-700 rounded-3xl text-lg mt-2"
                >
                  Go to Kanban
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
