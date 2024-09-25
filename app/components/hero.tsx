"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FramerButton from "./framer-button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isAnimating ? { y: 0, opacity: 1 } : {}}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="flex flex-row gap-2 items-center tracking-wide font-light bg-white border border-neutral-800/25 text-neutral-800 px-2.5 text-lg text-center rounded-full"
      >
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: [1, 0.75, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-2.5 h-2.5 bg-teal-500 rounded-full shadow-[0_0_5px_5px_rgba(20,184,166,0.25)]"
        />
        <span>Available for work</span>
      </motion.div>

      <div className="flex flex-col gap-4 items-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={isAnimating ? { y: 0, opacity: 1 } : {}}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-7xl leading-none max-w-2xl sm:text-8xl text-neutral-800 text-center font-medium flex flex-col items-center"
        >
          Hey There, I am Ahmet, a Front End Developer.
        </motion.h1>

        <motion.div
          className="flex flex-col items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isAnimating ? { y: 0, opacity: 1 } : {}}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <p className="max-w-xl w-full text-center font-light tracking-wide text-xl sm:text-2xl text-neutral-800">
            Experienced Front End Developer with a focus on{" "}
            <span className="relative inline-block stroke-current">
              React
              <svg
                className="absolute text-teal-500 -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                fill="none"
              >
                <motion.path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  strokeWidth="3.2"
                  initial={{
                    strokeDasharray: 84.20591735839844,
                    strokeDashoffset: 84.20591735839844,
                  }}
                  animate={{
                    strokeDashoffset: 0,
                  }}
                  transition={{
                    delay: 1,
                    duration: 2,
                  }}
                />
              </svg>
            </span>{" "}
            and{" "}
            <span className="relative inline-block stroke-current">
              JavaScript
              <svg
                className="absolute text-teal-500 -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                fill="none"
              >
                <motion.path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  strokeWidth="2"
                  initial={{
                    strokeDasharray: 84.20591735839844,
                    strokeDashoffset: 84.20591735839844,
                  }}
                  animate={{
                    strokeDashoffset: 0,
                  }}
                  transition={{
                    delay: 1,
                    duration: 2,
                  }}
                />
              </svg>
            </span>
            , who thrives on building engaging and effective web applications.
          </p>

          <Link target="_blank" href="mailto:a.kntr93@gmail.com">
            <FramerButton className="group p-8 -mb-8">
              <p className="py-2.5 group-hover:bg-teal-500 text-lg tracking-wide font-normal w-28 text-white bg-neutral-800 rounded-full">
                Let&apos;s Talk
              </p>
            </FramerButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
