/* eslint-disable @next/next/no-img-element */
import { image } from "@/lib/site";

/** "Sobre a Genos Group" */
export default function About() {
  return (
    <section className="relative flex w-full min-w-0 flex-col bg-night">
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-row-reverse gap-5 py-[30px] max-mobile:flex-col max-mobile:flex-wrap max-mobile:items-center max-mobile:justify-center">
        <div className="relative flex w-1/2 min-w-0 flex-col justify-center gap-5 max-mobile:w-[320px] max-mobile:flex-wrap">
          <div className="relative max-w-full min-w-0 text-center">
            <img
              src={image("Free_MacBook_Pro_1-12.png")}
              srcSet={`${image("Free_MacBook_Pro_1-12.png")} 654w, ${image("Free_MacBook_Pro_1-12-300x208.png")} 300w`}
              sizes="(max-width: 654px) 100vw, 654px"
              width={654}
              height={454}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="relative flex w-1/2 min-w-0 flex-col justify-center gap-5 max-mobile:w-[320px] max-mobile:flex-wrap">
          <div className="relative max-w-full min-w-0 max-mobile:text-center">
            <h2 className="font-titillium text-[32px] leading-none font-semibold text-orange">Sobre a Genos Group</h2>
          </div>
          <div className="relative w-[93%] max-w-full min-w-0 text-left font-titillium text-[16px] leading-[24px] font-light text-white max-mobile:w-full max-mobile:self-center max-mobile:text-center">
            <p>
              A Genos é responsável por acelerar empresas através do método PPTE, que foi criado pensando nas maiores
              dificuldades que os empresários passam e que os impedem de escalar suas empresas de forma inteligente.
              <br />
              <br />
              Através do nosso método, ensinamos empresários a treinar o seu time de maneira eficiente, otimizar
              processos repetitivos, automatizar suas operações e aumentar seu faturamento de forma inteligente, a fim
              de diminuir custos e acelerar seu crescimento.
              <br />
              <br />
              Aqui na Genos trabalhamos com o lema: “Casa de ferreiro, espeto de ferro”, pois tudo o que aplicamos para
              os nossos clientes, aplicamos também na nossa própria operação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
