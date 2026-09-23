import { WHY, MARBLE } from "./content";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

export default function PorQue() {
  return (
    <section
      className="relative overflow-hidden bg-[#F9F8F6] text-[#222222] py-24 sm:py-32 lg:py-40 border-t border-[#222]/10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(249,248,246,0.42), rgba(249,248,246,0.42)), url(" + MARBLE.white + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <Reveal>
            <p className="text-[10px] uppercase tracking-luxe text-[#767066] mb-6">{WHY.label}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-medium text-[2.6rem] sm:text-[3.4rem] lg:text-[4.6rem] leading-[1.02] tracking-[-0.01em] text-balance">
              {WHY.title}
            </h2>
          </Reveal>
        </div>

        <Stagger gap={0.14} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-14 lg:gap-y-20">
          {WHY.items.map((item) => (
            <StaggerItem key={item.n}>
              <div className="border-t border-[#222]/20 pt-7">
                <div className="flex items-baseline gap-5 mb-4">
                  <span className="font-display italic text-[1.1rem] text-[#767066]">{item.n}</span>
                  <h3 className="font-display font-medium text-[1.8rem] sm:text-[2.2rem] leading-[1.1] tracking-[-0.01em]">
                    {item.title}
                  </h3>
                </div>
                <p className="pl-10 text-[16px] sm:text-[17px] leading-[1.65] text-[#222]/70 font-light max-w-md">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
