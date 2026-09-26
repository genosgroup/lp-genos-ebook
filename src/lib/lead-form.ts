/**
 * Definição do formulário do popup ("FORM PV - EBOOK"), idêntica à do
 * Elementor original (mesmos ids, names, rótulos e placeholders).
 * Compartilhada entre o componente do formulário e a rota /api/lead.
 */

export type LeadField = {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "hidden";
  required?: boolean;
  placeholder?: string;
  /**
   * Parâmetro da URL que pré-preenche o campo (tag dinâmica "Parâmetro de
   * requisição" do Elementor). Os nomes estão exatamente como no original.
   */
  urlParam: string;
};

export const FORM_ID = "9d9da83";
export const FORM_NAME = "FORM PV - EBOOK";

export const LEAD_FIELDS: LeadField[] = [
  { id: "nome", label: "Nome", type: "text", placeholder: "Seu nome", urlParam: "[field id:name]" },
  {
    id: "email",
    label: "Email",
    type: "email",
    required: true,
    placeholder: "Seu melhor e-mail",
    urlParam: "[field id:email]",
  },
  { id: "telefone", label: "WhatsApp", type: "tel", placeholder: "Seu Whatsapp", urlParam: "[field id:telefone]" },
  { id: "utm_source", label: "utm_source", type: "hidden", urlParam: "utm_source" },
  { id: "utm_medium", label: "utm_medium", type: "hidden", urlParam: "utm_medium" },
  { id: "utm_content", label: "utm_content", type: "hidden", urlParam: "utm_content" },
  { id: "utm_term", label: "utm_term", type: "hidden", urlParam: "utm_term" },
  { id: "utm_campaign", label: "utm_campaign", type: "hidden", urlParam: "utm_campaign" },
];

/** Mesma validação do campo de telefone do Elementor Pro (feita no servidor). */
export const TEL_PATTERN = /^[0-9()#&+*-=.]+$/;

/** Mensagens padrão do Elementor Pro, na tradução pt-BR instalada no site original. */
export const FORM_MESSAGES = {
  success: "Enviado com Sucesso.",
  error: "Seu envio falhou devido a um erro.",
  required: "Este campo é obrigatório.",
  invalid: "O Envio Falhou devido a um Erro do Formulário.",
  invalidTel: "O Campo Aceita Apenas Números e Caracteres de Telefone (#, -, *, etc).",
};

export type LeadResponse = {
  success: boolean;
  data: { message: string; errors?: Record<string, string>; redirect_url?: string };
};
