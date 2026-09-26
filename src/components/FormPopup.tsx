import LeadForm from "./LeadForm";

/** Conteúdo do popup do formulário ("Preencha os dados abaixo…"). */
export default function FormPopup() {
  return (
    <div className="relative flex w-full min-w-0 flex-col px-5">
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-col gap-5 py-[30px] max-mobile:flex-wrap">
        <div className="relative max-w-full min-w-0 text-center">
          <h2 className="font-titillium text-[30px] leading-none font-normal text-white max-mobile:text-[21px]">
            Preencha os dados abaixo <br />
            para ser direcionado para o checkout
          </h2>
        </div>
        <div className="relative max-w-full min-w-0">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
