import { sanityClient } from "./client";
import { urlForImage } from "./image";
import { filhotesQuery, matrizesQuery, padreadoresQuery } from "./queries";
import type {
  FilhoteDoc,
  FilhoteForUi,
  LitterGroupForUi,
  ReproducerDoc,
  ReproducerForUi,
  SanityStudioImage,
} from "./types";

function collectImageUrls(imagens?: SanityStudioImage[] | null): string[] {
  if (!imagens?.length) return [];
  const urls: string[] = [];
  for (const img of imagens) {
    if (!img?.asset) continue;
    try {
      urls.push(urlForImage(img).width(1200).quality(85).url());
    } catch {
      if (typeof img.asset.url === "string") urls.push(img.asset.url);
    }
  }
  return urls;
}

function mapReproducer(doc: ReproducerDoc): ReproducerForUi {
  return {
    ...doc,
    imageUrls: collectImageUrls(doc.imagens),
  };
}

function mapFilhote(doc: FilhoteDoc): FilhoteForUi {
  return {
    ...doc,
    matriz: doc.matriz ? mapReproducer(doc.matriz) : null,
    padreador: doc.padreador ? mapReproducer(doc.padreador) : null,
    imageUrls: collectImageUrls(doc.imagens),
  };
}

export async function getMatrizes(): Promise<ReproducerForUi[]> {
  const rows = await sanityClient.fetch<ReproducerDoc[]>(matrizesQuery);
  return rows.map(mapReproducer);
}

export async function getPadreadores(): Promise<ReproducerForUi[]> {
  const rows = await sanityClient.fetch<ReproducerDoc[]>(padreadoresQuery);
  return rows.map(mapReproducer);
}

export async function getLittersFromFilhotes(): Promise<LitterGroupForUi[]> {
  const rows = await sanityClient.fetch<FilhoteDoc[]>(filhotesQuery);
  const mapped = rows.map(mapFilhote);
  const map = new Map<string, LitterGroupForUi>();

  for (const f of mapped) {
    const mId = f.matriz?._id ?? "sem-matriz";
    const pId = f.padreador?._id ?? "sem-padreador";
    const key = `${mId}-${pId}`;
    if (!map.has(key)) {
      map.set(key, {
        key,
        matriz: f.matriz,
        padreador: f.padreador,
        filhotes: [],
      });
    }
    map.get(key)!.filhotes.push(f);
  }

  return [...map.values()];
}
