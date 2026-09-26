import type { ReactNode } from "react";

export type IconListItem = { icon?: ReactNode; text: ReactNode };

type Props = {
  items: IconListItem[];
  /** Largura/alinhamento do bloco da lista */
  className?: string;
  /** Classes de cada item (espaçamento e divisória entre itens) */
  itemClassName?: string;
  /** Classes do invólucro do ícone (alinhamento, deslocamento) */
  iconClassName?: string;
  /** Tipografia do texto */
  textClassName?: string;
};

/** Lista com ícones (mesma estrutura do widget "Lista de ícones" do Elementor). */
export default function IconList({ items, className = "", itemClassName = "", iconClassName = "", textClassName = "" }: Props) {
  return (
    <div className={`relative max-w-full min-w-0 ${className}`}>
      <ul className="m-0 list-none p-0">
        {items.map((item, i) => (
          <li key={i} className={`relative m-0 flex items-center p-0 ${itemClassName}`}>
            {item.icon && <span className={`relative flex ${iconClassName}`}>{item.icon}</span>}
            <span className={`text-white ${item.icon ? "self-center ps-[5px]" : ""} ${textClassName}`}>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Divisória fina entre itens da lista (1px, na base de cada item menos o último) */
export const LIST_DIVIDER =
  "not-last:after:absolute not-last:after:bottom-0 not-last:after:left-0 not-last:after:w-full not-last:after:border-t not-last:after:border-[#DDDDDD30] not-last:after:content-['']";
