import { MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function TrabalhoCard({ image, alt, subtitle, title, whatsappUrl, focalPointX = 0.5, focalPointY = 0.5 }) {
  return (
    <div className="group w-full h-full">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Agendar ${title} no WhatsApp`}
        className="relative block w-full h-full rounded-2xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out group-hover:scale-[1.02]"
      >
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
          <Image
            src={image}
            alt={alt}
            fittingType="fill"
            focalPointX={focalPointX}
            focalPointY={focalPointY}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/90 via-[#151515]/35 to-transparent" />

        <div className="relative flex flex-col justify-end h-full p-6 sm:p-7 text-[#F9F8F6]">
          <p className="text-[10px] uppercase tracking-luxe text-[#F9F8F6]/60 mb-2">{subtitle}</p>
          <h3 className="font-display font-medium text-[1.75rem] sm:text-[2rem] leading-[1.05] tracking-[-0.01em] text-balance">
            {title}
          </h3>

          <div className="mt-6 flex items-center justify-between rounded-lg border border-[#F9F8F6]/20 bg-[#F9F8F6]/10 backdrop-blur-md px-4 py-3 transition-all duration-300 group-hover:bg-[#F9F8F6]/20 group-hover:border-[#F9F8F6]/40">
            <span className="text-[11px] uppercase tracking-wide-luxe font-medium">Agendar no WhatsApp</span>
            <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </div>
        </div>
      </a>
    </div>
  );
}
