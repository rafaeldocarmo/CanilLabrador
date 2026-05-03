export const routes = {
  home: "/",
  breed: "/breed",
  dogs: "/dogs",
  litters: "/litters",
  gallery: "/gallery",
  contact: "/contact",
} as const;

export type RouteKey = keyof typeof routes;

export const mainNav = [
  { href: routes.home, label: "Início" },
  { href: routes.breed, label: "A raça" },
  { href: routes.dogs, label: "Nossos cães" },
  { href: routes.litters, label: "Ninhadas" },
  { href: routes.gallery, label: "Galeria" },
] as const;
