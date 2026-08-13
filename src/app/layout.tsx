import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { SITE } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE = "Métodos Delay Pro | Guia Completo de Delay no Futebol";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: `%s | ${SITE.productName}`,
  },
  description: SITE.description,
  keywords: [
    "Métodos Delay Pro",
    "Delay no futebol",
    "mercado esportivo",
    "análise esportiva",
    "e-book Delay",
    "EQP R7 & BG7",
  ],
  authors: [{ name: SITE.team }],
  creator: SITE.team,
  publisher: SITE.team,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.productName,
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050604",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
