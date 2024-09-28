"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const [isHovered, setIsHovered] = useState(false);

  const name = process.env.NEXT_PUBLIC_WORK_NAME ?? "";
  const img = process.env.NEXT_PUBLIC_WORK_IMG ?? "";
  const url = process.env.NEXT_PUBLIC_WORK_URL ?? "";
  const desc = process.env.NEXT_PUBLIC_WORK_DESC ?? "";
  const status = process.env.NEXT_PUBLIC_WORK_STATUS ?? "";

  const nameVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: -20, opacity: 0 },
  };
  const newNameVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const imgVariants = {
    hidden: { opacity: 0, y: 160, rotate: 16 },
    visible: { opacity: 1, y: 0, rotate: -8 },
  };
  const descVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const stack = [
    {
      name: "TypeScript",
      src: "typescript.svg",
    },
    {
      name: "Next.js",
      src: "nextjs.svg",
    },
    {
      name: "Tailwind CSS",
      src: "tailwindcss.svg",
    },
    {
      name: "Prisma",
      src: "prisma.svg",
    },
    {
      name: "Amazon Web Services",
      src: "aws.svg",
    },
  ];

  return (
    <div
      id="work"
      ref={ref}
      className="flex items-start justify-center w-full max-w-5xl flex-col"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="text-neutral-800 font-medium text-4xl sm:text-5xl mb-8"
      >
        Recent Work
      </motion.h2>

      <motion.a
        target="_blank"
        href={url}
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group cursor-pointer flex flex-col sm:flex-row w-full gap-4 items-start sm:items-center sm:justify-between tracking-wide text-neutral-800"
      >
        <div className="flex flex-col gap-2 items-start">
          <div className="flex flex-row gap-2 items-center tracking-wide font-light text-lg text-center rounded-full">
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
            <span>{status}</span>
          </div>

          <motion.div
            className="relative cursor-pointer w-40 overflow-hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            <motion.span
              variants={nameVariants}
              className="relative text-3xl sm:text-4xl inset-0 flex items-center justify-start"
            >
              {name}
            </motion.span>

            <motion.span
              variants={newNameVariants}
              className="absolute text-teal-500 text-3xl sm:text-4xl inset-0 flex items-center justify-start"
            >
              {name}

              <Image
                alt="arrow"
                width={40}
                height={40}
                src={"/icons/arrow.svg"}
              />
            </motion.span>
          </motion.div>
        </div>

        <motion.img
          className="absolute -z-10 right-16 rounded-3xl hidden sm:flex"
          variants={imgVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          width={480}
          height={300}
          alt={name}
          src={img}
        />

        <motion.div
          animate={isHovered ? "hidden" : "visible"}
          variants={descVariants}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="flex flex-col items-start sm:items-end gap-2"
        >
          <p className="text-xl sm:text-2xl font-light">{desc}</p>

          <ul className="flex gap-2">
            {stack.map((item) => (
              <li
                className="bg-white border border-neutral-800/25 rounded p-2"
                key={item.name}
              >
                <Image
                  quality={100}
                  width={16}
                  height={16}
                  src={`/icons/${item.src}`}
                  alt={item.name}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.a>
    </div>
  );
}
