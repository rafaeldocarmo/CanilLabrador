import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-beige-light">
      <SiteHeader />
      <main className="flex-1 pt-16 sm:pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}
