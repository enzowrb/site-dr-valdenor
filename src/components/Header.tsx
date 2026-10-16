"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/lib/config";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { InstagramIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao pressionar Esc e trava a rolagem enquanto aberto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-[#256e49] bg-[#2E7D52] shadow-[0_8px_30px_-15px_rgb(15_56_37/0.35)]"
          : "border-b border-[#256e49]/30 bg-[#2E7D52]"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-brand-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Link href="/" onClick={close} aria-label={`${siteConfig.professional.displayName} — página inicial`}>
          <Logo inverted />
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-[0.96rem] transition-colors font-medium ${
                      active
                        ? "text-white font-semibold drop-shadow-sm"
                        : "text-white/95 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left bg-white transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <WhatsAppButton id="header-whatsapp" label="Agendar consulta" className="!min-h-11 !px-5" />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {/* Menu móvel */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-white lg:hidden"
      >
        <nav aria-label="Navegação móvel" className="container-page flex min-h-full flex-col pt-6 pb-10">
          <ul className="flex flex-col">
            {navigation.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <li
                  key={item.href}
                  className="animate-fade-up border-b border-line"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-5 font-display text-2xl ${
                      active ? "text-brand-800" : "text-ink-900"
                    }`}
                  >
                    {item.label}
                    {active && <span className="h-2 w-2 rounded-full bg-brand-600" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <WhatsAppButton id="mobile-menu-whatsapp" label="Agendar consulta" className="w-full" />
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full"
              aria-label={`Instagram ${siteConfig.contact.instagramHandle} — abre em uma nova aba`}
            >
              <InstagramIcon size={18} />
              {siteConfig.contact.instagramHandle}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
