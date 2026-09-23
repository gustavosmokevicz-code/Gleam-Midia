import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "@/components/ui/image";
import { PRODUCAO, IMAGES, MARBLE } from "./content";
import Reveal from "./Reveal";

export default function Producao() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const clip = useTransform(scrollYProgress, [0, 1], ["inset(6% 0% 6% 6%)", "inset(0% 0% 0% 0%)"]);

  return (
    <section
      ref={ref}
      className="relative bg-[#151515] text-[#EFEFEF] py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(21,21,21,0.5), rgba(21,21,21,0.5)), url(" + MARBLE.black + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text — left */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <p className="text-[10px] uppercase tracking-luxe text-[#767066] mb-6">{PRODUCAO.label}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-medium text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[1.04] tracking-[-0.01em] mb-8">
                {PRODUCAO.title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-[17px] sm:text-[18px] leading-[1.65] text-[#EFEFEF]/70 font-light max-w-md">
                {PRODUCAO.body}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-wide-luxe text-[#EFEFEF]/50">
                <span>Direção de arte</span>
                <span>·</span>
                <span>Conteúdo audiovisual</span>
                <span>·</span>
                <span>Finalização</span>
              </div>
            </Reveal>
          </div>

          {/* Image — right, expands on scroll */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative h-[55vh] sm:h-[68vh] lg:h-[80vh]">
            <motion.div
              style={{ scale, clipPath: clip }}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 will-change-transform"
            >
              <Image
                src={IMAGES.producao}
                alt="Estúdio fotográfico equipado com iluminação"
                fittingType="fill"
                focalPointX={0.5}
                focalPointY={0.5}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#151515]/40 to-transparent pointer-events-none lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
