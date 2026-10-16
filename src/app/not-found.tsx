import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <span className="font-display text-8xl font-bold text-brand-800">404</span>
      <h1 className="heading-md mt-4">Página não encontrada</h1>
      <p className="lead mx-auto mt-3 max-w-md text-ink-600">
        O endereço que você tentou acessar não existe ou foi alterado.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">
          <ArrowLeft size={18} aria-hidden="true" />
          Voltar para a página inicial
        </Link>
        <WhatsAppButton variant="secondary" label="Falar pelo WhatsApp" />
      </div>
    </div>
  );
}
