import type { NextConfig } from "next";
import { BASE_PATH } from "./src/lib/site";

const nextConfig: NextConfig = {
  // Mesma URL do WordPress: genosgroup.com.br/ebook/ (com a barra no final)
  basePath: BASE_PATH,
  trailingSlash: true,
};

export default nextConfig;
