import { bg } from "@/lib/site";

/** "Pessoas, Processos, Tecnologia e Escala." */
export default function Pillars() {
  return (
    <section
      className="relative flex min-h-[416px] w-full min-w-0 flex-col bg-night bg-cover bg-center bg-no-repeat"
      style={bg("3-1-e1722958848761.webp")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-col justify-center gap-5 mobile:max-w-[727px] max-mobile:flex-wrap max-mobile:items-center max-mobile:py-[50px]">
        <div className="relative max-w-full min-w-0 text-center max-mobile:w-[320px]">
          <h2 className="font-titillium text-[32px] leading-none font-bold text-white">
            Pessoas, Processos, Tecnologia e Escala.
          </h2>
        </div>
        <div className="relative w-[93%] max-w-full min-w-0 text-center font-titillium text-[18px] leading-[31px] font-normal text-white max-mobile:w-[320px] max-mobile:text-justify max-mobile:text-[15px] max-mobile:leading-[1.5em]">
          <p>
            Quando esses&nbsp;<strong>4 pilares</strong>&nbsp;funcionam em perfeito alinhamento, a sua empresa cresce
            independente do cenário que o mundo está vivendo. A necessidade de adaptação às novas tecnologias nunca foi
            tão grande e está forçando empresários do mundo inteiro a <strong>se&nbsp;adaptarem o mais rápido possível.</strong>{" "}
            Por isso, nós decidimos reunir um&nbsp;<strong>compilado de informações</strong> completas&nbsp;que até
            então guardávamos em sigilo e liberá-las para você em forma de documentos organizados, para que você possa
            treinar o seu time de maneira eficiente, otimizar processos repetitivos, automatizar suas operações e
            aumentar seu faturamento de forma inteligente.
          </p>
        </div>
      </div>
    </section>
  );
}
