/** Resposta GROQ para imagens do studio */
export type SanityStudioImage = {
  _key?: string;
  asset?: {
    _ref?: string;
    _id?: string;
    url?: string;
  } | null;
  alt?: string;
  caption?: string;
};

export type ReproducerDoc = {
  _id: string;
  _type: "matriz" | "padreador";
  nome: string;
  nomeCompleto?: string | null;
  rg?: string | null;
  microchip?: string | null;
  dataNascimento?: string | null;
  pra?: string | null;
  cor?: string | null;
  laudoUrl?: string | null;
  imagens?: SanityStudioImage[] | null;
};

export type FilhoteDoc = {
  _id: string;
  nome: string;
  numeroFinalMicrochip?: string | null;
  imagens?: SanityStudioImage[] | null;
  matriz?: ReproducerDoc | null;
  padreador?: ReproducerDoc | null;
};

export type LitterGroup = {
  key: string;
  matriz: ReproducerDoc | null;
  padreador: ReproducerDoc | null;
  filhotes: FilhoteDoc[];
};

/** Dados já normalizados para UI (URLs de imagem resolvidas no servidor) */
export type ReproducerForUi = ReproducerDoc & {
  imageUrls: string[];
};

export type FilhoteForUi = Omit<FilhoteDoc, "matriz" | "padreador"> & {
  matriz: ReproducerForUi | null;
  padreador: ReproducerForUi | null;
  imageUrls: string[];
};

export type LitterGroupForUi = {
  key: string;
  matriz: ReproducerForUi | null;
  padreador: ReproducerForUi | null;
  filhotes: FilhoteForUi[];
};
