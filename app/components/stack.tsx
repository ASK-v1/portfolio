"use client";

import { motion, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

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
      containerRef.current.style.setProperty("--animation-duration", "50s");
    }
  }

  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
      id="stack"
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
        Tech Stack
      </motion.h2>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
        ref={containerRef}
        className="scroller relative w-full max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      >
        <ul
          ref={scrollerRef}
          className="flex min-w-full gap-16 w-max animate-scroll"
        >
          {tech.map((item) => (
            <li className="max-w-full" key={item.name}>
              <Image
                width={64}
                height={64}
                src={`/icons/${item.src}`}
                className="bg-white border border-neutral-800/25 rounded-lg p-4"
                alt={item.name}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
