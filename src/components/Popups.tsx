"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useEffectEvent,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import ExitPopup from "./ExitPopup";
import FormPopup from "./FormPopup";
import { CloseIcon } from "./icons";

type PopupId = "form" | "exit";

type PopupContextValue = { openForm: () => void };

const PopupContext = createContext<PopupContextValue>({ openForm: () => {} });

export function usePopups() {
  return useContext(PopupContext);
}

/**
 * Controla os dois popups da página, como o Elementor Pro fazia:
 * - "form": formulário que leva ao checkout, aberto pelos botões verdes;
 * - "exit": popup de saída, aberto uma única vez quando o mouse sai da janela pelo topo.
 * Os dois podem ficar abertos ao mesmo tempo; fica por cima o que foi aberto pela primeira vez por último
 * (o Elementor cria cada popup uma vez e o empilha no fim da página).
 */
export default function PopupProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<Record<PopupId, boolean>>({ form: false, exit: false });
  const [stack, setStack] = useState<PopupId[]>([]);
  // Cada abertura recria o conteúdo do popup (o formulário volta limpo)
  const [openCount, setOpenCount] = useState<Record<PopupId, number>>({ form: 0, exit: 0 });

  const show = useCallback((id: PopupId) => {
    setOpen((current) => ({ ...current, [id]: true }));
    setOpenCount((current) => ({ ...current, [id]: current[id] + 1 }));
    setStack((current) => (current.includes(id) ? current : [...current, id]));
  }, []);

  const hide = useCallback((id: PopupId) => setOpen((current) => ({ ...current, [id]: false })), []);

  // Gatilho de intenção de saída: mouse deixa a janela pela borda de cima (dispara uma vez só)
  useEffect(() => {
    const detectExitIntent = (event: MouseEvent) => {
      if (event.clientY > 0) return;
      window.removeEventListener("mouseout", detectExitIntent);
      show("exit");
    };
    window.addEventListener("mouseout", detectExitIntent);
    return () => window.removeEventListener("mouseout", detectExitIntent);
  }, [show]);

  const value = useMemo(() => ({ openForm: () => show("form") }), [show]);

  return (
    <PopupContext.Provider value={value}>
      {children}
      {stack.map((id) =>
        open[id] ? (
          id === "form" ? (
            <PopupModal key={`form-${openCount.form}`} elementorId={3600} onClose={() => hide("form")} variant="form">
              <FormPopup />
            </PopupModal>
          ) : (
            <PopupModal key={`exit-${openCount.exit}`} elementorId={3605} onClose={() => hide("exit")} variant="exit">
              <ExitPopup />
            </PopupModal>
          )
        ) : null,
      )}
    </PopupContext.Provider>
  );
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([type="hidden"]):not([disabled]), [tabindex]:not([tabindex="-1"])';

const VARIANTS = {
  form: {
    overlay: "bg-black/80",
    content: "bg-night",
    message: "w-[640px]",
  },
  exit: {
    overlay: "bg-[#00000026] backdrop-blur-[8px]",
    content: "rounded-[10px] border border-solid border-orange bg-[#151413C9]",
    message: "w-[1000px]",
  },
};

type ModalProps = {
  elementorId: number;
  variant: keyof typeof VARIANTS;
  onClose: () => void;
  children: ReactNode;
};

/** Janela do popup (equivalente ao "lightbox" da biblioteca Dialog do Elementor). */
function PopupModal({ elementorId, variant, onClose, children }: ModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLAnchorElement>(null);
  const styles = VARIANTS[variant];
  const close = useEffectEvent(onClose);

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    // Mesmos eventos que o Elementor disparava (podem ser usados por tags do GTM)
    window.dispatchEvent(new CustomEvent("elementor/popup/show", { detail: { id: elementorId } }));

    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    // Mantém o foco do Tab dentro do popup
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !contentRef.current) return;
      const focusable = [...contentRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    // Clique fora do conteúdo fecha o popup (registrado depois do clique que o abriu)
    const onOutsideClick = (event: MouseEvent) => {
      if (contentRef.current?.contains(event.target as Node)) return;
      close();
    };
    const timer = setTimeout(() => document.addEventListener("click", onOutsideClick));

    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", onOutsideClick);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("keydown", onKeyDown);
      window.dispatchEvent(new CustomEvent("elementor/popup/hide", { detail: { id: elementorId } }));
      trigger?.focus?.();
    };
  }, [elementorId]);

  return (
    <div
      id={`elementor-popup-modal-${elementorId}`}
      role="dialog"
      aria-modal="true"
      tabIndex={0}
      className={`fixed bottom-0 left-0 z-[9999] flex h-full w-full items-center justify-center ${styles.overlay}`}
    >
      <div
        ref={contentRef}
        className={`absolute max-h-full max-w-full shadow-[2px_8px_23px_3px_rgba(0,0,0,0.2)] ${styles.content}`}
      >
        <a
          ref={closeRef}
          href="#"
          role="button"
          tabIndex={0}
          aria-label="Close"
          className="absolute end-5 top-5 z-[9999] flex cursor-pointer text-[15px] leading-none"
          onClick={(event) => {
            event.preventDefault();
            onClose();
          }}
        >
          <CloseIcon className="h-[1em] w-[1em] fill-[#1f2124]" />
        </a>
        <div className={`box-border flex max-h-screen max-w-[100vw] overflow-auto p-0 leading-normal ${styles.message}`}>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
