import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "@/components/ui/image";
import { CRIACAO, IMAGES } from "./content";
import Reveal from "./Reveal";

export default function Criacao() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <section ref={ref} className="relative bg-[#F9F8F6] text-[#222222] py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="text-[10px] uppercase tracking-luxe text-[#767066] mb-10 text-center">{CRIACAO.label}</p>
        </Reveal>

        {/* Centered image — rhythm break */}
        <div className="relative mx-auto max-w-3xl h-[52vh] sm:h-[64vh] lg:h-[72vh] overflow-hidden">
          <motion.div
            style={{ scale }}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={IMAGES.criacao}
              alt="Tela da câmera mostrando Giovanna"
              fittingType="fill"
              focalPointX={0.5}
              focalPointY={0.5}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Two-column magazine copy */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-4xl mx-auto">
          <Reveal>
            <h3 className="font-display font-medium text-[1.8rem] sm:text-[2.2rem] leading-[1.1] tracking-[-0.01em] mb-5">
              {CRIACAO.title}
            </h3>
            <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#222]/70 font-light">
              {CRIACAO.col1}
            </p>
          </Reveal>
          <Reveal delay={0.12} className="md:pt-16">
            <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#222]/70 font-light">
              {CRIACAO.col2}
            </p>
            <div className="mt-8 w-10 h-px bg-[#222]/30" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
