import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "@/components/ui/image";
import { IDENTIDADE, IMAGES, MARBLE } from "./content";
import Reveal from "./Reveal";

export default function Identidade() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={ref}
      className="relative bg-[#151515] text-[#EFEFEF] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(21,21,21,0.5), rgba(21,21,21,0.5)), url(" + MARBLE.black + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] items-center">
        {/* Circular identity icon */}
        <div className="lg:col-span-5 flex items-center justify-center py-16 sm:py-20 lg:py-28 order-2 lg:order-1">
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative will-change-transform"
          >
            <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden ring-1 ring-[#EFEFEF]/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src={IMAGES.identidade}
                alt="Identidade visual da Gleam Mídia"
                fittingType="fill"
                focalPointX={0.5}
                focalPointY={0.5}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Statement */}
        <div className="lg:col-span-7 flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-32 order-1 lg:order-2">
          <div className="max-w-xl">
            <Reveal>
              <p className="text-[10px] uppercase tracking-luxe text-[#9a948a] mb-8">{IDENTIDADE.label}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-medium text-[4rem] sm:text-[6rem] lg:text-[7.5rem] leading-[0.95] tracking-[-0.02em] mb-6">
                {IDENTIDADE.title}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="font-display italic text-[1.5rem] sm:text-[1.9rem] leading-[1.2] text-[#EFEFEF]/90 mb-8">
                {IDENTIDADE.meaning}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#EFEFEF]/65 font-light max-w-md">
                {IDENTIDADE.body}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
