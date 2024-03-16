import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Belanosima } from "next/font/google";

const belanosima = Belanosima({
  weight: "400",
  subsets: ["latin"],
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Futsol Game",
  description:
    "Compete, win & earn. Solana's next-gen fantasy football game. Glory is one transfer away.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={belanosima.className}>{children}</body>
    </html>
  );
}
