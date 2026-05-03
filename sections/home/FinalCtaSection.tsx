import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SiteLogo } from "@/components/SiteLogo";
import { ScrollReveal } from "@/components/ScrollReveal";
import { routes } from "@/lib/routes";

export function FinalCtaSection() {
  return (
    <section className="bg-beige py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-6 flex justify-center">
            <SiteLogo variant="section" />
          </div>
          <h2 className="font-display text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Pronto para
            <br />
            <span className="text-brown italic">Um Novo Membro?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-black/55">
            Fale conosco para conhecer nossos filhotes disponíveis, ninhadas
            planejadas ou simplesmente para fazer perguntas. Adoraríamos ouvir
            você!
          </p>
          <Link
            href={routes.contact}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-brown px-10 py-5 text-lg font-semibold text-white shadow-lg shadow-brown/25 transition-all hover:-translate-y-0.5 hover:bg-brown-dark hover:shadow-xl"
          >
            <MessageCircle className="h-6 w-6" aria-hidden />
            Fale conosco pelo WhatsApp
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
