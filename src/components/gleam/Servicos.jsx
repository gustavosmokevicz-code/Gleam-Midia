import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, MARBLE } from "./content";
import Reveal from "./Reveal";

export default function Servicos() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#F9F8F6] text-[#222222] py-24 sm:py-32 lg:py-40"
      style={{
        backgroundImage:
          "linear-gradient(rgba(249,248,246,0.42), rgba(249,248,246,0.42)), url(" + MARBLE.white + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <Reveal>
              <p className="text-[10px] uppercase tracking-luxe text-[#767066] mb-6">Serviços</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-medium text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem] leading-[1] tracking-[-0.01em]">
                Soluções<br />digitais
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 text-[15px] leading-[1.6] text-[#222]/60 font-light max-w-xs">
                Seis frentes de criação que trabalham juntas para a sua marca brilhar no digital.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:pl-8">
            <div className="border-t border-[#222]/15">
              {SERVICES.map((s, i) => {
                const isOpen = active === i;
                return (
                  <div
                    key={s.n}
                    className="border-b border-[#222]/15 group"
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <button
                      onClick={() => setActive(isOpen ? null : i)}
                      className="w-full flex items-baseline gap-5 sm:gap-8 py-7 sm:py-9 text-left"
                    >
                      <span
                        className={`text-[11px] tracking-wide-luxe pt-2 transition-colors duration-500 ${
                          isOpen ? "text-[#222]" : "text-[#767066]"
                        }`}
                      >
                        {s.n}
                      </span>
                      <span className="flex-1">
                        <motion.h3
                          animate={{
                            x: isOpen ? 14 : 0,
                            color: isOpen ? "#222222" : "#222222",
                          }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className={`font-display font-medium text-[1.9rem] sm:text-[2.6rem] lg:text-[3rem] leading-[1.05] tracking-[-0.01em] transition-opacity duration-500 ${
                            active === null || isOpen ? "opacity-100" : "opacity-40"
                          }`}
                        >
                          {s.title}
                        </motion.h3>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pl-10 sm:pl-[3.4rem] pr-6 pb-8 text-[16px] sm:text-[17px] leading-[1.65] text-[#222]/70 font-light max-w-xl">
                            {s.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
