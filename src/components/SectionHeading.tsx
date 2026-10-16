import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  inverted?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  inverted = false,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`} data-reveal>
      {eyebrow && (
        <p className={`eyebrow ${inverted ? "!text-brand-200" : ""} ${centered ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <Tag className={`heading-lg mt-4 ${inverted ? "!text-white" : ""}`}>{title}</Tag>
      {description && (
        <p className={`lead mt-5 ${inverted ? "!text-brand-100/85" : ""}`}>{description}</p>
      )}
    </div>
  );
}
