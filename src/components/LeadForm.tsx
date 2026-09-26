"use client";

import { useState, type SubmitEvent } from "react";
import { FORM_ID, FORM_MESSAGES, FORM_NAME, LEAD_FIELDS, type LeadResponse } from "@/lib/lead-form";
import { BASE_PATH } from "@/lib/site";
import { SpinnerIcon } from "./icons";

type Message = { type: "success" | "danger"; text: string };

const inputClass =
  "min-h-[47px] w-full max-w-full grow rounded-[4px] border border-solid border-[#313131] bg-[#202020D9] px-4 py-1.5 align-middle font-titillium text-[18px] leading-[1.4] font-normal text-[#808080] transition-all duration-300 placeholder:text-inherit placeholder:opacity-60 focus:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] focus:outline-0";

/** Valores iniciais dos campos vindos da URL (UTMs e demais parâmetros configurados no Elementor) */
function urlValues() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(LEAD_FIELDS.map((f) => [f.id, params.get(f.urlParam) ?? ""]));
}

export default function LeadForm() {
  const [initial] = useState(urlValues);
  const [waiting, setWaiting] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (waiting) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("referrer", window.location.toString());

    setWaiting(true);
    setMessage(null);
    setFieldErrors({});

    try {
      const response = await fetch(`${BASE_PATH}/api/lead/`, { method: "POST", body: data });
      const result = (await response.json()) as LeadResponse;

      if (result.success) {
        form.reset();
        setMessage({ type: "success", text: result.data.message });
        // Ação "Redirecionar" do Elementor: leva ao checkout
        if (result.data.redirect_url) window.location.href = result.data.redirect_url;
      } else {
        setFieldErrors(result.data.errors ?? {});
        setMessage({ type: "danger", text: result.data.message });
      }
    } catch {
      setMessage({ type: "danger", text: FORM_MESSAGES.error });
    } finally {
      setWaiting(false);
    }
  }

  return (
    <form
      method="post"
      name={FORM_NAME}
      onSubmit={handleSubmit}
      style={{ opacity: waiting ? 0.45 : 1, transition: `opacity ${waiting ? 500 : 100}ms` }}
    >
      <input type="hidden" name="form_id" value={FORM_ID} />
      <div className="-mx-[5px] -mb-[7px] flex flex-wrap">
        {LEAD_FIELDS.map((field) => {
          const name = `form_fields[${field.id}]`;
          const id = `form-field-${field.id}`;
          const error = fieldErrors[field.id];

          if (field.type === "hidden") {
            return (
              <div key={field.id} className="hidden">
                <input size={1} type="hidden" name={name} id={id} defaultValue={initial[field.id]} />
              </div>
            );
          }

          return (
            <div key={field.id} className="relative mb-[7px] flex min-h-px w-full flex-wrap items-center px-[5px]">
              <label htmlFor={id} className="sr-only">
                {field.label}
              </label>
              <input
                size={1}
                type={field.type}
                name={name}
                id={id}
                placeholder={field.placeholder}
                defaultValue={initial[field.id]}
                required={field.required}
                aria-required={field.required || undefined}
                aria-invalid={error ? true : undefined}
                title={field.type === "tel" ? "Apenas números e caracteres de telefone (#, -, *, etc.) são aceitos." : undefined}
                className={inputClass}
              />
              {error && (
                <span role="alert" className="form-message form-message-danger">
                  {error}
                </span>
              )}
            </div>
          );
        })}

        <div className="relative mb-[7px] flex min-h-px w-full flex-wrap items-end px-[5px]">
          <button
            type="submit"
            disabled={waiting}
            className="inline-block min-h-[47px] basis-full rounded-[4px] border-0 bg-accent px-[30px] py-[15px] text-center font-titillium text-[18px] leading-none font-bold whitespace-nowrap text-white transition-all duration-300 select-none enabled:cursor-pointer max-mobile:text-[14px]"
          >
            <span className="flex flex-row items-center justify-center gap-[5px]">
              {waiting && (
                <span className="inline-block whitespace-normal">
                  <SpinnerIcon className="spin inline-block h-[1em] w-[1em] fill-current align-[-0.143em]" />
                  &nbsp;
                </span>
              )}
              <span className="inline-block whitespace-normal">QUERO TER ACESSO AO MÉTODO</span>
            </span>
          </button>
        </div>
      </div>

      {message && (
        <div role="alert" className={`form-message form-message-${message.type}`}>
          {message.text}
        </div>
      )}
    </form>
  );
}
