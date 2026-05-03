import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons/BrandIcons";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export function ContactPage() {
  return (
    <>
      <section className="bg-beige pb-10 pt-28 text-center sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-brown">
            Entre em Contato
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-black sm:text-5xl">
            Fale <span className="text-brown italic">Conosco</span>
          </h1>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-3xl bg-brown p-8 text-white">
                <h3 className="mb-6 font-display text-xl font-bold">
                  Fale direto conosco
                </h3>
                <div className="space-y-5">
                  <Link
                    href={siteConfig.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 transition-opacity hover:opacity-90"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">
                        WhatsApp
                      </p>
                      <p className="font-semibold">
                        {siteConfig.contact.whatsappDisplay}
                      </p>
                    </div>
                  </Link>
                  <Link
                    href={siteConfig.contact.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 transition-opacity hover:opacity-90"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <InstagramIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">
                        Instagram
                      </p>
                      <p className="font-semibold">
                        {siteConfig.contact.instagramDisplay}
                      </p>
                    </div>
                  </Link>
                  <Link
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-4 transition-opacity hover:opacity-90"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">
                        E-mail
                      </p>
                      <p className="font-semibold">{siteConfig.contact.email}</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl bg-beige p-6 text-center">
                <p className="text-sm text-black/50">Prefere um bate-papo rápido?</p>
                <Link
                  href={siteConfig.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Abrir WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
