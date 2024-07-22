import "./globals.css";

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

import { PageTransition } from "@/components/page-transition";
import { StairTransition } from "@/components/stair-transition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "700", "800"],
});

const defaultTitle = "Home | Davi Mateus Portfólio";

const description =
  "Site profissional de Davi Mateus, desenvolvedor fullstack e mobile com foco em React/Next, React Native e Node.js. Veja meu portfólio, quem sabe podemos trabalhar juntos!";

export const metadata: Metadata = {
  description,
  twitter: { card: "summary_large_image" },
  title: { default: defaultTitle, template: "%s | Davi Mateus Portfólio" },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ""),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <html lang="en">
      <head>
        <meta name="description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Davi Mateus Portfólio" />
        <meta property="og:description" content={description} />
        {/* <meta
          property="og:image"
          content={`${siteUrl}/opengraph-image.png?df62d10af596ed36`}
        /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={siteUrl} />
        <meta property="twitter:url" content={siteUrl} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content="Davi Mateus Portfólio" />
        {/* <meta
          name="twitter:image"
          content={`${siteUrl}/opengraph-image.png?df62d10af596ed36`}
        /> */}
        {/* <meta
          name="google-site-verification"
          content=""
        /> */}
        <meta
          name="keywords"
          content="Davi Mateus, desenvolvedor de software, fullstack, desenvolvimento mobile, desenvolvedor fullstack, desenvolvedor mobile, engenharia de software, desenvolvimento web, aplicativos móveis, desenvolvimento de aplicativos, programação, UNICAP, USP, Esalq, projetos de software, soluções de software, tecnologia, inovação, React, Node.js, JavaScript, TypeScript, Python, desenvolvimento de sistemas, backend, frontend, UI/UX design, banco de dados, APIs, RESTful, desenvolvimento ágil, Git, GitHub, CI/CD, teste de software, deploy, cloud computing, AWS, Firebase, desenvolvimento de websites, portfólio de desenvolvedor"
        />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
