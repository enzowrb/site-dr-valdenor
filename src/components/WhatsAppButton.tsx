import { getWhatsAppUrl, siteConfig } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons";

type Variant = "primary" | "secondary" | "light" | "ghost-light" | "whatsapp";

type WhatsAppButtonProps = {
  label?: string;
  /** Mensagem pré-preenchida. Padrão: mensagem oficial configurada. */
  message?: string;
  variant?: Variant;
  className?: string;
  showIcon?: boolean;
  id?: string;
};

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  light: "btn-light",
  "ghost-light": "btn-ghost-light",
  whatsapp: "bg-[#1f7a4a] text-white hover:bg-[#17633b] shadow-[0_10px_24px_-12px_rgb(31_122_74/0.6)]",
};

/**
 * Botão reutilizável de WhatsApp.
 * Usa sempre o número oficial de `siteConfig` e abre o link externo com segurança.
 * Não envia mensagens automaticamente: apenas abre a conversa com o texto pré-preenchido.
 */
export function WhatsAppButton({
  label = "Falar pelo WhatsApp",
  message = siteConfig.contact.whatsappDefaultMessage,
  variant = "primary",
  className = "",
  showIcon = true,
  id,
}: WhatsAppButtonProps) {
  return (
    <a
      id={id}
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — abre o WhatsApp em uma nova aba`}
      className={`btn ${variantClass[variant]} ${className}`}
    >
      {showIcon && <WhatsAppIcon size={19} />}
      <span>{label}</span>
    </a>
  );
}
