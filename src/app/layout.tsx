import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://SEU-DOMINIO.vercel.app"),
  title: {
    default: "Gabrielly Dionisio | Dados • BI • Engenharia de Dados",
    template: "%s | Gabrielly Dionisio",
  },
  description:
    "Estudante de Engenharia da Computação com foco em Dados, BI e Engenharia de Dados. Portfólio com projetos de pipeline de dados, Power BI e automação.",
  keywords: [
    "Gabrielly Dionisio",
    "Engenharia de Dados",
    "Business Intelligence",
    "Análise de Dados",
    "Power BI",
    "PySpark",
    "Databricks",
    "UFES",
  ],
  authors: [{ name: "Gabrielly Dionisio" }],
    openGraph: {
    title: "Gabrielly Dionisio | Dados • BI • Engenharia de Dados",
    description:
      "Estudante de Engenharia da Computação com foco em Dados, BI e Engenharia de Dados.",
    url: "https://SEU-DOMINIO.vercel.app",
    siteName: "Gabrielly Dionisio",
    locale: "pt_BR",
    type: "website",
    // [ADICIONAR INFORMAÇÃO] crie public/og-image.png (1200x630px) e descomente abaixo
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Gabrielly Dionisio — Dados, BI e Engenharia de Dados",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabrielly Dionisio | Dados • BI • Engenharia de Dados",
    description:
      "Estudante de Engenharia da Computação com foco em Dados, BI e Engenharia de Dados.",
    // [ADICIONAR INFORMAÇÃO] mesma imagem do openGraph acima
    // images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gabrielly Dionisio",
    jobTitle: "Estudante de Engenharia da Computação",
    affiliation: "Universidade Federal do Espírito Santo (UFES)",
    url: "https://SEU-DOMINIO.vercel.app",
    sameAs: [
      "https://github.com/GabyyRD",
      "https://www.linkedin.com/in/gabrielly-dionisio/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}