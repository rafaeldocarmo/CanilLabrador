import Image from "next/image";
import { cn } from "@/lib/cn";

/** Texto alternativo para SEO e acessibilidade (logo oficial do canil). */
export const SITE_LOGO_ALT =
  "Logo do Canil Massister com a ilustração de um filhote de Labrador chocolate sentado na grama.";

const SRC = "/images/logo-canil-massister.png";

type SiteLogoProps = {
  variant?: "header" | "footer" | "section";
  className?: string;
  priority?: boolean;
};

const box = {
  header: "h-11 w-11 sm:h-14 sm:w-14",
  footer: "h-16 w-16 sm:h-20 sm:w-20",
  section: "h-24 w-24 sm:h-28 sm:w-28",
} as const;

const sizesAttr = {
  header: "(max-width: 640px) 44px, 56px",
  footer: "(max-width: 640px) 64px, 80px",
  section: "(max-width: 640px) 96px, 112px",
} as const;

export function SiteLogo({
  variant = "header",
  className,
  priority,
}: SiteLogoProps) {
  return (
    <span
      className={cn(
        "relative inline-block shrink-0",
        box[variant],
        className,
      )}
    >
      <Image
        src={SRC}
        alt={SITE_LOGO_ALT}
        fill
        className="object-contain"
        sizes={sizesAttr[variant]}
        priority={priority}
      />
    </span>
  );
}
