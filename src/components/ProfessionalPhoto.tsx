import Image from "next/image";

type ProfessionalPhotoProps = {
  /** Caminho da foto original em /public. Se `null`, exibe espaço reservado. */
  src: string | null;
  alt: string;
  /** Nome do arquivo esperado (documentação para quem for adicionar a foto). */
  expectedFile: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Exibe uma fotografia ORIGINAL do profissional ou um espaço reservado elegante.
 * Nunca utiliza imagens de outras pessoas ou geradas como se fossem ele.
 */
export function ProfessionalPhoto({
  src,
  alt,
  expectedFile,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  className = "",
}: ProfessionalPhotoProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-brand-100 via-brand-50 to-sand-200 ${className}`}
      role="img"
      aria-label="Espaço reservado para fotografia oficial do Dr. Valdenor Alves"
      data-expected-photo={`/images/${expectedFile}`}
    >
      {/* Ornamento botânico discreto */}
      <svg
        className="absolute -right-10 -bottom-10 h-[70%] w-[70%] text-brand-200"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M100 190C100 120 60 80 20 60c40 0 80 20 80 70 0-50 40-90 90-100-40 30-70 70-90 160Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path d="M100 190V60" stroke="currentColor" strokeWidth="2" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
        <span className="flex h-24 w-24 items-center justify-center rounded-full border border-brand-300/70 bg-white/70 font-display text-3xl text-brand-800 backdrop-blur-sm">
          VA
        </span>
        <span className="text-xs font-semibold tracking-[0.2em] text-brand-700/70 uppercase">
          Dr. Valdenor Alves
        </span>
      </div>
    </div>
  );
}
