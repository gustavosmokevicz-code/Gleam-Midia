import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "@/components/ui/image";
import { GIOVANNA, IMAGES, MARBLE } from "./content";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

export default function Giovanna() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  // Split bio into sentences for line-by-line reveal
  const lines = GIOVANNA.body.split(/(?<=\.)\s+/);

  return (
    <section
      id="giovanna"
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
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Portrait — left */}
        <div className="relative h-[75vh] sm:h-[85vh] lg:h-auto lg:min-h-[88vh] overflow-hidden order-1">
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 -top-[5%] -bottom-[5%] will-change-transform"
          >
            <Image
              src={IMAGES.giovanna}
              alt="Giovanna, fundadora da Gleam Mídia"
              fittingType="fill"
              focalPointX={0.5}
              focalPointY={0.4}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10 pointer-events-none">
            <p className="font-signature text-[2.4rem] sm:text-[3rem] leading-none text-[#C5A572]">Giovanna</p>
            <p className="mt-1 text-[10px] uppercase tracking-wide-luxe text-[#F9F8F6]/85">Fundadora da Gleam Mídia</p>
          </div>
        </div>

        {/* Bio — right */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-0 order-2">
          <div className="max-w-lg">
            <Reveal>
              <p className="text-[10px] uppercase tracking-luxe text-[#767066] mb-8">{GIOVANNA.label}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-medium text-[2.8rem] sm:text-[3.6rem] lg:text-[4.4rem] leading-[1] tracking-[-0.01em] mb-4">
                {GIOVANNA.title}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-[12px] uppercase tracking-wide-luxe text-[#222]/60 mb-10">{GIOVANNA.role}</p>
            </Reveal>
            <Stagger gap={0.18} className="space-y-5">
              {lines.map((line, i) => (
                <StaggerItem key={i}>
                  <p className="text-[17px] sm:text-[19px] leading-[1.65] text-[#222]/80 font-light font-display">
                    {line}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <div className="mt-12 w-12 h-px bg-[#222]/30" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
