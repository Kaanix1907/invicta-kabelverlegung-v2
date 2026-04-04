import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INVICTA Kabelverlegung – Duisburg",
  description:
    "INVICTA Kabelverlegung Duisburg – Professionelle Kabelverlegung und Industrieinstallationen in NRW. Zuverlässig, normkonform, präzise.",
  keywords: [
    "Kabelverlegung",
    "Duisburg",
    "NRW",
    "Elektroinstallation",
    "Industrieinstallation",
    "DIN VDE",
  ],
  openGraph: {
    title: "INVICTA Kabelverlegung – Duisburg",
    description:
      "Professionelle Kabelverlegung und Industrieinstallationen in NRW. Zuverlässig, normkonform, präzise.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable}`}
    >
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
