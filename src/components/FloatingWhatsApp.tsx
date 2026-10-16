"use client";

import { usePathname } from "next/navigation";
import { getWhatsAppUrl } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Botão flutuante de WhatsApp — apenas em telas pequenas.
 * Oculto na página de contato para não encobrir o formulário.
 * O rodapé possui espaço inferior extra no celular para não ser encoberto.
 */
export function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname.startsWith("/contato")) return null;

  return (
    <a
      id="floating-whatsapp"
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp — abre em uma nova aba"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f7a4a] text-white shadow-[0_12px_30px_-8px_rgb(15_56_37/0.55)] ring-4 ring-white/70 transition-transform hover:scale-105 active:scale-95 lg:hidden"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
