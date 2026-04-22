"use client";

export default function CookiePreferencesButton() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
  };

  return (
    <button
      onClick={handleClick}
      className="text-gray-500 hover:text-primary-400 transition-colors"
    >
      Preferenze Cookie
    </button>
  );
}
