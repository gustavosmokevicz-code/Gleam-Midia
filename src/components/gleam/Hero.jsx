import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "@/components/ui/image";
import { HERO, IMAGES } from "./content";

const HERO_IMAGE = IMAGES.hero;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 1.4 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.13]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.6]);

  return (
    <section id="topo" ref={ref} className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-[#151515]">
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <Image
          src={HERO_IMAGE}
          alt="Giovanna, fundadora da Gleam Mídia, trabalhando com notebook"
          fittingType="fill"
          focalPointX={0.5}
          focalPointY={0.42}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-[#151515]/80 via-[#151515]/15 to-[#151515]/35 pointer-events-none"
      />

      {/* entrance reveal scrim */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.3, ease: [0.85, 0, 0.15, 1], delay: 0.1 }}
        style={{ transformOrigin: "top" }}
        className="absolute inset-0 z-20 bg-[#151515] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center pb-20"
      >
        <motion.p
          variants={itemVariants}
          className="text-[10px] sm:text-[11px] uppercase tracking-luxe text-[#F9F8F6]/70 mb-5"
        >
          Creative Studio
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="font-display font-medium text-[#F9F8F6] text-[2.6rem] leading-[1.02] sm:text-[4rem] lg:text-[5.2rem] tracking-[-0.01em] text-balance max-w-3xl"
        >
          {HERO.headline}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-xl text-[#EFEFEF]/80 text-base sm:text-lg leading-[1.65] font-light"
        >
          {HERO.subtext}
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="mt-8 text-[10px] uppercase tracking-luxe text-[#EFEFEF]/60"
        >
          {HERO.tagline}
        </motion.p>
      </motion.div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#F9F8F6]/60 hover:text-[#F9F8F6] transition-colors"
        aria-label="Rolar para baixo"
      >
        <span className="text-[9px] uppercase tracking-luxe">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-8 bg-[#F9F8F6]/40"
        />
      </motion.a>
    </section>
  );
}
