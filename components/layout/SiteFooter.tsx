import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons/BrandIcons";
import { SiteLogo } from "@/components/SiteLogo";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { href: routes.home, label: "Início" },
  { href: routes.breed, label: "A raça" },
  { href: routes.dogs, label: "Nossos cães" },
  { href: routes.litters, label: "Ninhadas e filhotes" },
];

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <SiteLogo variant="footer" />
              <span className="font-display text-lg font-bold">
                {siteConfig.nameFull}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/40">
              {siteConfig.footerTagline}
            </p>
          </div>
          <div>
            <h2 className="mb-4 font-bold text-white">Links rápidos</h2>
            <ul className="space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/40 transition-colors hover:text-brown"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-bold text-white">Contato</h2>
            <div className="space-y-2 text-sm text-white/40">
              <p>{siteConfig.contact.whatsappDisplay}</p>
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.instagramDisplay}</p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 font-bold text-white">Redes sociais</h2>
            <div className="flex gap-3">
              <a
                href={siteConfig.contact.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-white/5 transition-all hover:bg-brown"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <button
                type="button"
                disabled
                className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-xl bg-white/5 opacity-50"
                aria-label="Facebook (em breve)"
              >
                <FacebookIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                disabled
                className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-xl bg-white/5 opacity-50"
                aria-label="YouTube (em breve)"
              >
                <YoutubeIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.nameFull}. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
