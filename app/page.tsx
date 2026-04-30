import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Download,
  GraduationCap,
  Link,
  Mail,
  Medal,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { HeroBlock } from "@/components/hero";
import { Marquee } from "@/components/ui/marquee";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "GraphQL",
  "MongoDB",
  "Solidity",
  "Smart Contracts",
  "Java",
  "DSA",
  "System Design",
];

const projects = [
  {
    title: "SP Portfolio",
    label: "Flagship",
    impact:
      "A polished personal brand site built to showcase projects, skills, and proof of work.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    points: [
      "Built a responsive portfolio with animated hero, reusable UI primitives, and structured content sections.",
      "Focused on clean visual hierarchy so projects, contact, and story are easy to scan.",
      "Optimized the page for static rendering and maintainable Tailwind design tokens.",
    ],
    live: "#",
    github: "#",
    accent: "from-cyan-400/25 via-white/10 to-transparent",
  },
  {
    title: "GraphQL Task API",
    label: "Backend-heavy",
    impact: "A role-aware backend for tasks, users, and project workflows.",
    tech: ["Node.js", "GraphQL", "MongoDB", "JWT"],
    points: [
      "Designed GraphQL schemas, resolvers, and database models for flexible client queries.",
      "Implemented authentication, protected routes, and validation around core mutations.",
      "Handled pagination and query structure to keep API responses predictable.",
    ],
    live: "#",
    github: "#",
    accent: "from-emerald-400/25 via-white/10 to-transparent",
  },
  {
    title: "Smart Contract Vault",
    label: "Blockchain",
    impact:
      "A Solidity contract experiment for deposits, withdrawals, and owner-controlled rules.",
    tech: ["Solidity", "Hardhat", "Ethers.js", "JavaScript"],
    points: [
      "Wrote contract functions with access control, events, and clear state transitions.",
      "Tested failure cases around permissions, balances, and invalid withdrawals.",
      "Connected contract methods to a simple frontend interaction layer.",
    ],
    live: "#",
    github: "#",
    accent: "from-violet-400/25 via-white/10 to-transparent",
  },
  {
    title: "DSA Tracker",
    label: "Experiment",
    impact: "A compact progress dashboard for coding practice and revision.",
    tech: ["React", "Local Storage", "Tailwind", "Java"],
    points: [
      "Tracked topic-wise progress for arrays, strings, recursion, trees, and graphs.",
      "Added lightweight filtering so solved, revision, and pending problems stay visible.",
      "Kept the interface fast and distraction-free for daily preparation.",
    ],
    live: "#",
    github: "#",
    accent: "from-amber-300/25 via-white/10 to-transparent",
  },
];

const focusAreas = [
  {
    icon: Code2,
    title: "Frontend",
    body: "React, Next.js, Tailwind CSS, component systems, and crisp responsive interfaces.",
  },
  {
    icon: Server,
    title: "Backend",
    body: "Node.js, GraphQL APIs, MongoDB schemas, auth flows, and scalable service structure.",
  },
  {
    icon: ShieldCheck,
    title: "Blockchain",
    body: "Solidity fundamentals, smart contract patterns, testing, and Web3 integrations.",
  },
];

const timeline = [
  {
    title: "Engineering Student",
    meta: "College - Expected graduation: update year",
    body: "Building depth in computer science fundamentals, DSA, web development, and backend systems.",
  },
  {
    title: "NPTEL Coursework",
    meta: "DBMS and Quantum Computing",
    body: "Strengthening database concepts and exploring advanced computing foundations through structured courses.",
  },
  {
    title: "Project-based Learning",
    meta: "Portfolio, APIs, smart contracts",
    body: "Turning concepts into working products with clean code, readable UI, and practical deployment goals.",
  },
];

const highlights = [
  "Solving DSA through the Striver sheet with topic-wise revision.",
  "Preparing for FAANG-style interviews with Java, DSA, and core CS.",
  "Building full-stack and blockchain projects as public proof of work.",
  "NPTEL milestones can be added here once results are available.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroBlock />

      <section className="border-y border-white/10 bg-black py-14 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                Current Stack
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Tools I use to ship ideas
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/60">
              Focused on full-stack engineering, backend depth, blockchain
              fundamentals, and interview-ready problem solving.
            </p>
          </div>
        </div>

        <Marquee pauseOnHover className="[--duration:24s]">
          {skills.map((skill) => (
            <span
              key={skill}
              className="mx-2 whitespace-nowrap rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm text-white/80 transition hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </Marquee>
      </section>

      <section id="projects" className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Proof that I can design, build, and explain real systems.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/65">
              A tight set of projects covering frontend polish, backend
              structure, smart contracts, and consistent coding practice.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 ${
                  index === 0 ? "lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${project.accent} opacity-80 transition duration-300 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-5 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-black/50">
                    <div className="grid h-full w-full grid-cols-6 grid-rows-4 gap-px p-4 opacity-90">
                      {Array.from({ length: 24 }).map((_, tile) => (
                        <div
                          key={tile}
                          className={`rounded-sm ${
                            tile % 5 === 0
                              ? "bg-white/25"
                              : tile % 3 === 0
                                ? "bg-cyan-300/20"
                                : "bg-white/8"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-white/65">
                        {project.label}
                      </span>
                      <h3 className="mt-3 text-2xl font-semibold">
                        {project.title}
                      </h3>
                    </div>
                    <Sparkles className="mt-1 size-5 text-white/40 transition group-hover:text-cyan-300" />
                  </div>

                  <p className="text-sm leading-6 text-white/65">
                    {project.impact}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-white/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-6 text-white/70">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.live}
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan-200"
                    >
                      Live
                      <ArrowUpRight className="size-4" />
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
                    >
                      GitHub
                      <Code2 className="size-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Engineering student building toward serious product work.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-white/68">
            <p>
              I am Sidramapp Potdar, a full-stack developer and engineering
              student focused on turning fundamentals into useful software.
            </p>
            <p>
              Right now I am sharpening DSA for FAANG-style interviews while
              building backend-heavy projects and exploring smart contract
              development.
            </p>
            <p>
              I enjoy problems where clean structure matters: readable APIs,
              dependable data models, responsive interfaces, and systems that
              are easy to reason about.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/25"
              >
                <area.icon className="mb-5 size-6 text-emerald-300" />
                <h3 className="text-lg font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-300">
              Experience / Education
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Learning path with project momentum.
            </h2>

            <div className="mt-8 space-y-4">
              {timeline.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex items-start gap-4">
                    <GraduationCap className="mt-1 size-5 shrink-0 text-amber-300" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/45">{item.meta}</p>
                      <p className="mt-3 text-sm leading-6 text-white/62">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
              Highlights
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Signals that compound over time.
            </h2>

            <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-6 flex items-center gap-3">
                <Medal className="size-6 text-violet-300" />
                <span className="text-sm text-white/60">
                  Achievements and preparation
                </span>
              </div>
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/70">
                    <BookOpen className="mt-0.5 size-4 shrink-0 text-violet-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Let&apos;s build something.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60">
                Reach out for project collaboration, internships, backend work,
                or anything that needs clear thinking and steady execution.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan-200"
              >
                <Mail className="size-4" />
                Email
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <Code2 className="size-4" />
                GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <Link className="size-4" />
                LinkedIn
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <Download className="size-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>Sidramapp Potdar</p>
          <div className="flex gap-4">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#" className="transition hover:text-white">
              GitHub
            </a>
            <a href="#" className="transition hover:text-white">
              LinkedIn
            </a>
          </div>
          <p>Copyright 2026</p>
        </div>
      </footer>
    </main>
  );
}
