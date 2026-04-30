"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
export function HeroBlock() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-background min-h-screen w-full">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative h-32 w-32 md:h-36 md:w-36 rounded-full overflow-hidden border border-white/20 shadow-lg">
              <Image
                src="/profile1.png"
                alt="Sidramapp Potdar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-5xl font-bold text-foreground md:text-7xl"
          >
            Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground md:text-2xl"
          >
            Crafting beautiful, performant web applications with modern
            technologies. Passionate about clean code and exceptional user
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4"
          ></motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
//  {[
//               { icon: GithubIcon, href: "#" },
//               { icon: LinkedinIcon, href: "#" },
//               { icon: Mail, href: "#" },
//             ].map((social, index) => (
//               <motion.a
//                 key={index}
//                 href={social.href}
//                 whileHover={{ scale: 1.1, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
//               >
//                 <social.icon className="h-5 w-5" />
//               </motion.a>
//             ))}
