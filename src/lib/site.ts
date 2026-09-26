/**
 * A LP é publicada em genosgroup.com.br/ebook/ (mesma URL do WordPress).
 * O basePath do Next (next.config.ts) usa este valor, e as imagens de
 * public/ precisam dele no caminho, já que não passam pelo next/image.
 */
export const BASE_PATH = "/ebook";

export const SITE_URL = "https://genosgroup.com.br";

/** Caminho público de um arquivo em public/images */
export function image(file: string) {
  return `${BASE_PATH}/images/${file}`;
}

/** Imagem de fundo de uma seção (posição/tamanho ficam nas classes do Tailwind) */
export function bg(file: string) {
  return { backgroundImage: `url(${image(file)})` };
}

/**
 * href dos botões que abrem o popup do formulário. É o mesmo valor que o
 * Elementor gerava; mantido para não quebrar gatilhos do GTM baseados na URL
 * do clique. A abertura do popup em si é feita pelo onClick.
 */
export const OPEN_FORM_HREF =
  "#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjM2MDAiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D";
