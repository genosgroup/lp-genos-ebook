/* eslint-disable @next/next/no-img-element */
import { image } from "@/lib/site";
import CtaButton from "./CtaButton";

const nameClass = "font-titillium text-[32px] leading-none font-semibold text-orange";
const bioClass =
  "relative w-[93%] max-w-full min-w-0 text-left font-titillium text-[17px] leading-[31px] font-light text-white";

/** Gilvan Brito e Thalita Azeredo. */
export default function Founders() {
  return (
    <>
      <section className="relative flex w-full min-w-0 flex-col bg-night">
        <div className="mx-auto flex h-full w-full max-w-[850px] grow flex-row gap-5 py-[30px] max-mobile:flex-wrap max-mobile:items-center max-mobile:justify-center">
          <div className="relative flex w-1/2 min-w-0 flex-col gap-5 max-mobile:w-[320px] max-mobile:flex-wrap">
            <div className="relative max-w-full min-w-0 text-center">
              <img
                src={image("image.png")}
                srcSet={`${image("image.png")} 484w, ${image("image-243x300.png")} 243w`}
                sizes="(max-width: 484px) 100vw, 484px"
                width={484}
                height={598}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="relative flex w-1/2 min-w-0 flex-col justify-center gap-5 max-mobile:w-[320px] max-mobile:flex-wrap">
            <div className="relative max-w-full min-w-0 max-mobile:self-center max-mobile:text-center">
              <h2 className={nameClass}>Gilvan Brito</h2>
            </div>
            <div
              className={`${bioClass} max-mobile:self-center max-mobile:text-center max-mobile:text-[14px] max-mobile:leading-[1.5em]`}
            >
              <p>
                Com mais de 13 anos dedicados à excelência no campo comercial e uma paixão inabalável pelo
                empreendedorismo e tecnologia, sou Gilvan Brito, fundador e CEO da Genos Group.&nbsp;
                <br />
                <br />
                Minha jornada profissional é destacada pela liderança de uma equipe de mais de 600 pessoas, com a missão
                de transformar visões empreendedoras em realidades tangíveis e sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex w-full min-w-0 flex-col bg-night">
        <div className="mx-auto flex h-full w-full max-w-[850px] grow flex-row-reverse gap-5 pt-[30px] pb-[170px] max-mobile:flex-col max-mobile:flex-wrap max-mobile:pb-[120px]">
          <div className="relative flex w-1/2 min-w-0 flex-col gap-5 max-mobile:w-[320px] max-mobile:flex-wrap max-mobile:self-center">
            <div className="relative max-w-full min-w-0 text-center">
              <img
                src={image("IMG_0135-1.png")}
                srcSet={`${image("IMG_0135-1.png")} 484w, ${image("IMG_0135-1-239x300.png")} 239w`}
                sizes="(max-width: 484px) 100vw, 484px"
                width={484}
                height={608}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="relative flex w-1/2 min-w-0 flex-col justify-center gap-5 max-mobile:w-[320px] max-mobile:flex-wrap max-mobile:self-center">
            <div className="relative max-w-full min-w-0 max-mobile:self-center max-mobile:text-center">
              <h2 className={nameClass}>Thalita Azeredo</h2>
            </div>
            <div
              className={`${bioClass} max-mobile:w-full max-mobile:self-center max-mobile:text-center max-mobile:text-[15px] max-mobile:leading-[1.4em]`}
            >
              <p>Publicitária de formação e alma, sou Thalita Azeredo, Co-Founder da Genos Group.</p>
              <p>
                Atuo há 10 anos no desenvolvimento e crescimento de empresas, com experiência em diversas áreas como:
                branding e comunicação, até me especializar em estratégias de alta performance.
              </p>
              <p>
                Somente em 2023, geramos mais de R$10 milhões em receita para nossos clientes. Transformar sonhos em
                negócios que atingem recordes de faturamento é meu combustível&nbsp;diário.
              </p>
            </div>
            <CtaButton
              className="text-left"
              buttonClassName="max-mobile:w-full max-mobile:px-[30px] max-mobile:text-[13px]"
            >
              QUERO TER ACESSO AO MÉTODO
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
