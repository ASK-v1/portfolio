"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 text-neutral-950">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.42, 0, 0.58, 1],
        }}
        className="flex flex-row gap-2 items-center shadow-lg shadow-teal-500/25 bg-teal-100 text-teal-500 px-2.5 text-sm text-center py-1 rounded-full"
      >
        <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full" />
        <span>Available for work</span>
      </motion.div>

      <div className="flex flex-col gap-4 items-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="text-5xl max-w-[640px] leading-none tracking-tight sm:text-6xl text-center font-semibold flex flex-col items-center"
        >
          Hey There, I am Ahmet, a Front End Developer.
        </motion.h1>

        <motion.div
          className="flex flex-col gap-8 items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: [0.42, 0, 0.58, 1],
          }}
        >
          <p className="max-w-xl w-full text-center text-lg text-neutral-500">
            Experienced Front End Developer with a focus on{" "}
            <span className="relative font-semibold text-teal-500 inline-block stroke-current">
              React
              <svg
                className="absolute -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                fill="none"
              >
                <motion.path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  stroke-width="2"
                  initial={{
                    strokeDasharray: 84.20591735839844,
                    strokeDashoffset: 84.20591735839844,
                  }}
                  animate={{
                    strokeDashoffset: 0,
                  }}
                  transition={{
                    delay: 1,
                    duration: 1,
                  }}
                />
              </svg>
            </span>{" "}
            and{" "}
            <span className="relative font-semibold text-teal-500 inline-block stroke-current">
              JavaScript
              <svg
                className="absolute -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                fill="none"
              >
                <motion.path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  stroke-width="1.4"
                  initial={{
                    strokeDasharray: 84.20591735839844,
                    strokeDashoffset: 84.20591735839844,
                  }}
                  animate={{
                    strokeDashoffset: 0,
                  }}
                  transition={{
                    delay: 1,
                    duration: 1,
                  }}
                />
              </svg>
            </span>
            , who thrives on building engaging and effective web applications.
          </p>

          <button className="py-3 hover:bg-neutral-800 font-semibold text-sm duration-200 w-40 text-white bg-neutral-950 rounded-full">
            Let&apos;s Talk
          </button>
        </motion.div>
      </div>
    </div>
  );
}
