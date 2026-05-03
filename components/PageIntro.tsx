import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-beige pb-16 pt-16 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="anim-fade-up text-sm font-semibold uppercase tracking-widest text-brown">
          {eyebrow}
        </span>
        <h1 className="anim-fade-up-d1 mt-3 font-display text-4xl font-bold text-black sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="anim-fade-up-d2 mx-auto mt-4 max-w-2xl text-lg text-black/55 sm:mt-6">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
