/** Faixa laranja do topo. */
export default function TopBar() {
  return (
    <div className="relative flex w-full min-w-0 flex-col bg-orange">
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-col gap-5 pt-[11px] max-mobile:flex-wrap">
        <div className="relative max-w-full min-w-0 text-center font-titillium text-[18px] font-normal text-white max-mobile:text-[12px]">
          <p>
            Para empresários que desejam ter um time de elite, automatizar processos, aumentar faturamento e preparar
            sua empresa para o futuro.
          </p>
        </div>
      </div>
    </div>
  );
}
