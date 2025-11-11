import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Antonio Balestra - Nutrizionista Clinico",
  description: "Nutrizionista clinico specializzato in nutrizione per diabetici, piede diabetico e piani alimentari personalizzati. Milano, Pavia.",
  keywords: "nutrizionista, nutrizione clinica, diabete, piede diabetico, dieta chetogenica, Milano, Pavia",
  authors: [{ name: "Antonio Balestra" }],
  openGraph: {
    title: "Dr. Antonio Balestra - Nutrizionista Clinico",
    description: "Nutrizionista clinico specializzato in nutrizione per diabetici e piani alimentari personalizzati",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
