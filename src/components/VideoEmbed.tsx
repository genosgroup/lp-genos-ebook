"use client";

import { useState } from "react";
import { image } from "@/lib/site";

const YOUTUBE_ID = "LozFIAtsZzY";

// Mesmos parâmetros do player que o Elementor criava (sem controles), já tocando após o clique na capa
const EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_ID}?controls=0&rel=0&playsinline=0&modestbranding=0&autoplay=1`;

/** Vídeo do YouTube com capa: o player só é carregado quando a capa é clicada. */
export default function VideoEmbed({ className = "" }: { className?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative max-w-full min-w-0 ${className}`}>
      <div className="h-full overflow-hidden [transform:translateZ(0)]">
        <div className="aspect-[1.77777]">
          {playing ? (
            <iframe
              src={EMBED_URL}
              title="YouTube video player"
              width={640}
              height={360}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="flex h-full w-full border-none bg-black"
            />
          ) : (
            <div
              role="button"
              tabIndex={0}
              aria-label="Reproduzir vídeo"
              className="absolute inset-0 cursor-pointer bg-cover bg-center text-center"
              style={{ backgroundImage: `url(${image("2-caminhos.jpg")})` }}
              onClick={() => setPlaying(true)}
              onKeyDown={(event) => (event.key === "Enter" || event.key === " ") && setPlaying(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
