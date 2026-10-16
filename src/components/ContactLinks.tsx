import { Navigation } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { InstagramIcon } from "@/components/icons";

type LinkProps = { className?: string; label?: string; id?: string };

/** Abre o endereço oficial do consultório no Google Maps. */
export function MapsButton({ className = "btn-secondary", label = "Como chegar", id }: LinkProps) {
  return (
    <a
      id={id}
      href={siteConfig.address.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — abre o Google Maps em uma nova aba`}
      className={`btn ${className}`}
    >
      <Navigation size={18} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

/** Link para o perfil oficial do Instagram. */
export function InstagramLink({
  className = "btn-secondary",
  label = siteConfig.contact.instagramHandle,
  id,
}: LinkProps) {
  return (
    <a
      id={id}
      href={siteConfig.contact.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Instagram ${siteConfig.contact.instagramHandle} — abre em uma nova aba`}
      className={`btn ${className}`}
    >
      <InstagramIcon size={18} />
      <span>{label}</span>
    </a>
  );
}
