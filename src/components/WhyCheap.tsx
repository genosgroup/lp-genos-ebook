/** "Por que está tão BARATO?" */
export default function WhyCheap() {
  return (
    <section className="relative flex w-full min-w-0 flex-col bg-night">
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-col gap-5 py-[25px] max-mobile:flex-wrap">
        <div className="relative w-[63%] max-w-full min-w-0 self-center text-center max-mobile:w-[320px]">
          <h2 className="font-titillium text-[30px] leading-none font-normal text-white">Por que está tão BARATO?</h2>
        </div>
        <div className="relative w-[65%] max-w-full min-w-0 self-center text-left font-titillium text-[18px] leading-[24px] font-light text-white max-mobile:w-[320px] max-mobile:text-center">
          <p>
            Nosso propósito é fazer com que você experimente resultados concretos e, no futuro, venha a conhecer nossos
            serviços com mais proximidade. Essa oferta serve para você ter acesso aos conhecimentos que tem ajudado a
            nós e a nossos clientes nos últimos meses, e depois possa aplicar em programas mais avançados e ter
            resultados ainda maiores.
            <br />
            <br />
            Nós vamos te dar 7 dias de garantia e, se não gostar, devolvemos seu dinheiro!
          </p>
        </div>
      </div>
    </section>
  );
}
