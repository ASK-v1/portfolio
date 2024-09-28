"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const photo = process.env.NEXT_PUBLIC_PHOTO ?? "";

  const textVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: -20, opacity: 0 },
  };
  const newTextVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={isAnimating ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="flex flex-row items-center justify-between w-full max-w-5xl text-neutral-800"
    >
      <Image
        quality={100}
        alt="photo"
        width={56}
        height={56}
        className="rounded-full w-10 h-10 sm:w-14 sm:h-14 shrink-0"
        src={photo}
      />

      <nav className="flex flex-row items-center gap-4 sm:gap-8 tracking-wide">
        <motion.a
          href="#stack"
          className="relative cursor-pointer overflow-hidden"
          whileHover="visible"
          initial="hidden"
        >
          <motion.span
            variants={textVariants}
            className="relative text-xl sm:text-2xl inset-0 flex items-center justify-center"
          >
            Stack
          </motion.span>

          <motion.span
            variants={newTextVariants}
            className="absolute text-teal-500 text-xl sm:text-2xl inset-0 flex items-center justify-center"
          >
            Stack
          </motion.span>
        </motion.a>

        <motion.a
          href="#work"
          className="relative cursor-pointer overflow-hidden"
          whileHover="visible"
          initial="hidden"
        >
          <motion.span
            variants={textVariants}
            className="relative text-xl sm:text-2xl inset-0 flex items-center justify-center"
          >
            Work
          </motion.span>

          <motion.span
            variants={newTextVariants}
            className="absolute text-teal-500 text-xl sm:text-2xl inset-0 flex items-center justify-center"
          >
            Work
          </motion.span>
        </motion.a>

        <motion.a
          href="#about"
          className="relative cursor-pointer overflow-hidden"
          whileHover="visible"
          initial="hidden"
        >
          <motion.span
            variants={textVariants}
            className="relative text-xl sm:text-2xl inset-0 flex items-center justify-center"
          >
            About
          </motion.span>

          <motion.span
            variants={newTextVariants}
            className="absolute text-teal-500 text-xl sm:text-2xl inset-0 flex items-center justify-center"
          >
            About
          </motion.span>
        </motion.a>
      </nav>
    </motion.header>
  );
}
