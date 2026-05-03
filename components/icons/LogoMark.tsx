import type { SVGProps } from "react";

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" aria-hidden {...props}>
      <path d="M20 4c-2 0-3.5 2-3.5 4.5S18 13 20 13s3.5-2.5 3.5-4.5S22 4 20 4zm-8 4c-1.8 0-3 1.5-3 3.5s1.5 3.5 3 3.5 3-1.5 3-3.5-1.2-3.5-3-3.5zm16 0c-1.8 0-3 1.5-3 3.5s1.2 3.5 3 3.5 3-1.5 3-3.5-1.2-3.5-3-3.5zM20 15c-5 0-10 4-10 10 0 4 2 7 5 8.5 1.5.8 3 1.5 5 1.5s3.5-.7 5-1.5c3-1.5 5-4.5 5-8.5 0-6-5-10-10-10z" />
    </svg>
  );
}
