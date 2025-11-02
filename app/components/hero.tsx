'use client;'
import { Scene } from "./scene"

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-full w-full top-0 left-0 flex flex-col justify-center items-center ">
      
      
      {/* Animated headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Building Digital Products <br /> That{" "}
        <span className="text-indigo-500">Work and Wow</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-2xl text-lg text-gray-300 mb-8"
      >
        I’m <span className="font-semibold text-white">Andrew Mutale</span>, a
        frontend developer passionate about clean design, smooth interactions,
        and scalable web systems.
      </motion.p>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full transition"
        >
          See My Work
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}
