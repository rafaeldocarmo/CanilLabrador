import { createClient, type SanityClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "ke5xx09s";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanityClient: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: true,
});
