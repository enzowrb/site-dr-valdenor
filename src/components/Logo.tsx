type LogoProps = { inverted?: boolean };

/** Logotipo tipográfico com monograma. */
export function Logo({ inverted = false }: LogoProps) {
  return (
    <span className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-display text-[1.05rem] ${
          inverted
            ? "border-white/30 bg-white/10 text-white"
            : "border-brand-200 bg-brand-50 text-brand-800"
        }`}
      >
        VA
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.2rem] font-medium tracking-tight ${
            inverted ? "text-white" : "text-brand-900"
          }`}
        >
          Dr. Valdenor Alves
        </span>
        <span
          className={`mt-1 text-[0.66rem] font-semibold tracking-[0.24em] uppercase ${
            inverted ? "text-brand-200" : "text-brand-600"
          }`}
        >
          Nutricionista
        </span>
      </span>
    </span>
  );
}
