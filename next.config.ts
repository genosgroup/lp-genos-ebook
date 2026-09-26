import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/site";

const nextConfig: NextConfig = {
  // Mesma URL do WordPress: genosgroup.com.br/ebook/ (com a barra no final)
  basePath: BASE_PATH,
  trailingSlash: true,

  // No domínio a raiz é da LP principal; isto só vale para o endereço workers.dev,
  // cuja raiz levaria a um 404.
  async redirects() {
    return [{ source: "/", destination: `${BASE_PATH}/`, basePath: false, permanent: false }];
  },
};

export default nextConfig;
