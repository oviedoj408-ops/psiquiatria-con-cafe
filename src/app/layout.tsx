
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psiquiatria-con-cafe.pages.dev"),

  title: {
    default: "Dra. Ruth Aguilar | Psiquiatra en Nicaragua",
    template: "%s | Dra. Ruth Aguilar",
  },

  description:
    "Dra. Ruth Yubelka Aguilar Ramírez, médico especialista en Psiquiatría y alta especialidad en Psiquiatría de Enlace. Consultas exclusivamente virtuales en Nicaragua.",

  applicationName: "Psiquiatría con Café",

  keywords: [
    "Dra. Ruth Aguilar",
    "Dra. Ruth Yubelka Aguilar",
    "Dra. Ruth Yubelka Aguilar Ramírez",
    "Psiquiatra en Nicaragua",
    "Consulta psiquiátrica virtual",
    "Psiquiatría de Enlace",
    "Atención psiquiátrica en línea",
    "Psiquiatría con Café",
  ],

  authors: [
    {
      name: "Dra. Ruth Yubelka Aguilar Ramírez",
    },
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Dra. Ruth Aguilar | Psiquiatra en Nicaragua",
    description:
      "Conoce a la Dra. Ruth Yubelka Aguilar Ramírez, especialista en Psiquiatría y Psiquiatría de Enlace. Atención exclusivamente virtual en Nicaragua.",
    siteName: "Psiquiatría con Café",
    locale: "es_NI",
    type: "website",
    url: "https://psiquiatria-con-cafe.pages.dev",
  },

  twitter: {
    card: "summary",
    title: "Dra. Ruth Aguilar | Psiquiatra en Nicaragua",
    description:
      "Dra. Ruth Yubelka Aguilar Ramírez, especialista en Psiquiatría. Atención exclusivamente virtual en Nicaragua.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
