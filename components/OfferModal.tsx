import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const OFFER_URL = "https://digitalgoods.streamway.in/google-ai-pro";
const WHATSAPP_URL = "https://wa.me/917229997799";
const STORAGE_KEY = "streamway_google_ai_offer_dismissed_at";
const SHOW_INTERVAL_MS = 24 * 60 * 60 * 1000;
const REGULAR_PRICE = 350;
const OFFER_PRICE = 51;
const SAVINGS = REGULAR_PRICE - OFFER_PRICE;
const DISCOUNT_PERCENT = Math.round((SAVINGS / REGULAR_PRICE) * 100);

const TOOL_LOGOS = [
  { name: "Gemini", src: "/logos/gemini.svg" },
  { name: "Google Drive", src: "/logos/googledrive.svg" },
  { name: "Nano Banana", src: "/logos/nanobanana.svg" },
  { name: "Veo", src: "/logos/veo.png" },
  { name: "Antigravity", src: "/logos/antigravity.svg" },
  { name: "NotebookLM", src: "/logos/notebooklm.svg" },
];

const OfferModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const rememberDismissal = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  }, []);

  const closeModal = useCallback(() => {
    rememberDismissal();
    setIsOpen(false);
  }, [rememberDismissal]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const dismissedAt = window.localStorage.getItem(STORAGE_KEY);
    if (dismissedAt) {
      const dismissedTimestamp = Number(dismissedAt);
      const isRecentlyDismissed =
        Number.isFinite(dismissedTimestamp) &&
        Date.now() - dismissedTimestamp < SHOW_INTERVAL_MS;

      if (isRecentlyDismissed) {
        return;
      }
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 250);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Close offer popup"
        className="absolute inset-0 bg-[#020617]/75 backdrop-blur-[2px]"
        onClick={closeModal}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="offer-title"
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-[#D5E3F8] bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-3 top-3 z-10 h-9 w-9 rounded-full border border-[#DAE4F7] bg-white text-xl leading-none text-[#0f172a] transition hover:bg-[#F5F8FF]"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="bg-gradient-to-br from-[#e9f1ff] via-[#f5f8ff] to-[#edf9ff] px-5 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
          <span className="inline-flex rounded-full bg-[#0f172a] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            Limited Offer
          </span>

          <h2
            id="offer-title"
            className="mt-3 text-[28px] font-bold leading-tight text-[#0f172a] sm:text-[36px]"
          >
            18 Months Google Gemini AI Pro
          </h2>
          <p className="mt-2 text-sm text-[#334155] sm:text-base">
            Premium AI tools + 5 TB Google storage for one low price.
          </p>

          <div className="mt-5 rounded-2xl border border-[#D8E4F8] bg-white p-4 sm:p-5">
            <p className="text-sm font-medium text-[#B42318] line-through">
              Worth ${REGULAR_PRICE}
            </p>
            <div className="mt-1 flex flex-wrap items-end gap-2">
              <p className="text-6xl font-black leading-none text-[#0f172a] sm:text-7xl">
                ${OFFER_PRICE}
              </p>
              <p className="pb-2 text-sm font-semibold text-[#475467] sm:text-base">
                one-time offer
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#FFF4ED] px-3 py-1 text-xs font-semibold text-[#9A3412]">
                Save ${SAVINGS}
              </span>
              <span className="rounded-full bg-[#ECFDF3] px-3 py-1 text-xs font-semibold text-[#067647]">
                {DISCOUNT_PERCENT}% OFF
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-[#0f172a] sm:grid-cols-2">
            <p className="rounded-lg border border-[#DDE6F7] bg-white/90 px-3 py-2">
              5 TB storage across Gmail, Photos and Drive
            </p>
            <p className="rounded-lg border border-[#DDE6F7] bg-white/90 px-3 py-2">
              Private family sharing for up to 5 members
            </p>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.09em] text-[#475467]">
              Includes Top Tools
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {TOOL_LOGOS.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-[#E4EAF6] bg-white px-2 py-3"
                  title={item.name}
                >
                  <div className="mx-auto h-8 w-8">
                    <Image
                      src={item.src}
                      alt={`${item.name} logo`}
                      width={32}
                      height={32}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-[#667085]">
              Gemini, Nano Banana 2, Veo 3.1, Antigravity, NotebookLM and more.
            </p>
          </div>
        </div>

        <div className="border-t border-[#E4EAF6] px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={OFFER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={rememberDismissal}
              className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-xl bg-[#1D4ED8] px-5 text-center text-sm font-bold text-white transition hover:bg-[#1E40AF] sm:text-base"
            >
              Activate Plan for ${OFFER_PRICE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={rememberDismissal}
              className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-xl border border-[#B8E5C8] bg-[#F2FFF6] px-5 text-sm font-semibold text-[#067647] transition hover:bg-[#E8FAF0] sm:text-base"
            >
              <Image
                src="/logos/whatsapp.svg"
                alt="WhatsApp"
                width={18}
                height={18}
              />
              WhatsApp Support
            </a>
          </div>
          <p className="mt-3 text-center text-xs text-[#667085]">
            Secure checkout with region-based payment options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
