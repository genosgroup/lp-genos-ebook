import { bg } from "@/lib/site";
import CtaButton from "./CtaButton";
import IconList from "./IconList";
import { CheckIcon } from "./icons";

const REASONS = [
  "Sente não ter encontrado as ferramentas perfeitas para o seu negócio;",
  "Deseja automatizar os processos da sua empresa e se preparar para as próximas evoluções tecnológicas que estão por vir;",
  "Quer ver seu time mais engajado e tranquilo para focar em tarefas estratégicas enquanto as tarefas repetitivas são feitas automaticamente por IA;",
  "Busca otimizar seus processos e evitar erros sem perder a qualidade dos seus serviços.",
];

const checkIcon = <CheckIcon className="me-[3.5px] h-[14px] w-[14px] fill-orange transition-[fill] duration-300" />;

/** "Ainda está em dúvida se vale a pena?" */
export default function ForYou() {
  return (
    <section
      className="relative flex min-h-[996px] w-full min-w-0 flex-col bg-cover bg-center bg-no-repeat max-mobile:bg-[length:200vw_auto] max-mobile:bg-[position:-90vw_-8vh]"
      style={bg("maorobo.webp")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-row items-center gap-0 max-mobile:flex-wrap max-mobile:justify-center max-mobile:pt-[75vw]">
        <div className="relative flex w-1/2 min-w-0 flex-col items-start gap-5 max-mobile:w-[320px] max-mobile:flex-wrap max-mobile:items-center max-mobile:justify-center">
          <div className="relative w-[78%] max-w-full min-w-0 self-start text-left max-mobile:w-[95%] max-mobile:self-center max-mobile:text-center">
            <h2 className="font-titillium text-[35px] leading-[47px] font-normal text-white max-mobile:text-[25px] max-mobile:leading-[1em]">
              Ainda está em dúvida se vale a pena? Essa oferta foi feita para você que:&nbsp;
            </h2>
          </div>
          <IconList
            className="w-[87%] self-start max-mobile:self-center"
            itemClassName="not-first:mt-[9px] not-last:pb-[9px] max-mobile:not-first:mt-[7px] max-mobile:not-last:pb-[7px]"
            textClassName="font-poppins text-[18px] font-light max-mobile:text-[14px]"
            items={[
              ...REASONS.map((text) => ({ icon: checkIcon, text })),
              {
                text: (
                  <i>*Essa oferta é por tempo limitado e a qualquer momento esses produtos podem voltar ao seu preço normal</i>
                ),
              },
            ]}
          />
          <CtaButton className="text-left">QUERO APROVEITAR ANTES QUE ACABE</CtaButton>
        </div>
        <div className="relative flex w-1/2 min-w-0 flex-col gap-5 max-mobile:w-full max-mobile:flex-wrap" />
      </div>
    </section>
  );
}
