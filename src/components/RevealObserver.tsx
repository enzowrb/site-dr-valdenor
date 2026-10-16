"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Animação de entrada suave para elementos com `data-reveal`.
 * Aprimoramento progressivo: sem JavaScript, todo o conteúdo permanece visível.
 * Respeita `prefers-reduced-motion`.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"),
    ).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
