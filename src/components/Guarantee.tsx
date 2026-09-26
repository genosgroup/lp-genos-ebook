/* eslint-disable @next/next/no-img-element */
import { bg, image } from "@/lib/site";
import CtaButton from "./CtaButton";

/** Garantia incondicional de 7 dias. */
export default function Guarantee() {
  return (
    <section
      className="relative flex min-h-[547px] w-full min-w-0 flex-col bg-night bg-cover bg-center bg-no-repeat"
      style={bg("7dias.png")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-row items-center justify-center gap-5 py-[30px] max-mobile:flex-wrap max-mobile:gap-[25px]">
        <div className="relative flex w-[26%] min-w-0 flex-col gap-5 max-mobile:w-[320px] max-mobile:flex-wrap">
          <div className="relative max-w-full min-w-0 text-center">
            <img
              src={image("Group-1171275172.png")}
              srcSet={`${image("Group-1171275172.png")} 311w, ${image("Group-1171275172-300x300.png")} 300w, ${image("Group-1171275172-150x150.png")} 150w`}
              sizes="(max-width: 311px) 100vw, 311px"
              width={311}
              height={311}
              alt=""
              loading="lazy"
              decoding="async"
              className="max-mobile:max-w-[69%]"
            />
          </div>
        </div>
        <div className="relative flex w-1/2 min-w-0 flex-col justify-center gap-5 max-mobile:w-[320px] max-mobile:flex-wrap">
          <div className="relative w-[375px] max-w-full min-w-0 max-mobile:w-full max-mobile:text-center">
            <h2 className="font-titillium text-[32px] leading-none font-normal text-orange max-mobile:text-[25px]">
              GARANTIA INCONDICIONAL DE 7 DIAS{" "}
            </h2>
          </div>
          <div className="relative w-[93%] max-w-full min-w-0 text-left font-exo text-[14px] leading-[24px] font-light text-white max-mobile:text-center">
            <p>
              RISCO ZERO –&nbsp;DEVOLUÇÃO INTEGRAL
              <br />
              Queremos que adquira esses conhecimentos valiosos com tranquilidade e aplique para o desenvolvimento do seu
              negócio. E, se dentro dos 7 dias você decidir não querer mais o acesso a tudo o que apresentamos aqui,
              devolvemos o seu dinheiro imediatamente. Sem questionamentos!
            </p>
          </div>
          <CtaButton
            className="text-left"
            buttonClassName="max-mobile:w-full max-mobile:px-[30px] max-mobile:text-[13px]"
          >
            QUERO APROVEITAR ANTES QUE ACABE
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
