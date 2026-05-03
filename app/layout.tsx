import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteConfig } from "@/lib/site-config";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} h-full`}>
      <body className="h-full min-h-full antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
