"use client";

import type { ReactNode } from "react";
import { OPEN_FORM_HREF } from "@/lib/site";
import { usePopups } from "./Popups";

type Props = {
  children: ReactNode;
  /** Largura/alinhamento do bloco do botão (o bloco é a referência do brilho do hover) */
  className?: string;
  /** Espaçamento externo do botão */
  spacingClassName?: string;
  /** Ajustes do botão (tamanho de fonte, padding, sombra, largura no mobile) */
  buttonClassName?: string;
};

/** Botão verde "QUERO ..." que abre o popup do formulário. */
export default function CtaButton({ children, className = "", spacingClassName = "", buttonClassName = "" }: Props) {
  const { openForm } = usePopups();

  return (
    <div className={`relative max-w-full min-w-0 ${className}`}>
      <div className={spacingClassName}>
        <a
          href={OPEN_FORM_HREF}
          className={`cta-button ${buttonClassName}`}
          onClick={(event) => {
            event.preventDefault();
            openForm();
          }}
        >
          <span>
            <span className="inline-block">{children}</span>
          </span>
        </a>
      </div>
    </div>
  );
}
