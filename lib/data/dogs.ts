export type DogId = "luna" | "bella" | "duke" | "max";

export type DogProfile = {
  id: DogId;
  name: string;
  gender: string;
  age: string;
  color: string;
  traits: string[];
  description: string;
  weight: string;
  height: string;
  registered: string;
  role: "dam" | "sire";
};

export const dogs: Record<DogId, DogProfile> = {
  luna: {
    id: "luna",
    name: "Luna",
    gender: "♀ Matriz",
    age: "4 anos",
    color: "Amarelo",
    traits: ["Dócil", "OFA Excelente", "Linha campeã", "CERF limpo"],
    description:
      "Luna é o orgulho do canil — uma mãe gentil e carinhosa, com temperamento calmo e acolhedor. Vem de uma linhagem campeã excepcional e passou por todos os exames de saúde com resultados excelentes. Seus filhotes herdam sua bela estrutura, doçura e o calor inconfundível do Labrador. Luna se destaca em obediência e tem afinidade natural com crianças, tornando seus descendentes companheiros ideais para famílias.",
    weight: "28 kg",
    height: "58 cm",
    registered: "AKC #WS12345678",
    role: "dam",
  },
  bella: {
    id: "bella",
    name: "Bella",
    gender: "♀ Matriz",
    age: "3 anos",
    color: "Amarelo",
    traits: ["Atlética", "OFA Bom", "CERF limpo", "EIC limpo"],
    description:
      "Bella é uma matriz enérgica e brincalhona, com pelagem linda e alegria contagiante. Vem de uma linha de campeões de campo e exposição, unindo atletismo e beleza. Seus filhotes são conhecidos pela garra, inteligência e natureza afetuosa. Bella está com exames de saúde em dia e livre das principais condições genéticas da raça.",
    weight: "27 kg",
    height: "56 cm",
    registered: "AKC #WS98765432",
    role: "dam",
  },
  duke: {
    id: "duke",
    name: "Duke",
    gender: "♂ Reprodutor",
    age: "5 anos",
    color: "Amarelo",
    traits: ["Porte forte", "OFA Excelente", "Multi-campeão", "CNM limpo"],
    description:
      "Duke é um macho magnífico, com porte impressionante, movimento confiante e coração de ouro. De linhagem multi-campeã, traz estrutura óssea excepcional e temperamento equilibrado para cada ninhada. Seus filhotes são reconhecidos pela excelente estrutura e doçura, ideais como companheiros e com potencial para pistas.",
    weight: "34 kg",
    height: "61 cm",
    registered: "AKC #WS55667788",
    role: "sire",
  },
  max: {
    id: "max",
    name: "Max",
    gender: "♂ Reprodutor",
    age: "4 anos",
    color: "Preto",
    traits: ["Pelagem linda", "EIC limpo", "CNM limpo", "OFA Bom"],
    description:
      "Max é um Labrador preto marcante, com movimento impecável, pelagem densa e brilhante e personalidade doce. Transmite estrutura óssea sólida, qualidade de pelo e postura calma aos filhos. Com exames completos e livre das principais condições da raça, produz filhotes com temperamento excepcional e conformação belíssima.",
    weight: "33 kg",
    height: "60 cm",
    registered: "AKC #WS11223344",
    role: "sire",
  },
};

export const damsList: DogId[] = ["luna", "bella"];
export const siresList: DogId[] = ["duke", "max"];
