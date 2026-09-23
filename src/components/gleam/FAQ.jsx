import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { DUVIDAS, MARBLE } from "./content";
import Reveal from "./Reveal";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="duvidas"
      className="relative bg-[#F9F8F6] text-[#222222] py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(249,248,246,0.42), rgba(249,248,246,0.42)), url(" + MARBLE.white + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="text-[10px] uppercase tracking-luxe text-[#767066] mb-5 text-center">Dúvidas frequentes</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-medium text-[2.2rem] sm:text-[3rem] leading-[1.05] tracking-[-0.01em] text-center mb-14 sm:mb-16 text-balance">
            Perguntas que recebo com frequência
          </h2>
        </Reveal>

        <div className="border-y border-[#222]/12 divide-y divide-[#222]/12">
          {DUVIDAS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[1.15rem] sm:text-[1.35rem] leading-tight text-[#222]">
                    {item.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full border border-[#C5A572]/50 text-[#C5A572] flex items-center justify-center">
                    <Plus
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      strokeWidth={1.5}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-12 text-[16px] sm:text-[17px] leading-[1.65] text-[#222]/70 font-light max-w-xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
