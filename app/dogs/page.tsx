import { DogsPageClient } from "@/components/dogs/DogsPageClient";
import { getMatrizes, getPadreadores } from "@/lib/sanity/fetch";

export const revalidate = 60;

export default async function DogsRoutePage() {
  const [matrizes, padreadores] = await Promise.all([getMatrizes(), getPadreadores()]);
  return <DogsPageClient matrizes={matrizes} padreadores={padreadores} />;
}
