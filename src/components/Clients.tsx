/* eslint-disable @next/next/no-img-element */
import { image } from "@/lib/site";

// Prints de conversas de clientes, em três colunas (arquivo, altura, variante de 300px)
const COLUMNS = [
  [
    ["d1.webp", 215, "d1-300x168.webp"],
    ["d2.webp", 186, "d2-300x145.webp"],
    ["d3.webp", 171, "d3-300x134.webp"],
    ["d4.webp", 186, "d4-300x145.webp"],
  ],
  [
    ["d5.webp", 213, "d5-300x166.webp"],
    ["d6.webp", 245, "d6-300x191.webp"],
    ["d7.webp", 283, "d7-300x221.webp"],
  ],
  [
    ["d8.webp", 246, "d8-300x192.webp"],
    ["d9.webp", 215, "d9-300x168.webp"],
    ["d10.webp", 191, "d10-300x149.webp"],
  ],
] as const;

/** "Esses são alguns dos empresários que aplicaram os 4 Pilares" */
export default function Clients() {
  return (
    <section className="relative flex w-full min-w-0 flex-col">
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-col gap-[35px] pt-[35px] pb-[30px] max-mobile:flex-wrap max-mobile:pt-[30px]">
        <div className="relative max-w-full min-w-0 text-center max-mobile:w-[320px] max-mobile:self-center">
          <h2 className="font-titillium text-[28px] leading-none font-normal text-white max-mobile:text-[21px]">
            Esses são alguns dos empresários que aplicaram os 4 Pilares
          </h2>
        </div>
        <div className="relative flex w-full min-w-0 flex-row gap-5 max-mobile:w-[320px] max-mobile:flex-wrap max-mobile:self-center">
          {COLUMNS.map((column, i) => (
            <div key={i} className="relative flex w-full min-w-0 flex-col items-center gap-5 max-mobile:flex-wrap">
              {column.map(([file, height, small]) => (
                <div key={file} className="relative max-w-full min-w-0 text-center">
                  <img
                    src={image(file)}
                    srcSet={`${image(file)} 384w, ${image(small)} 300w`}
                    sizes="(max-width: 384px) 100vw, 384px"
                    width={384}
                    height={height}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
