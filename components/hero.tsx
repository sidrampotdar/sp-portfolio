"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";

import Particles from "@/components/Particles";
import { Button } from "@/components/ui/button";

const skillChips = ["React", "Next.js", "TypeScript", "Node", "GraphQL", "Web3"];

export function HeroBlock() {
  return (
    <section className="hero-shell relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      <div className="hero-surface absolute inset-0">
        <div className="hero-grid absolute inset-0" />
        <Particles
          particleCount={180}
          particleSpread={12}
          speed={0.18}
          alphaParticles
          particleBaseSize={130}
          sizeRandomness={1.4}
          cameraDistance={18}
          className="hero-particles"
        />
        <div className="hero-radial hero-radial-1" />
        <div className="hero-radial hero-radial-2" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.26em] text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.22)]"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Available for select work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6 text-5xl font-black tracking-[-0.06em] text-white md:text-7xl"
          >
            I build
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
              immersive products
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="max-w-xl text-lg leading-8 text-white/70 md:text-xl"
          >
            Full-stack developer crafting premium digital experiences with clean
            systems, high visual polish, and a sharp focus on performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" className="gap-2 rounded-full bg-white text-black hover:bg-cyan-200">
              <Mail className="h-4 w-4" />
              Get in touch
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              <a href="#projects" className="inline-flex items-center gap-2">
                View projects
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {skillChips.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative flex items-center justify-center"
        >
          <div className="hero-scene">
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />

            <motion.div
              animate={{ y: [0, -12, 0], rotateY: [0, 12, 0], rotateX: [12, 16, 12] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="model-card model-card-main"
            >
              <div className="model-header">
                <div>
                  <span className="eyebrow">Portfolio</span>
                  <strong>Design system</strong>
                </div>
                <span className="model-status">Live</span>
              </div>

              <div className="model-grid">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span key={index} className={`mini-bar bar-${(index % 4) + 1}`} />
                ))}
              </div>

              <div className="model-footer">
                <div>
                  <span className="label">Signal</span>
                  <strong>92%</strong>
                </div>
                <div className="signal-wave">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0], rotateY: [18, 24, 18], rotateX: [10, 14, 10] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="model-card model-card-secondary"
            >
              <div className="model-chip-row">
                <span>Next.js</span>
                <span>UI</span>
                <span>Motion</span>
              </div>

              <div className="metric-stack">
                <div>
                  <small>Frontend</small>
                  <strong>4x faster</strong>
                </div>
                <div className="metric-line" />
              </div>

              <div className="radar">
                <span />
                <span />
                <span />
              </div>
            </motion.div>

            <div className="floating-cube" aria-hidden="true">
              <span className="cube-face cube-front" />
              <span className="cube-face cube-side" />
              <span className="cube-face cube-top" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              className="floating-badge badge-top"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              GraphQL
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              className="floating-badge badge-bottom"
            >
              <span className="dot" />
              Next.js 16
            </motion.div>

            <div className="hero-ring" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 0.8, duration: 0.6 }, y: { delay: 1.1, duration: 1.6, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <ArrowDown className="h-6 w-6 text-white/60" />
      </motion.div>
    </section>
  );
}

export default HeroBlock;
