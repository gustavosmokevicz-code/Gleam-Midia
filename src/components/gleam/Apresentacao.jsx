import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "@/components/ui/image";
import { ABOUT, IMAGES, MARBLE } from "./content";
import Reveal from "./Reveal";

export default function Apresentacao() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative bg-[#F9F8F6] text-[#222222] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(249,248,246,0.42), rgba(249,248,246,0.42)), url(" + MARBLE.white + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Image — 55% on desktop */}
          <div className="lg:col-span-7 relative h-[68vh] sm:h-[80vh] lg:h-[92vh] overflow-hidden">
            <motion.div
              style={{ y: imgY }}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 -top-[6%] -bottom-[6%] will-change-transform"
            >
              <Image
                src={IMAGES.apresentacao}
                alt="Giovanna fotografando em frente à janela"
                fittingType="fill"
                focalPointX={0.5}
                focalPointY={0.45}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Text — 45% on desktop */}
          <div className="lg:col-span-5 relative flex items-center">
            <motion.div style={{ y: textY }} className="px-6 sm:px-10 lg:px-14 py-16 lg:py-0 lg:pr-8">
              <Reveal>
                <p className="text-[10px] uppercase tracking-luxe text-[#767066] mb-8">{ABOUT.label}</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display font-medium text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] leading-[1.02] tracking-[-0.01em] mb-8">
                  {ABOUT.title}
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="text-[17px] sm:text-[18px] leading-[1.65] text-[#222]/80 font-light max-w-md">
                  {ABOUT.body}
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-10 w-12 h-px bg-[#222]/30" />
              </Reveal>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
