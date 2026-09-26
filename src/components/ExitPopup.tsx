/* eslint-disable @next/next/no-img-element */
import { image } from "@/lib/site";
import CtaButton from "./CtaButton";
import IconList, { LIST_DIVIDER } from "./IconList";
import { CheckIcon } from "./icons";

const BONUSES = [
  "Bônus 1 - Prompt Avançado de ChatGPT (Pessoas)",
  <>Bônus&nbsp;2&nbsp;-&nbsp;Prompt Avançado de ChatGPT (Processos)</>,
  <>Bônus&nbsp;3&nbsp;- Prompt Avançado de ChatGPT (Tecnologia)</>,
  <>Bônus&nbsp;4&nbsp;- Prompt Avançado de ChatGPT (Escala)</>,
];

/** Conteúdo do popup de saída ("Você tem certeza que vai perder R$ 450,00 de desconto?"). */
export default function ExitPopup() {
  return (
    <div className="relative flex w-full min-w-0 flex-col gap-5 rounded-[10px] p-[50px] max-laptop:gap-0 max-mobile:flex-wrap max-mobile:p-[30px]">
      <div className="relative w-[60%] max-w-full min-w-0 self-center text-center max-mobile:w-full">
        <h2 className="font-titillium text-[38px] leading-none font-normal text-white max-laptop:text-[30px] max-mobile:text-[21px]">
          Você tem certeza que vai perder R$ 450,00 de desconto? 👀
        </h2>
      </div>
      <div className="relative max-w-full min-w-0 text-center">
        <img
          src={image("Group-1171275329-1024x304.png")}
          srcSet={`${image("Group-1171275329-1024x304.png")} 1024w, ${image("Group-1171275329-300x89.png")} 300w, ${image("Group-1171275329-768x228.png")} 768w, ${image("Group-1171275329.png")} 1059w`}
          sizes="(max-width: 800px) 100vw, 800px"
          width={800}
          height={238}
          alt=""
          className="max-laptop:max-w-[655px]"
        />
      </div>
      <div className="relative max-w-full min-w-0 text-center font-titillium text-[18px] font-bold text-white max-laptop:w-[90%] max-laptop:self-center max-laptop:text-[15px]">
        <p>
          Por um investimento&nbsp;muito pequeno, você vai poder acessar documentos com um compilado de informações
          valiosas que vão te ajudar a adaptar o seu negócio para o futuro e fazê-lo decolar nos próximos meses. Além
          dos bônus, é claro:
        </p>
      </div>
      <IconList
        className="w-[60%] self-center max-mobile:w-[200%]"
        itemClassName={`not-first:mt-[7.5px] not-last:pb-[7.5px] ${LIST_DIVIDER}`}
        textClassName="font-poppins text-[13px] font-normal max-mobile:text-[15px]"
        items={BONUSES.map((text) => ({
          icon: <CheckIcon className="me-[3.5px] h-[14px] w-[14px] fill-orange transition-[fill] duration-300" />,
          text,
        }))}
      />
      <CtaButton
        className="text-center"
        spacingClassName="max-laptop:mt-[10px] max-laptop:mb-2"
        buttonClassName="shadow-[0_0_13px_-4px_rgba(115,217,127,0.51)] max-mobile:px-[15px] max-mobile:py-[10px] max-mobile:text-[13px]"
      >
        SIM, QUERO APROVEITAR
      </CtaButton>
      <div className="relative max-w-full min-w-0 text-center font-titillium text-[13px] font-normal text-white">
        <p>Não, prefiro deixar passar a oportunidade e continuar com os mesmos resultados…</p>
      </div>
    </div>
  );
}
