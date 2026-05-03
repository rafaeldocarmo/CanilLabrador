import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityStudioImage } from "@/lib/sanity/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "ke5xx09s";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: SanityStudioImage) {
  return builder.image(source).auto("format");
}
