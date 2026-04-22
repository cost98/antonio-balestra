import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MT9WGRTR');
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G5DPMQYWZX"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G5DPMQYWZX');
            gtag('config', 'AW-18058337663');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1673212577140544');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MT9WGRTR"
            height="0"
            width="0"
            hidden
            title="google-tag-manager"
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            hidden
            src="https://www.facebook.com/tr?id=1673212577140544&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
