"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { SiteLogo } from "@/components/SiteLogo";
import { mainNav, routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

function navLinkClass(active: boolean) {
  return cn(
    "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
    active
      ? "text-brown bg-brown/5"
      : "text-black/70 hover:text-brown hover:bg-brown/5",
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = useCallback(
    (href: string) => {
      if (href === routes.home) return pathname === routes.home;
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "site-header fixed top-0 left-0 right-0 z-50 bg-transparent",
        scrolled && "scrolled",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link
            href={routes.home}
            className="group flex items-center gap-3"
            aria-label={`${siteConfig.name} — início`}
          >
            <span className="transition-transform group-hover:scale-105">
              <SiteLogo variant="header" priority />
            </span>
            <span className="font-display text-lg font-bold text-brown sm:text-xl">
              {siteConfig.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Navegação principal"
          >
            {mainNav.map(({ href, label }) => (
              <Link key={href} href={href} className={navLinkClass(isActive(href))}>
                {label}
              </Link>
            ))}
            <Link
              href={routes.contact}
              className={cn(
                "ml-2 rounded-full bg-brown px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-brown-dark hover:shadow-lg",
                isActive(routes.contact) && "ring-2 ring-brown/30",
              )}
            >
              Contato
            </Link>
          </nav>

          <button
            type="button"
            className="p-2 text-brown md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir ou fechar menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <Menu className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>

        <nav
          id="mobile-menu"
          className={cn(
            "md:hidden overflow-hidden transition-[max-height] duration-300 ease-out",
            mobileOpen
              ? "max-h-[min(75vh,560px)] pb-4 pt-2"
              : "pointer-events-none max-h-0 pb-0 pt-0",
          )}
          aria-hidden={!mobileOpen}
          inert={!mobileOpen ? true : undefined}
          aria-label="Navegação no celular"
        >
          <div className="flex flex-col gap-1 rounded-2xl border border-beige-dark/30 bg-cream p-4 shadow-lg">
            {mainNav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl px-4 py-3 text-left font-medium text-black/80 transition-all hover:bg-beige/50 hover:text-brown"
              >
                {label}
              </Link>
            ))}
            <Link
              href={routes.contact}
              className="mt-2 rounded-xl bg-brown px-4 py-3 text-center font-semibold text-white transition-all hover:bg-brown-dark"
            >
              Fale conosco
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
