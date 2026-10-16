"use client";

import { useId, useState, type FormEvent } from "react";
import { AlertCircle, Info, Send } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons";

type Fields = { name: string; contact: string; message: string; consent: boolean };
type Errors = Partial<Record<keyof Fields, string>>;

const LIMITS = { name: 80, contact: 120, message: 500 };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  const name = values.name.trim();
  const contact = values.contact.trim();

  if (name.length < 2) errors.name = "Informe seu nome (mínimo de 2 caracteres).";
  else if (name.length > LIMITS.name) errors.name = `Use no máximo ${LIMITS.name} caracteres.`;

  const digits = contact.replace(/\D/g, "");
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact);
  const isPhone = digits.length >= 10 && digits.length <= 13 && !/[a-z@]/i.test(contact);
  if (!contact) errors.contact = "Informe um telefone ou e-mail para retorno.";
  else if (!isEmail && !isPhone)
    errors.contact = "Informe um telefone com DDD (ex.: 64 99999-9999) ou um e-mail válido.";

  if (values.message.length > LIMITS.message)
    errors.message = `Use no máximo ${LIMITS.message} caracteres.`;

  if (!values.consent) errors.consent = "É necessário concordar com a Política de Privacidade.";
  return errors;
}

function buildMessage(values: Fields) {
  const lines = [
    "Olá! Gostaria de obter informações sobre o atendimento nutricional com o Dr. Valdenor Alves.",
    "",
    `Nome: ${values.name.trim()}`,
    `Contato para retorno: ${values.contact.trim()}`,
  ];
  const msg = values.message.trim();
  if (msg) lines.push(`Mensagem: ${msg}`);
  return lines.join("\n");
}

/**
 * Formulário de contato.
 *
 * Não há backend de envio nesta versão: ao validar, o formulário abre o WhatsApp
 * com a mensagem pré-preenchida para que o próprio visitante a envie.
 * Nenhum dado é armazenado ou transmitido para servidores do site.
 * (Integração futura por e-mail/backend documentada no README.)
 */
export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<Fields>({ name: "", contact: "", message: "", consent: false });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const id = (field: string) => `${uid}-${field}`;

  const update = <K extends keyof Fields>(field: K, value: Fields[K]) => {
    const next = { ...values, [field]: value };
    setValues(next);
    setWhatsappUrl(null);
    if (touched[field]) setErrors(validate(next));
  };

  const blur = (field: keyof Fields) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = validate(values);
    setErrors(result);
    setTouched({ name: true, contact: true, message: true, consent: true });

    const firstError = (Object.keys(result) as (keyof Fields)[])[0];
    if (firstError) {
      document.getElementById(id(firstError))?.focus();
      return;
    }

    const url = getWhatsAppUrl(buildMessage(values));
    setWhatsappUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const errorCount = Object.keys(errors).length;
  const showSummary = errorCount > 0 && touched.consent;

  return (
    <form noValidate onSubmit={onSubmit} className="card p-6 sm:p-10" aria-labelledby={id("title")}>
      <h2 id={id("title")} className="heading-md">
        Solicite informações
      </h2>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-600">
        Preencha os campos e você será direcionado ao WhatsApp com a mensagem pronta. O envio é feito
        por você, no aplicativo.
      </p>

      <div className="mt-5 flex gap-3 rounded-xl border border-gold-500/25 bg-gold-100/70 p-4 text-sm leading-relaxed text-ink-900">
        <Info size={18} className="mt-0.5 shrink-0 text-gold-500" aria-hidden="true" />
        <p>
          Por segurança e privacidade, <strong>não inclua</strong> diagnósticos, exames, histórico
          clínico ou outras informações de saúde neste formulário.
        </p>
      </div>

      {showSummary && (
        <div role="alert" className="mt-5 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>
            {errorCount === 1 ? "Há 1 campo" : `Há ${errorCount} campos`} que precisam de atenção.
          </p>
        </div>
      )}

      <div className="mt-7 grid gap-5">
        <div>
          <label htmlFor={id("name")} className="mb-2 block text-sm font-semibold text-ink-900">
            Nome <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={LIMITS.name + 20}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => blur("name")}
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={errors.name && touched.name ? id("name-error") : undefined}
            className="field-input"
          />
          {touched.name && errors.name && (
            <p id={id("name-error")} className="mt-2 text-sm text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={id("contact")} className="mb-2 block text-sm font-semibold text-ink-900">
            Telefone ou e-mail para retorno <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <input
            id={id("contact")}
            name="contact"
            type="text"
            inputMode="email"
            autoComplete="tel"
            required
            maxLength={LIMITS.contact}
            value={values.contact}
            onChange={(e) => update("contact", e.target.value)}
            onBlur={() => blur("contact")}
            aria-invalid={touched.contact && !!errors.contact}
            aria-describedby={`${id("contact-hint")}${errors.contact && touched.contact ? ` ${id("contact-error")}` : ""}`}
            className="field-input"
          />
          <p id={id("contact-hint")} className="mt-2 text-xs text-ink-600">
            Ex.: (64) 99999-9999 ou nome@email.com
          </p>
          {touched.contact && errors.contact && (
            <p id={id("contact-error")} className="mt-1 text-sm text-red-700">
              {errors.contact}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={id("message")} className="mb-2 block text-sm font-semibold text-ink-900">
            Mensagem <span className="font-normal text-ink-600">(opcional)</span>
          </label>
          <textarea
            id={id("message")}
            name="message"
            rows={4}
            maxLength={LIMITS.message}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            onBlur={() => blur("message")}
            aria-invalid={touched.message && !!errors.message}
            aria-describedby={id("message-count")}
            placeholder="Ex.: Gostaria de saber como funciona a consulta."
            className="field-input resize-y"
          />
          <p id={id("message-count")} className="mt-2 text-right text-xs text-ink-600">
            {values.message.length}/{LIMITS.message}
          </p>
        </div>

        <div>
          <div className="flex items-start gap-3">
            <input
              id={id("consent")}
              name="consent"
              type="checkbox"
              checked={values.consent}
              onChange={(e) => update("consent", e.target.checked)}
              onBlur={() => blur("consent")}
              aria-invalid={touched.consent && !!errors.consent}
              aria-describedby={errors.consent && touched.consent ? id("consent-error") : undefined}
              className="mt-1 h-5 w-5 shrink-0 accent-brand-700"
            />
            <label htmlFor={id("consent")} className="text-sm leading-relaxed text-ink-600">
              Li e concordo com a{" "}
              <Link href="/privacidade" className="font-semibold text-brand-700 underline underline-offset-2">
                Política de Privacidade
              </Link>{" "}
              e com o uso dos meus dados apenas para retorno deste contato.
            </label>
          </div>
          {touched.consent && errors.consent && (
            <p id={id("consent-error")} className="mt-2 text-sm text-red-700">
              {errors.consent}
            </p>
          )}
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-8 w-full sm:w-auto" id="contact-form-submit">
        <Send size={18} aria-hidden="true" />
        Continuar no WhatsApp
      </button>

      <div aria-live="polite">
        {whatsappUrl && (
          <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-5 text-sm leading-relaxed text-ink-900">
            <p>
              <strong>Quase lá!</strong> Abrimos o WhatsApp com a sua mensagem em uma nova aba. Para
              concluir, confira o texto e toque em <strong>enviar</strong> no aplicativo. Sua
              solicitação só será recebida após esse envio.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-semibold text-brand-700 underline underline-offset-2"
            >
              <WhatsAppIcon size={16} />
              A janela não abriu? Clique aqui.
            </a>
          </div>
        )}
      </div>
    </form>
  );
}
