"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const tech = [
  {
    name: "JavaScript",
    src: "javascript.svg",
  },
  {
    name: "TypeScript",
    src: "typescript.svg",
  },
  {
    name: "CSS",
    src: "css.svg",
  },
  {
    name: "Tailwind CSS",
    src: "tailwindcss.svg",
  },
  {
    name: "React",
    src: "react.svg",
  },
  {
    name: "Next.js",
    src: "nextjs.svg",
  },
  {
    name: "Vue.js",
    src: "vuejs.svg",
  },
  {
    name: "Nuxt.js",
    src: "nuxtjs.svg",
  },
  {
    name: "Node.js",
    src: "nodejs.svg",
  },
  {
    name: "Prisma",
    src: "prisma.svg",
  },
  {
    name: "Redux",
    src: "redux.svg",
  },
  {
    name: "Git",
    src: "git.svg",
  },
  {
    name: "Amazon Web Services",
    src: "aws.svg",
  },
];

export default function Stack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      containerRef.current.style.setProperty("--animation-direction", "normal");
      containerRef.current.style.setProperty("--animation-duration", "100s");
    }
  }

  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div className="flex gap-8 items-start justify-center w-full max-w-7xl flex-col">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.25,
          duration: 0.5,
          ease: [0.42, 0, 0.58, 1],
        }}
        className="text-neutral-800 font-medium text-3xl sm:text-4xl"
      >
        Tech Stack
      </motion.h2>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: [0.42, 0, 0.58, 1],
        }}
        ref={containerRef}
        className="scroller flex flex-col gap-8 text-neutral-800 relative w-full max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      >
        <span className="border-b border-neutral-300 w-full" />

        <ul
          ref={scrollerRef}
          className="flex min-w-full gap-20 w-max animate-scroll"
        >
          {tech.map((item) => (
            <li className="max-w-full" key={item.name}>
              <Image
                width={32}
                height={32}
                src={`/icons/${item.src}`}
                alt={item.name}
              />
            </li>
          ))}
        </ul>

        <span className="border-b border-neutral-300 w-full" />
      </motion.div>
    </div>
  );
}
