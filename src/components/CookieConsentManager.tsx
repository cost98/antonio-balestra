"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

type ConsentState = "unknown" | "granted" | "denied";

const CONSENT_KEY = "cookie_consent_choice";
const CONSENT_COOKIE = "cookie_consent_choice";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

const GA_ID = "G-G5DPMQYWZX";
const ADS_ID = "AW-18058337663";
const GTM_ID = "GTM-MT9WGRTR";
const META_PIXEL_ID = "1673212577140544";

declare global {
  interface Window {
    dataLayer: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

function saveConsent(value: Exclude<ConsentState, "unknown">) {
  localStorage.setItem(CONSENT_KEY, value);
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${CONSENT_MAX_AGE}; SameSite=Lax`;
}

export default function CookieConsentManager() {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
    } else {
      setConsent("unknown");
    }

    const handleOpenPreferences = () => {
      localStorage.removeItem(CONSENT_KEY);
      setConsent("unknown");
    };
    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
  }, []);

  const handleChoice = (value: Exclude<ConsentState, "unknown">) => {
    saveConsent(value);
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />

          <Script id="google-ads-ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
              gtag('config', '${ADS_ID}');
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
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        </>
      )}

      {consent === "unknown" && (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Consenso cookie">
          <p className="cookie-banner__text">
            Usiamo cookie tecnici e, solo con il tuo consenso, cookie analytics e marketing per Google e Meta.
          </p>
          <div className="cookie-banner__actions">
            <button
              type="button"
              className="cookie-banner__button cookie-banner__button--secondary"
              onClick={() => handleChoice("denied")}
            >
              Rifiuta
            </button>
            <button
              type="button"
              className="cookie-banner__button cookie-banner__button--primary"
              onClick={() => handleChoice("granted")}
            >
              Accetta
            </button>
          </div>
        </div>
      )}
    </>
  );
}
