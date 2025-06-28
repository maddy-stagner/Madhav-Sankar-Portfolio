"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white font-sans relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <Image
            src="/madhav-profile.png"
            alt="Madhav Sankar"
            width={160}
            height={160}
            className="rounded-full border-4 border-white shadow-xl"
          />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Madhav Sankar
          </h1>
          <p className="mt-2 text-lg md:text-xl text-white/80">
            Bioinformatics • AI/ML • Public Health Data Science
          </p>
        </motion.div>
        <Image
          src="/tree-blur.png"
          alt="Blur Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20 blur-md absolute inset-0 z-0"
        />
      </section>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-black/50 text-white px-6 py-3 flex justify-between items-center shadow-md">
        <h2 className="text-xl font-bold">Madhav Sankar</h2>
        <div className="space-x-4">
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </nav>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="rounded-2xl bg-gray-900 p-5 shadow-lg border border-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-2">Project {i + 1}</h3>
              <p className="text-sm text-gray-300">Brief project description here...</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills & Footer */}
      <section id="skills" className="mt-32">
        {/* Will load from separate SkillsFooter.tsx already created */}
        {/* Import and include <SkillsFooter /> here when ready */}
      </section>
    </main>
  );
}


