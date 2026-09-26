/* eslint-disable @next/next/no-img-element */
import { bg, image } from "@/lib/site";
import CtaButton from "./CtaButton";
import IconList from "./IconList";
import { CheckCircleIcon, TimesIcon } from "./icons";

const BEFORE = [
  "Custos operacionais elevados",
  "Tempo escasso para investir em novas ferramentas",
  "Equipe desmotivada e desengajada",
  "Time bloqueado com atividades repetitivas e maçantes",
];

const AFTER = [
  "Faturamento aumentando mês após mês",
  "Custos de operação reduzidos",
  "Tarefas automatizadas e otimizadas",
  "Mais tempo para focar em estratégias de crescimento",
  <>Time satisfeito, criativo e engajado no propósito do seu negócio&nbsp;</>,
];

const cardTextClass = "relative max-w-full min-w-0 text-center font-inter text-[14px] font-normal text-white";

/** "Outras soluções" × "Genos": antes e depois de ter acesso aos documentos. */
export default function BeforeAfter() {
  return (
    <section
      className="relative flex min-h-[750px] w-full min-w-0 flex-col bg-black bg-cover bg-bottom bg-no-repeat before:absolute before:top-0 before:left-0 before:block before:h-full before:w-full before:bg-[linear-gradient(180deg,#000000_0%,#00000000_21%)]"
      style={bg("4.webp")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-col justify-center gap-[50px] max-mobile:flex-wrap max-mobile:py-[30px]">
        <div className="relative w-[83%] max-w-full min-w-0 self-center text-center max-mobile:w-[320px]">
          <h2 className="font-titillium text-[28px] leading-[1.2em] font-normal text-white max-mobile:text-[20px]">
            Você terá acesso a um conhecimento valioso capaz de{" "}
            <b>adaptar a sua empresa ao atual cenário acelerado que estamos presenciando</b> e liderar o seu mercado.
          </h2>
        </div>

        <div className="relative flex w-full min-w-0 flex-row gap-5 max-mobile:w-[320px] max-mobile:flex-wrap max-mobile:self-center">
          {/* Antes */}
          <div className="relative flex min-h-[500px] w-full min-w-0 flex-col justify-center gap-[6px] bg-[linear-gradient(180deg,#FF4D4D_0%,#23232300_100%)] max-mobile:min-h-[326px] max-mobile:flex-wrap max-mobile:px-[10px] max-mobile:pt-[30px]">
            <div className="relative w-[83%] max-w-full min-w-0 self-center text-center">
              <h4 className="font-montserrat text-[24px] leading-none font-bold text-white">OUTRAS SOLUÇÕES</h4>
            </div>
            <div className={cardTextClass}>
              <div className="-mb-3">
                <p>Antes de&nbsp;ter acesso aos nossos documentos</p>
              </div>
            </div>
            <div className="relative w-full max-w-full min-w-0">
              <div className="flex py-[15px] text-center">
                <span className="mx-auto flex w-[65%] border-t border-solid border-black" />
              </div>
            </div>
            <IconList
              className="w-[74%] self-center max-mobile:w-[94%]"
              itemClassName="not-first:mt-[5px] not-last:pb-[5px]"
              iconClassName="text-center"
              textClassName="font-poppins text-[18px] font-normal max-mobile:text-[15px]"
              items={BEFORE.map((text) => ({
                icon: <TimesIcon className="mx-[2.625px] h-[21px] w-[21px] fill-white transition-[fill] duration-300" />,
                text,
              }))}
            />
          </div>

          {/* Depois */}
          <div className="relative flex min-h-[500px] w-full min-w-0 flex-col justify-center gap-[6px] bg-[linear-gradient(180deg,#232323_0%,#23232370_100%)] max-mobile:flex-wrap max-mobile:p-[30px_20px]">
            <div className="relative max-w-full min-w-0 text-center">
              <img src={image("Ativo-5gn-1.png")} width={78} height={71} alt="" loading="lazy" decoding="async" />
            </div>
            <div className={cardTextClass}>
              <div className="-mb-3">
                <p>Depois de ter acesso aos nossos documentos</p>
              </div>
            </div>
            <div className="relative w-full max-w-full min-w-0">
              <div className="flex py-[15px] text-center">
                <span className="mx-auto flex w-[65%] border-t border-solid border-[#494949]" />
              </div>
            </div>
            <IconList
              className="w-[74%] self-center max-mobile:w-full"
              itemClassName="not-first:mt-[10px] not-last:pb-[10px] max-mobile:not-first:mt-[6.5px] max-mobile:not-last:pb-[6.5px]"
              iconClassName="text-center"
              textClassName="font-poppins text-[18px] font-normal max-mobile:text-[14px]"
              items={AFTER.map((text) => ({
                icon: (
                  <CheckCircleIcon className="mx-[2.625px] h-[21px] w-[21px] fill-orange transition-[fill] duration-300" />
                ),
                text,
              }))}
            />
          </div>
        </div>

        <CtaButton
          className="self-center text-left"
          buttonClassName="max-mobile:w-full max-mobile:px-[30px] max-mobile:text-[13px]"
        >
          QUERO TER ACESSO AOS DOCUMENTOS
        </CtaButton>
      </div>
    </section>
  );
}
