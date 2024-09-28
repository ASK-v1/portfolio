"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const photo = process.env.NEXT_PUBLIC_PHOTO ?? "";
  const about = process.env.NEXT_PUBLIC_ABOUT ?? "";
  return (
    <div
      id="about"
      ref={ref}
      className="flex gap-8 items-start justify-center w-full max-w-5xl flex-col"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="text-neutral-800 font-medium text-4xl sm:text-5xl"
      >
        About Me
      </motion.h2>

      <motion.div
        className="flex flex-col gap-8 w-full items-start justify-start"
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-row shrink-0 items-end gap-4">
          <Image
            quality={100}
            alt="photo"
            width={128}
            height={128}
            className="rounded-full w-32 h-32"
            src={photo}
          />

          <div className="flex flex-col items-start">
            <p className="tracking-wide font-normal text-3xl sm:text-4xl text-center">
              Ahmet Kantar
            </p>
            <p className="tracking-wide font-light text-xl sm:text-2xl text-center">
              Front End Developer
            </p>
          </div>
        </div>

        <p className="text-neutral-800 font-light w-full tracking-wide text-xl sm:text-2xl">
          {about}
        </p>
      </motion.div>
    </div>
  );
}
