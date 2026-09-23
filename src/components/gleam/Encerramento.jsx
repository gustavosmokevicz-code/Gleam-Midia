import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { CLOSING, IMAGES, LOGO, CONTACT } from "./content";
import Reveal from "./Reveal";

export default function Encerramento() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.5, 0.7]);

  return (
    <section
      id="contato"
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#151515]"
    >
      {/* Full-bleed background photo */}
      <motion.div style={{ scale }} className="absolute inset-0 will-change-transform">
        <Image
          src={IMAGES.encerramento}
          alt="Giovanna sorridente segurando notebook"
          fittingType="fill"
          focalPointX={0.5}
          focalPointY={0.4}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/55 to-[#151515]/15 pointer-events-none"
      />

      {/* Content overlaid on the photo */}
      <div className="relative z-10 mx-auto max-w-[1600px] w-full px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20 lg:pb-24 pt-32">
        <Reveal>
          <p className="text-[10px] uppercase tracking-luxe text-[#F9F8F6]/60 mb-8">{CLOSING.label}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-medium text-[2.8rem] sm:text-[4.5rem] lg:text-[6rem] leading-[1] tracking-[-0.01em] text-[#F9F8F6] max-w-3xl text-balance">
            {CLOSING.title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-md text-[16px] sm:text-[18px] leading-[1.65] text-[#EFEFEF]/75 font-light">
            {CLOSING.body}
          </p>
        </Reveal>

        {/* CTAs — gold solid */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5">
          <Reveal delay={0.24}>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 pl-6 pr-5 py-4 rounded-full bg-[#C5A572] text-[#151515] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              <span className="text-[10px] uppercase tracking-luxe text-[#151515]/65">Instagram</span>
              <span className="font-display text-[1.4rem] sm:text-[1.7rem] leading-none">{CONTACT.instagramHandle}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
            </a>
          </Reveal>
          <Reveal delay={0.32}>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 pl-6 pr-5 py-4 rounded-full bg-[#C5A572] text-[#151515] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            >
              <span className="text-[10px] uppercase tracking-luxe text-[#151515]/65">WhatsApp</span>
              <span className="font-display text-[1.4rem] sm:text-[1.7rem] leading-none">{CONTACT.whatsappDisplay}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
            </a>
          </Reveal>
        </div>

        {/* Footer line */}
        <div className="mt-16 pt-8 border-t border-[#F9F8F6]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="relative inline-block w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#F9F8F6]/20">
              <img src={LOGO} alt="GLEAM MÍDIA" className="w-full h-full object-cover" />
            </span>
            <div className="flex items-baseline gap-3">
              <p className="text-[11px] uppercase tracking-wide-luxe text-[#F9F8F6]/50">Gleam Mídia — Creative Studio</p>
              <span className="font-signature text-[22px] leading-none text-[#C5A572]">Gleam</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#F9F8F6]/50 hover:text-[#F9F8F6] transition-colors">
              <Instagram className="w-[16px] h-[16px]" strokeWidth={1.5} />
            </a>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-[#F9F8F6]/50 hover:text-[#F9F8F6] transition-colors">
              <MessageCircle className="w-[16px] h-[16px]" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
