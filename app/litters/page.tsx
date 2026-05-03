import { LittersPage } from "@/sections/litters/LittersPage";
import { getLittersFromFilhotes } from "@/lib/sanity/fetch";

export const revalidate = 60;

export default async function LittersRoutePage() {
  const litters = await getLittersFromFilhotes();
  return <LittersPage litters={litters} />;
}
