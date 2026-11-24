
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
  metadataBase: new URL("https://psiquiatriaconcafe.com"),

  title: {
    default: "Psiquiatría con Café | Dra. Ruth Yubelka Aguilar Ramírez",
    template: "%s | Psiquiatría con Café",
  },

  description:
    "Conoce los servicios de la Dra. Ruth Yubelka Aguilar Ramírez, médico especialista en Psiquiatría y alta especialidad en Psiquiatría de Enlace. Atención exclusivamente virtual.",

  applicationName: "Psiquiatría con Café",

  keywords: [
    "Psiquiatría",
    "Psiquiatría de Enlace",
    "Salud mental",
    "Consulta psiquiátrica virtual",
    "Atención psiquiátrica en línea",
    "Dra. Ruth Yubelka Aguilar Ramírez",
  ],

  authors: [
    {
      name: "Dra. Ruth Yubelka Aguilar Ramírez",
    },
  ],

  openGraph: {
    title: "Psiquiatría con Café",
    description:
      "Un espacio dedicado a la salud mental, la escucha y el bienestar emocional. Atención exclusivamente virtual.",
    siteName: "Psiquiatría con Café",
    locale: "es_NI",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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
