/** Campos comuns de matriz/padreador dentro de `{ ... }` */
export const reproducerFields = `
  _id,
  _type,
  nome,
  nomeCompleto,
  rg,
  microchip,
  dataNascimento,
  pra,
  cor,
  "laudoUrl": laudoDisplasia.asset->url,
  imagens[]{ _key, alt, caption, asset->{ _ref, _id, url } }
`;

export const matrizesQuery = `*[_type == "matriz"] | order(nome asc) { ${reproducerFields} }`;

export const padreadoresQuery = `*[_type == "padreador"] | order(nome asc) { ${reproducerFields} }`;

export const filhotesQuery = `*[_type == "filhote"] | order(nome asc) {
  _id,
  nome,
  numeroFinalMicrochip,
  imagens[]{ _key, alt, caption, asset->{ _ref, _id, url } },
  matriz->{ ${reproducerFields} },
  padreador->{ ${reproducerFields} }
}`;
