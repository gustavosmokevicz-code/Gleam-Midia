import Reveal from "./Reveal";
import TrabalhoCard from "./TrabalhoCard";
import { IMAGES } from "./content";

const wa = (msg) =>
  `https://api.whatsapp.com/send/?phone=5547997370063&text=${encodeURIComponent(
    msg
  )}&type=phone_number&app_absent=0`;

const CARDS = [
  {
    image: IMAGES.trabalhoSocial,
    alt: "Conteúdo e social media da Gleam Mídia",
    subtitle: "Social Media",
    title: "Conteúdo com intenção",
    msg: "Olá! Vim pelo site da Gleam Mídia e gostaria de conversar sobre Social Media e conteúdo.",
    focalPointX: 0.5,
    focalPointY: 0.42,
  },
  {
    image: IMAGES.trabalhoProducao,
    alt: "Produção audiovisual da Gleam Mídia",
    subtitle: "Produção",
    title: "Direção de arte & audiovisual",
    msg: "Olá! Vim pelo site da Gleam Mídia e gostaria de conversar sobre produção audiovisual.",
    focalPointX: 0.5,
    focalPointY: 0.5,
  },
  {
    image: IMAGES.trabalhoBranding,
    alt: "Identidade e estratégia da Gleam Mídia",
    subtitle: "Branding",
    title: "Identidade & estratégia",
    msg: "Olá! Vim pelo site da Gleam Mídia e gostaria de conversar sobre identidade visual e estratégia.",
    focalPointX: 0.5,
    focalPointY: 0.4,
  },
];

export default function Trabalhos() {
  return (
    <section id="trabalhos" className="bg-[#F9F8F6] py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <Reveal>
            <p className="text-[10px] uppercase tracking-luxe text-[#9a948a] mb-5">Portfólio</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-medium text-[2.5rem] sm:text-[3.5rem] leading-[1] tracking-[-0.02em] text-balance">
              Projetos que traduzem essência
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1} className="h-[440px] sm:h-[480px]">
              <TrabalhoCard
                image={c.image}
                alt={c.alt}
                subtitle={c.subtitle}
                title={c.title}
                whatsappUrl={wa(c.msg)}
                focalPointX={c.focalPointX}
                focalPointY={c.focalPointY}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
