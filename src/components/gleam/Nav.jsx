import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { IMAGES, CONTACT } from "./content";

const LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#trabalhos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#F9F8F6]/85 backdrop-blur-md border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-3 group">
          <span className="relative inline-block w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-1 ring-black/10 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <img
              src={IMAGES.identidade}
              alt="GLEAM MÍDIA"
              className="w-full h-full object-cover"
            />
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[15px] leading-none text-[#C5A572]/85 hover:text-[#C5A572] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-[#222]/70 hover:text-[#222] transition-all duration-300 hover:scale-110 active:scale-90"
          >
            <Instagram className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </a>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="text-[#222]/70 hover:text-[#222] transition-all duration-300 hover:scale-110 active:scale-90"
          >
            <MessageCircle className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
