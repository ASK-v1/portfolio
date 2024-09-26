"use client";

import { useId } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Feature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div ref={ref} className="max-w-5xl">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="flex flex-col sm:flex-row gap-4 w-full mt-8"
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative w-full bg-white border border-neutral-800/25 p-8 rounded-3xl overflow-hidden"
          >
            <Grid />

            <Image
              width={32}
              height={32}
              src={`/icons/${feature.src}`}
              alt={feature.title}
              className="mb-4"
            />

            <h2 className="text-neutral-800 text-xl sm:text-2xl tracking-wide font-medium">
              {feature.title}
            </h2>

            <p className="text-neutral-800 mt-4 text-lg tracking-wide font-light">
              {feature.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const features = [
  {
    title: "Pixel-Perfect",
    description:
      "I craft sleek, responsive web interfaces, focusing on detail to create visually stunning, flawless experiences.",
    src: "layout.svg",
  },
  {
    title: "Fast",
    description:
      "I optimize web applications for speed and performance, making sure they load fast and work seamlessly across all devices.",
    src: "rocket.svg",
  },

  {
    title: "Problem-Solver",
    description:
      "For me, coding is not just about building websites but about solving real-world problems with clean and efficient solutions.",
    src: "puzzle.svg",
  },
];

function Grid() {
  const patternId = useId();

  const p = [
    [Math.floor(Math.random() * 6) + 6, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 6) + 6, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 6) + 6, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 6) + 6, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 6) + 6, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 6) + 6, Math.floor(Math.random() * 6) + 1],
  ];

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-neutral-800/10 to-neutral-800/25">
        <svg className="absolute inset-0 h-full w-full mix-blend-overlay stroke-neutral-800/25 fill-neutral-800/10">
          <defs>
            <pattern
              id={patternId}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
              x="-12"
              y="4"
            >
              <path d={`M.5 20V.5H20`} fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill={`url(#${patternId})`}
          />

          <svg x="-12" y="4" className="overflow-visible">
            {p.map(([x, y]) => (
              <motion.rect
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1,
                  duration: 2,
                  ease: "easeInOut",
                }}
                strokeWidth="0"
                key={`${x}-${y}`}
                width={20 + 1}
                height={20 + 1}
                x={x * 20}
                y={y * 20}
              />
            ))}
          </svg>
        </svg>
      </div>
    </div>
  );
}
