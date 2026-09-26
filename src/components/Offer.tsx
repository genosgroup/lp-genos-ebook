/* eslint-disable @next/next/no-img-element */
import { bg, image } from "@/lib/site";
import CtaButton from "./CtaButton";

function DottedDivider() {
  return (
    <div className="relative w-full max-w-full min-w-0">
      <div className="flex py-1 text-center">
        <span className="mx-auto flex w-[42%] border-t-[2.3px] border-dotted border-white" />
      </div>
    </div>
  );
}

/** Card de preço "Método PPTE". */
export default function Offer() {
  return (
    <section
      className="relative flex min-h-[564.58px] w-full min-w-0 flex-col bg-night bg-cover bg-top bg-no-repeat before:absolute before:top-0 before:left-0 before:block before:h-full before:w-full before:bg-[linear-gradient(180deg,#00080B_0%,#00000000_18%)]"
      style={bg("2-1.webp")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-col items-center justify-center gap-5 py-20 max-mobile:flex-wrap max-mobile:py-5">
        <div
          className="relative flex min-h-[700px] w-[600px] min-w-0 flex-col items-center gap-[14px] bg-contain bg-center bg-no-repeat pt-[90px] max-mobile:min-h-[430px] max-mobile:w-[320px] max-mobile:flex-wrap max-mobile:gap-[5px] max-mobile:bg-top max-mobile:pt-10"
          style={bg("Group-117127529422.webp")}
        >
          <div className="relative max-w-full min-w-0 text-center">
            <h2 className="font-exo text-[40px] leading-none font-semibold text-white max-mobile:text-[30px]">Método PPTE</h2>
          </div>
          <div className="relative max-w-full min-w-0 text-center">
            <h4 className="font-exo text-[24px] leading-none font-normal text-orange max-mobile:text-[17px]">
              450 reais de desconto
            </h4>
          </div>
          <div className="relative max-w-full min-w-0 text-center">
            <h4 className="font-exo text-[32px] leading-none font-normal text-white max-mobile:text-[21px]">
              <s>DE R$497,00</s>
              <br />
              POR R$47,00
            </h4>
          </div>
          <div className="relative w-[65%] max-w-full min-w-0 self-center text-center font-titillium text-[18px] leading-[24px] font-light text-white max-mobile:text-[14px]">
            <div className="-mb-[11px]">
              <p>por tempo ilimitado</p>
            </div>
          </div>
          <DottedDivider />
          <div className="relative flex w-full min-w-0 flex-row items-center justify-center gap-[5px] max-mobile:flex-wrap">
            <div className="relative max-w-full min-w-0 text-right">
              <h4 className="font-exo text-[18px] leading-none font-bold text-white">
                POR
                <br />
                4X DE:
              </h4>
            </div>
            <div className="relative max-w-full min-w-0 text-center">
              <h4 className="font-exo text-[64px] leading-none font-black text-orange max-mobile:text-[50px]">R$12,62</h4>
            </div>
          </div>
          <DottedDivider />
          <div className="relative w-[65%] max-w-full min-w-0 self-center text-center font-titillium text-[18px] leading-[24px] font-medium text-white max-mobile:text-[13px]">
            <div className="-mb-[11px]">
              <p>
                <strong>OU R$47,00 À VISTA</strong>
              </p>
            </div>
          </div>
          <div className="relative mt-20 flex w-[500px] min-w-0 flex-col gap-5 max-mobile:mt-[27px] max-mobile:w-full max-mobile:flex-wrap max-mobile:gap-0 max-mobile:px-[10px]">
            <CtaButton
              className="text-center"
              buttonClassName="shadow-[0_0_13px_-4px_rgba(115,217,127,0.51)] max-mobile:px-[15px] max-mobile:py-[10px] max-mobile:text-[14px]"
            >
              QUERO APROVEITAR ANTES QUE ACABE
            </CtaButton>
            <div className="relative max-w-full min-w-0 text-center">
              <img
                src={image("Hotmart.svg")}
                width={316}
                height={59}
                alt=""
                loading="lazy"
                decoding="async"
                className="max-mobile:max-w-[71%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
