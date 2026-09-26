import { bg } from "@/lib/site";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[693px] w-full min-w-0 flex-col bg-cover bg-top bg-no-repeat wide:bg-contain max-mobile:min-h-[100px] max-mobile:bg-[length:300vw_auto] max-mobile:bg-[position:-156vw_-5vh] max-mobile:px-[4vw]"
      style={bg("header-book-01.jpg")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1328px] grow flex-row gap-0 py-[50px] max-mobile:flex-wrap max-mobile:pt-[110vw] max-mobile:pb-[10vw]">
        <div className="relative flex w-[467px] min-w-0 flex-col justify-center gap-5 max-mobile:w-full max-mobile:flex-wrap max-mobile:items-center">
          <div className="relative max-w-full min-w-0 max-mobile:text-center">
            <h2 className="font-titillium text-[32px] leading-[1.2em] font-normal text-white max-mobile:text-[21px]">
              Acelere o crescimento do seu negócio aplicando o método responsável por gerar mais de R$25 mi em receita
              para nossos clientes investindo 4% disso.&nbsp;
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
