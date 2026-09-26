/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { image } from "@/lib/site";
import IconList, { LIST_DIVIDER } from "./IconList";
import { CheckIcon } from "./icons";

type Product = {
  /** Imagem da caixa: arquivo, largura, altura e variante menor */
  cover: { file: string; width: number; height: number; small: string; smallWidth: number };
  title: ReactNode;
  description: ReactNode;
  price: string;
  /** Imagem à direita no desktop (no mobile a imagem sempre vem antes) */
  reverse?: boolean;
  /** Título menor no mobile (25px) */
  smallMobileTitle?: boolean;
  /** Descrição com 100% de largura (as demais têm 93%) */
  wideDescription?: boolean;
  /** Ajustes do bloco da imagem */
  coverClassName?: string;
  coverWidgetClassName?: string;
};

const PRODUCTS: Product[] = [
  {
    cover: { file: "poder-1.webp", width: 326, height: 385, small: "poder-1-254x300.webp", smallWidth: 254 },
    title: "Tenha uma equipe produtiva e realmente organizada",
    description:
      "O documento completo que irá te ajudar a criar um time de elite, muito mais engajado e alinhado ao propósito da sua empresa.",
    price: "De R$127,00",
    coverClassName: "max-mobile:items-center max-mobile:justify-center",
  },
  {
    cover: {
      file: "automacao-1-e1723040528662.webp",
      width: 273,
      height: 402,
      small: "automacao-1-e1723040528662-204x300.webp",
      smallWidth: 204,
    },
    title: "Comece a diminuir tarefas repetitivas na sua empresa",
    description: (
      <>
        O&nbsp;documento que vai te ensinar o que são as automações, como e porque você deveria começar a automatizar a
        sua empresa o mais rápido possível.
      </>
    ),
    price: "De R$ 127,00",
    reverse: true,
    smallMobileTitle: true,
    coverClassName: "flex-row items-center justify-center",
    coverWidgetClassName: "self-center",
  },
  {
    cover: { file: "manual-1.webp", width: 285, height: 389, small: "manual-1-220x300.webp", smallWidth: 220 },
    title: "Melhore sua gestão e acelere seu crescimento esse ano",
    description:
      "O manual que vai te ensinar a escalar a sua empresa utilizando a tecnologia das automações e as melhores ferramentas para o seu negócio. Melhore seus processos, otimize tempo, custos e veja o seu faturamento aumentar. Evite perder tempo procurando a ferramenta ideal para o seu negócio.",
    price: "De R$ 127,00",
    smallMobileTitle: true,
    wideDescription: true,
  },
];

const BONUSES: Product[] = [
  {
    cover: { file: "pessoas-1.webp", width: 276, height: 389, small: "pessoas-1-213x300.webp", smallWidth: 213 },
    title: "Bônus 1 - Prompt Avançado de ChatGPT (Pessoas)",
    description: (
      <>
        Com esse prompt, você poderá extrair do ChatGPT estratégias eficazes para gestão de talentos e desenvolvimento
        de equipes, ajudando a empresa a maximizar o potencial dos seus colaboradores e criar um ambiente de trabalho
        mais produtivo.&nbsp;
      </>
    ),
    price: "De R$ 29,00",
    wideDescription: true,
  },
  {
    cover: { file: "processos-1.webp", width: 277, height: 411, small: "processos-1-202x300.webp", smallWidth: 202 },
    title: <>Bônus&nbsp;2&nbsp;-&nbsp;Prompt Avançado de ChatGPT (Processos)</>,
    description: (
      <>
        Com esse prompt, você poderá extrair do ChatGPT estratégias eficazes para gestão de talentos e desenvolvimento
        de equipes, ajudando a empresa a maximizar o potencial dos seus colaboradores e criar um ambiente de trabalho
        mais produtivo.&nbsp;
      </>
    ),
    price: "De R$ 29,00",
    reverse: true,
    wideDescription: true,
  },
  {
    cover: { file: "tecnologia-1.webp", width: 282, height: 396, small: "tecnologia-1-214x300.webp", smallWidth: 214 },
    title: <>Bônus&nbsp;3&nbsp;- Prompt Avançado de ChatGPT (Tecnologia)</>,
    description:
      "Com esse prompt, você consegue ter acesso à soluções tecnológicas avançadas para poder aplicar, auxiliando a empresa a melhorar sua eficiência e escalar suas operações de forma sustentável.",
    price: "De R$ 29,00",
    smallMobileTitle: true,
    wideDescription: true,
  },
  {
    cover: { file: "escala-1.webp", width: 274, height: 414, small: "escala-1-199x300.webp", smallWidth: 199 },
    title: <>Bônus&nbsp;4&nbsp;- Prompt Avançado de ChatGPT (Escala)</>,
    description: (
      <>
        Com esse prompt, o ChatGPT poderá desenvolver estratégias de crescimento e expansão, ajudando a sua empresa a
        aumentar a base de clientes e maximizar sua participação no mercado.&nbsp;
      </>
    ),
    price: "De R$ 29,00",
    reverse: true,
    smallMobileTitle: true,
    wideDescription: true,
  },
];

const SUMMARY = [
  "O Poder das Pessoas e Processos Empresariais - R$ 127,00",
  <>Automação Empresarial: Os Caminhos para&nbsp; Liderar o Mercado Automatizando a sua Empresa - R$ 127,00</>,
  "O Manual Completo de Como Automatizar a sua Empresa Através das Automações - R$ 127,00",
  "Bônus 1: Prompt Avançado de ChatGPT (Pessoas) - R$ 29,00",
  "Bônus 2: Prompt Avançado de ChatGPT (Processos) - R$ 29,00",
  "Bônus 3: Prompt Avançado de ChatGPT (Tecnologia) - R$ 29,00",
  "Bônus 1: Prompt Avançado de ChatGPT (Escala) - R$ 29,00",
];

function ProductRow({ product }: { product: Product }) {
  const { cover } = product;

  return (
    <div
      className={`relative flex w-[60%] min-w-0 justify-center gap-0 max-mobile:w-[320px] max-mobile:flex-wrap ${
        product.reverse ? "flex-row-reverse max-mobile:flex-col" : "flex-row"
      }`}
    >
      {/* Capa */}
      <div className={`relative flex w-full min-w-0 flex-col gap-5 max-mobile:flex-wrap ${product.coverClassName ?? ""}`}>
        <div className={`relative max-w-full min-w-0 text-center ${product.coverWidgetClassName ?? ""}`}>
          <img
            src={image(cover.file)}
            srcSet={`${image(cover.file)} ${cover.width}w, ${image(cover.small)} ${cover.smallWidth}w`}
            sizes={`(max-width: ${cover.width}px) 100vw, ${cover.width}px`}
            width={cover.width}
            height={cover.height}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="relative flex w-full min-w-0 flex-col justify-center gap-[5px] max-mobile:flex-wrap max-mobile:items-center">
        <div className="relative w-full max-w-full min-w-0 self-center text-left max-mobile:text-center">
          <h2
            className={`font-titillium text-[28px] leading-none font-normal text-white ${
              product.smallMobileTitle ? "max-mobile:text-[25px]" : ""
            }`}
          >
            {product.title}
          </h2>
        </div>
        <div
          className={`relative max-w-full min-w-0 font-titillium text-[17px] font-normal text-white max-mobile:text-center ${
            product.wideDescription ? "w-full" : "w-[93%]"
          }`}
        >
          <div className="mt-[10px]">
            <p>{product.description}</p>
          </div>
        </div>
        <div className="relative w-[93%] max-w-full min-w-0 font-titillium text-[24px] font-normal text-price line-through [font-style:oblique] max-mobile:text-center">
          <div className="-mb-4 p-0">
            <p>{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** "Veja o que você vai receber": documentos, bônus e resumo dos valores. */
export default function Deliverables() {
  return (
    <section className="relative flex w-full min-w-0 flex-col bg-night">
      <div className="mx-auto flex h-full w-full max-w-[1140px] grow flex-col items-center justify-center gap-5 py-[50px] max-mobile:flex-wrap max-mobile:py-[30px]">
        <div className="relative w-[83%] max-w-full min-w-0 self-center text-center max-mobile:w-[320px]">
          <h2 className="font-titillium text-[28px] leading-none font-normal text-white underline">
            Veja o que você vai receber
          </h2>
        </div>

        {PRODUCTS.map((product) => (
          <ProductRow key={product.cover.file} product={product} />
        ))}

        <div className="relative w-1/2 max-w-full min-w-0 self-center text-center max-mobile:w-[320px]">
          <div className="mt-10 mb-5">
            <h2 className="font-titillium text-[28px] leading-none font-normal text-white max-mobile:text-[20px]">
              Esses 3 documentos já fariam toda a diferença na sua empresa. Mas ainda tem mais...
            </h2>
          </div>
        </div>

        {BONUSES.map((product) => (
          <ProductRow key={product.cover.file} product={product} />
        ))}

        <IconList
          className="w-[60%] self-center max-mobile:w-[320px]"
          itemClassName={`not-first:mt-[7.5px] not-last:pb-[7.5px] ${LIST_DIVIDER}`}
          textClassName="font-poppins text-[18px] font-normal max-mobile:text-[15px]"
          items={SUMMARY.map((text) => ({
            icon: <CheckIcon className="me-[3.5px] h-[14px] w-[14px] fill-orange transition-[fill] duration-300" />,
            text,
          }))}
        />
      </div>
    </section>
  );
}
