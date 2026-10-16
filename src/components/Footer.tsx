import Link from "next/link";
import { cacheLife } from "next/cache";
import { MapPin, Phone } from "lucide-react";
import { fullAddress, getWhatsAppUrl, navigation, siteConfig } from "@/lib/config";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { MapsButton } from "@/components/ContactLinks";

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  const { contact, address, professional } = siteConfig;

  return (
    <footer className="relative overflow-hidden bg-brand-900 pb-28 text-brand-100 lg:pb-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-brand-700/40 blur-3xl"
      />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo inverted />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-brand-200/90">
            Atendimento nutricional individualizado, com foco em alimentação, hábitos e qualidade de
            vida. Mais de {professional.yearsInHealth} anos de atuação na área da saúde.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${contact.instagramHandle} — abre em uma nova aba`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp — abre em uma nova aba"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>

        <nav aria-label="Links do rodapé" className="lg:col-span-2">
          <h2 className="font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase">
            Navegação
          </h2>
          <ul className="mt-5 space-y-3 text-[0.95rem]">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-brand-200/90 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacidade" className="text-brand-200/90 transition-colors hover:text-white">
                Privacidade
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase">
            Consultório
          </h2>
          <address className="mt-5 flex gap-3 text-[0.95rem] leading-relaxed not-italic text-brand-200/90">
            <MapPin size={18} className="mt-1 shrink-0 text-brand-300" aria-hidden="true" />
            <span>
              {address.street}
              <br />
              {address.neighborhood}
              <br />
              {address.city} - {address.state}
              <br />
              CEP {address.postalCode}
            </span>
          </address>
          <MapsButton id="footer-maps" className="btn-ghost-light mt-5 !min-h-11 !px-5 !text-sm" />
          <span className="sr-only">{fullAddress}</span>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase">
            Atendimento
          </h2>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center gap-3 text-[0.95rem] text-brand-200/90 transition-colors hover:text-white"
          >
            <Phone size={18} className="text-brand-300" aria-hidden="true" />
            WhatsApp {contact.whatsappDisplay}
          </a>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-3 text-[0.95rem] text-brand-200/90 transition-colors hover:text-white"
          >
            <InstagramIcon size={18} className="text-brand-300" />
            {contact.instagramHandle}
          </a>
          <a
            id="footer-whatsapp"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar consulta pelo WhatsApp — abre em uma nova aba"
            className="btn btn-light mt-6 !min-h-11 !px-5 !text-sm"
          >
            <WhatsAppIcon size={17} />
            Agendar consulta
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-brand-200/70 md:flex-row md:items-center md:justify-between">
          <p>
            © <CurrentYear /> {professional.displayName} · {professional.profession} · {address.city} -{" "}
            {address.state}
          </p>
          <p>As informações deste site têm caráter informativo e não substituem uma consulta.</p>
        </div>
      </div>
    </footer>
  );
}
