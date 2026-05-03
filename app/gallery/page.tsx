import { GalleryClient } from "@/components/GalleryClient";
import { PageIntro } from "@/components/PageIntro";

export default function GalleryRoutePage() {
  return (
    <>
      <PageIntro
        eyebrow="Galeria"
        title={
          <>
            Nossos <span className="text-brown italic">momentos</span>
          </>
        }
      />
      <GalleryClient />
    </>
  );
}
