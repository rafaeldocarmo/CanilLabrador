export type Testimonial = {
  id: string;
  quote: string;
  author: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Nosso Labrador do canil é o cão mais carinhoso e equilibrado que poderíamos ter. Toda a experiência foi maravilhosa do início ao fim.",
    author: "Família Martinez",
  },
  {
    id: "t2",
    quote:
      "Profissionais, acolhedores e verdadeiramente apaixonados pelos cães. Nos sentimos apoiados em cada etapa. Nosso filhote chegou saudável e feliz!",
    author: "Sarah e Tom W.",
  },
  {
    id: "t3",
    quote:
      "Dois anos depois, nosso menino continua sendo a melhor decisão que já tomamos. O suporte contínuo do criador foi inestimável para quem nunca tinha tido um cão.",
    author: "Família Anderson",
  },
];
