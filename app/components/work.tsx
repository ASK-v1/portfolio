"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const name = process.env.NEXT_PUBLIC_PORTFOLIO_NAME ?? "";
  const img = process.env.NEXT_PUBLIC_PORTFOLIO_IMG ?? "";
  const url = process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "";
  const desc = process.env.NEXT_PUBLIC_PORTFOLIO_DESC ?? "";
  const status = process.env.NEXT_PUBLIC_PORTFOLIO_STATUS ?? "";

  return (
    <div
      ref={ref}
      className="flex gap-8 items-start justify-center w-full max-w-7xl flex-col"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="text-neutral-800 font-medium text-3xl sm:text-4xl"
      >
        My Works
      </motion.h2>

      <motion.div
        className="flex flex-col gap-8 w-full"
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <span className="border-b border-neutral-800/25 w-full" />

        <Link
          className="w-fit flex flex-col group gap-4 rounded-3xl"
          target="_blank"
          href={url}
        >
          <Image
            width={600}
            height={375}
            alt={name}
            className="rounded-3xl group-hover:scale-[102%] duration-200"
            src={img}
          />

          <div className="flex flex-col gap-2 items-start">
            <div className="flex flex-row w-full items-center justify-between">
              <span className="text-neutral-800 text-xl sm:text-2xl tracking-wide font-medium">
                {name}
              </span>

              <span className="text-white text-lg bg-teal-500 text-center px-2.5 rounded-full tracking-wide font-normal">
                {status}
              </span>
            </div>

            <p className="font-light max-w-[600px] text-lg tracking-wide text-neutral-800">
              {desc}
            </p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
