"use client";

import { useState } from "react";

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setPending(false);
    setSuccess(true);
    e.currentTarget.reset();
    window.setTimeout(() => setSuccess(false), 4000);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-beige-dark/15 bg-white p-6 sm:p-10"
    >
      <h2 className="mb-6 font-display text-2xl font-bold text-black">
        Envie uma Mensagem
      </h2>
      <div className="space-y-5">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium text-black/70"
          >
            Seu Nome
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="João Silva"
            autoComplete="name"
            className="w-full rounded-xl border border-beige-dark/30 bg-beige-light/30 px-4 py-3 text-black placeholder-black/30 transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-medium text-black/70"
          >
            E-mail
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="joao@exemplo.com"
            autoComplete="email"
            className="w-full rounded-xl border border-beige-dark/30 bg-beige-light/30 px-4 py-3 text-black placeholder-black/30 transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-black/70"
          >
            Mensagem
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Conte-nos sobre você e o que está procurando..."
            className="w-full resize-none rounded-xl border border-beige-dark/30 bg-beige-light/30 px-4 py-3 text-black placeholder-black/30 transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-xl bg-brown py-4 font-semibold text-white shadow-md transition-all hover:bg-brown-dark hover:shadow-lg disabled:opacity-70"
        >
          {pending ? "Enviando…" : "Enviar Mensagem"}
        </button>
        {success && (
          <div
            className="rounded-xl border border-green-200 bg-green-50 py-4 text-center"
            role="status"
          >
            <p className="font-semibold text-green-700">
              ✓ Mensagem enviada com sucesso!
            </p>
            <p className="mt-1 text-sm text-green-600">
              Entraremos em contato em breve.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
