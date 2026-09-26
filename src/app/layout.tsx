import type { Metadata, Viewport } from "next";
import { Exo_2, Inter, Montserrat, Poppins, Titillium_Web } from "next/font/google";
import Tracking, { TrackingNoScript } from "@/components/Tracking";
import { image, SITE_URL } from "@/lib/site";
import "./globals.css";

// Mesmas famílias do original (Google Fonts), só com os pesos/estilos usados na página
const titillium = Titillium_Web({
  variable: "--font-titillium-src",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins-src",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat-src",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-src",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const exo2 = Exo_2({
  variable: "--font-exo-src",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "4A – Genos Group",
  robots: { "max-image-preview": "large" },
  alternates: { canonical: `${SITE_URL}/ebook/` },
  icons: {
    icon: [
      { url: image("genos-preto-150x150.png"), sizes: "32x32" },
      { url: image("genos-preto.png"), sizes: "192x192" },
    ],
    apple: image("genos-preto.png"),
  },
  other: {
    "facebook-domain-verification": "6z6cze7yhra0icdup2bdq1lto0l0sw",
    "msapplication-TileImage": `${SITE_URL}${image("genos-preto.png")}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const fontVariables = [titillium, poppins, montserrat, inter, exo2].map((font) => font.variable).join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={fontVariables}>
      <body>
        <TrackingNoScript />
        <Tracking />
        {children}
      </body>
    </html>
  );
}
