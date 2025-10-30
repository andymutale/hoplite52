"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "../utils/useMediaQuery";

const navMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemMotion = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 750px)");

  const links = [
    { label: "About", href: "/About" },
    { label: "Work", href: "/Work" },
    { label: "Contact", href: "/Contacts" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 lg:px-32 py-6 font-medium md:bg-[hsla(0,0%,0%,0.75)] md:backdrop-blur-md text-gray-100">
      {/* Logo */}
      <Link href="/" className="text-lg font-semibold leading-tight text-black">
         <span className="text-black z-[130]">andymutale</span>
      </Link>

      {/* Desktop Links */}
      {matches && (
        <motion.div
          variants={navMotion}
          initial="hidden"
          animate="visible"
          className="flex gap-10"
        >
          {links.map(({ label, href }) => (
            <motion.div key={href} variants={itemMotion}>
              <Link
                href={href}
                className="uppercase tracking-[2px] hover:text-gray-400 transition-colors"
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Mobile Hamburger */}
      {!matches && (
        <div
          onClick={() => setToggled((prev) => !prev)}
          className="space-y-1.5 cursor-pointer z-[120]"
        >
          <motion.span
            animate={{
              rotateZ: toggled ? 45 : 0,
              y: toggled ? 8 : 0,
            }}
            className="block h-0.5 w-8 bg-gray-900"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-gray-900"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-gray-900"
          ></motion.span>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {toggled && !matches && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="fixed flex bottom-0 left-0 w-full h-screen items-center justify-center z-[100] bg-[#cfcfcf] mix-blend-difference "
        >
          <motion.div
            variants={navMotion}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-10 text-lg text-gray-700 text-center"
          >
            {links.map(({ label, href }) => (
              <motion.div key={href} variants={itemMotion}>
                <Link
                  href={href}
                  onClick={() => setToggled(false)}
                  className="uppercase tracking-[2px] hover:text-gray-400 transition-colors"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}
