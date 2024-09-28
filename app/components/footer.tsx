"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import FramerButton from "./framer-button";
import Image from "next/image";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const github = process.env.NEXT_PUBLIC_GITHUB ?? "";
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN ?? "";
  return (
    <motion.footer
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="my-32 gap-8 flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between w-full max-w-5xl"
    >
      <p className="text-lg tracking-wide font-light text-neutral-800">
        © Portfolio created by Ahmet Kantar
      </p>

      <div className="flex flex-row sm:-mr-2 items-center">
        <Link target="_blank" href={github}>
          <FramerButton className="group p-2">
            <Image
              width={32}
              height={32}
              src={"/icons/github.svg"}
              alt="GitHub"
              className="w-12 p-2 group-hover:bg-teal-500 bg-neutral-800 rounded-full"
            />
          </FramerButton>
        </Link>

        <Link target="_blank" href={linkedin}>
          <FramerButton className="group p-2">
            <Image
              width={32}
              height={32}
              src={"/icons/linkedin.svg"}
              alt="LinkedIn"
              className="w-12 p-2 group-hover:bg-teal-500 bg-neutral-800 rounded-full"
            />
          </FramerButton>
        </Link>
      </div>
    </motion.footer>
  );
}
