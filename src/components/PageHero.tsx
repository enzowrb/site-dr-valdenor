import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

/** Cabeçalho das páginas internas. */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden bg-sand-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-brand-100 blur-3xl"
      />
      <div className="container-page relative pt-16 pb-16 lg:pt-24 lg:pb-20">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="heading-xl mt-5 max-w-3xl animate-fade-up [animation-delay:80ms]">{title}</h1>
        {description && (
          <p className="lead mt-6 max-w-2xl animate-fade-up [animation-delay:160ms]">{description}</p>
        )}
        {children && <div className="mt-8 animate-fade-up [animation-delay:240ms]">{children}</div>}
      </div>
    </section>
  );
}
