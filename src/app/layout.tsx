import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Great_Vibes, Satisfy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dealway - Expert en opérations M&A off-market",
  description: "Dealway orchestre des transactions confidentielles créatrices de valeur pour dirigeants et investisseurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${greatVibes.variable} ${satisfy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
