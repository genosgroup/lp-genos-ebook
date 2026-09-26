# LP Genos Group: Ebook (Método PPTE)

Landing page de venda do Método PPTE (genosgroup.com.br/ebook/), migrada do WordPress/Elementor para **Next.js + TypeScript + Tailwind CSS**, mantendo o visual e o comportamento idênticos ao original.

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # opcional: webhook e URL do checkout
npm run dev                  # http://localhost:3000/ebook/
```

Build de produção: `npm run build && npm start`.

A página fica em `/ebook/` (`basePath` no `next.config.ts`), a mesma URL do WordPress. As imagens de `public/` são referenciadas com a função `image()` de `src/lib/site.ts`, que já inclui esse caminho.

## Variáveis de ambiente

| Variável | Uso |
| --- | --- |
| `LEAD_WEBHOOK_URL` | Obrigatório. Webhook (n8n) que recebe os leads do formulário do popup, no mesmo formato que o Elementor enviava. Sem ele o formulário responde com erro. |
| `CHECKOUT_URL` | Para onde o visitante vai depois de enviar o formulário (checkout). Aceita os marcadores do Elementor, ex.: `?name=[field id="nome"]&email=[field id="email"]`. |

## Estrutura

```
src/
  app/
    layout.tsx        metadados, fontes (Titillium Web, Poppins, Montserrat, Inter, Exo 2) e rastreamento
    page.tsx          monta as seções da página e os popups
    globals.css       tema do Tailwind (breakpoints do Elementor), botão verde e mensagens do formulário
    api/lead/route.ts recebe o formulário, repassa ao webhook e devolve a URL do checkout
  components/         uma seção por arquivo (Hero, Deliverables, Offer…), popups e formulário
  lib/                caminhos/URLs do site e definição do formulário
public/
  images/             imagens do site original
```

### Breakpoints

Os breakpoints do Tailwind replicam os do Elementor (desktop-first):

| Prefixo | Largura |
| --- | --- |
| `max-mobile:` | até 767px |
| `max-laptop:` | até 1366px |
| `mobile:` | a partir de 768px |
| `wide:` | a partir de 2400px |

## O que foi adaptado do WordPress

- **Popups**: os dois popups do Elementor Pro foram refeitos em React (`Popups.tsx`), com o mesmo comportamento: o do formulário abre pelos botões verdes; o de saída abre uma única vez quando o mouse sai da janela pelo topo; os dois fecham com Esc, clique fora ou no X. Os ids `elementor-popup-modal-3600/3605` e os eventos `elementor/popup/show|hide` foram mantidos para não quebrar gatilhos do GTM.
- **Formulário**: em vez do `admin-ajax.php`, envia para `/ebook/api/lead/`, que valida os campos como o Elementor (inclusive a regra do telefone), repassa ao webhook do n8n e devolve a URL de redirecionamento. Os campos mantêm os mesmos `id`/`name`, os parâmetros da URL (UTMs) preenchem os campos, e as mensagens são as do Elementor Pro em pt-BR. No WordPress o formulário também salvava os envios no banco (*Elementor > Envios*) e mandava um e-mail de aviso; essas duas ações não existem mais, o registro fica no n8n.
- **Rastreamento**: Google tag (`GT-552FQVS`), GTM (`GTM-WBJTM4T2`), Pixel da Meta (`624880005754303`) e GA4 (`G-X2G6KW4TNY`) inseridos diretamente, sem os plugins Site Kit, PixelYourSite e Meta for WordPress.
- **Vídeo**: a capa do vídeo carrega o player do YouTube só no clique (mesmos parâmetros do Elementor), sem a API do YouTube.
- **Plugins substituídos por código**: rolagem suave do mouse (Mousewheel Smooth Scroll → `smoothscroll-for-websites`, mesmas opções).
- **Textos**: iguais aos publicados. As tags `<dest>` que existem no modelo do Elementor não aparecem no site publicado (o WordPress as remove), então esses trechos ficam sem o degradê, como no original.

## Deploy (Cloudflare Workers)

O projeto já está configurado para o Cloudflare Workers com o adaptador [OpenNext](https://opennext.js.org/cloudflare) (`wrangler.jsonc` e `open-next.config.ts`), no mesmo padrão do `lp-genos-principal`. O Worker se chama `lp-genos-ebook`.

- **Automático:** cada push na `main` publica pelo GitHub Actions (`.github/workflows/deploy.yml`). O repositório precisa dos segredos `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID` em *Settings > Secrets and variables > Actions*.
- **Manual:** `npx wrangler login` e depois `npm run deploy`.
- **Variáveis:** `LEAD_WEBHOOK_URL` e `CHECKOUT_URL` ficam no Worker, configuradas uma vez com `npx wrangler secret put NOME` (ou no painel, em *Workers > lp-genos-ebook > Settings > Variables and Secrets*). O deploy não mexe nelas.
- **Rota:** a rota `genosgroup.com.br/ebook*` é ligada ao Worker no painel da Cloudflare (*Settings > Domains & Routes*), e não no `wrangler.jsonc`.
