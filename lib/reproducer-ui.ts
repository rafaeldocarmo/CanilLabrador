import type { ReproducerForUi } from "@/lib/sanity/types";

export function ageLabelFromBirth(iso?: string | null): string {
  if (!iso) return "";
  const birth = new Date(iso);
  if (Number.isNaN(birth.getTime())) return "";
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) years--;
  if (years < 0) return "";
  if (years === 0) {
    const months = Math.max(
      0,
      (now.getFullYear() - birth.getFullYear()) * 12 + now.getMonth() - birth.getMonth(),
    );
    return months <= 1 ? "Menos de 1 ano" : `${months} meses`;
  }
  return years === 1 ? "1 ano" : `${years} anos`;
}

export function formatBirthLong(iso?: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function reproducerDescription(d: ReproducerForUi): string {
  const parts = [
    d.nomeCompleto ? `Nome completo: ${d.nomeCompleto}.` : null,
    d.cor ? `Cor: ${d.cor}.` : null,
    d.pra ? `PRA: ${d.pra}.` : null,
  ].filter(Boolean);
  if (parts.length) return parts.join(" ");
  return "Perfil cadastrado no CMS — você pode enriquecer com nome completo, cor e PRA para aparecer aqui no site.";
}

export function reproducerTraitTags(d: ReproducerForUi): string[] {
  return [d.cor, d.pra].filter((x): x is string => Boolean(x && String(x).trim()));
}

export type DogDetailModalData = {
  nome: string;
  roleLabel: string;
  isDam: boolean;
  ageText: string;
  colorLine: string;
  description: string;
  traitTags: string[];
  imageUrls: string[];
  statRg: string;
  statMicrochip: string;
  statBirth: string;
  laudoUrl?: string | null;
};

export function reproducerToModalDetail(
  d: ReproducerForUi,
  role: "dam" | "sire",
): DogDetailModalData {
  const ageText = ageLabelFromBirth(d.dataNascimento);
  return {
    nome: d.nome,
    roleLabel: role === "dam" ? "♀ Matriz" : "♂ Reprodutor",
    isDam: role === "dam",
    ageText: ageText || "—",
    colorLine: d.cor ?? "—",
    description: reproducerDescription(d),
    traitTags: reproducerTraitTags(d),
    imageUrls: d.imageUrls,
    statRg: d.rg?.trim() || "—",
    statMicrochip: d.microchip?.trim() || "—",
    statBirth: formatBirthLong(d.dataNascimento),
    laudoUrl: d.laudoUrl ?? null,
  };
}

/** Gradiente estável para cards sem foto */
export function placeholderGradientForId(id: string): string {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = id.charCodeAt(i) + ((h << 5) - h);
  const hue = Math.abs(h) % 360;
  return `linear-gradient(135deg, hsl(${hue} 32% 82%), hsl(${hue} 38% 72%))`;
}
