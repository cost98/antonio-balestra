import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentManager from "@/components/CookieConsentManager";

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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MT9WGRTR');`}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MT9WGRTR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <CookieConsentManager />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
