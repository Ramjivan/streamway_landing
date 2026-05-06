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
const MONTHLY_EQUIVALENT = (OFFER_PRICE / 18).toFixed(2);

const TOOL_FEATURES = [
  {
    name: "Gemini",
    src: "/logos/gemini.svg",
    detail: "Advanced AI assistant for writing, ideas and deep research.",
  },
  {
    name: "Nano Banana 2",
    src: "/logos/nanobanana.svg",
    detail: "High-quality creative generation for complex visual outputs.",
  },
  {
    name: "Veo 3.1",
    src: "/logos/veo.png",
    detail: "Turn prompts and photos into cinematic AI video content.",
  },
  {
    name: "Antigravity",
    src: "/logos/antigravity.svg",
    detail: "Coding-focused AI support to build and troubleshoot faster.",
  },
  {
    name: "NotebookLM",
    src: "/logos/notebooklm.svg",
    detail: "AI thinking partner for notes, summaries and structured insights.",
  },
  {
    name: "Google Drive",
    src: "/logos/googledrive.svg",
    detail: "5 TB secure storage with private sharing for family members.",
  },
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
    <div className="fixed inset-0 z-[120] flex items-start justify-center p-3 sm:items-center sm:p-6">
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
        className="relative z-10 w-full max-w-4xl max-h-[88vh] overflow-y-auto overscroll-contain rounded-3xl border border-[#D5E3F8] bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-3 top-3 z-20 h-9 w-9 rounded-full border border-[#DAE4F7] bg-white text-xl leading-none text-[#0f172a] transition hover:bg-[#F5F8FF]"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="bg-gradient-to-br from-[#edf4ff] via-[#f7faff] to-[#eef8ff] px-3 pb-3 pt-3 sm:px-5 sm:pb-5">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_1fr] lg:gap-4">
            <div className="order-1 rounded-2xl border border-[#CBDCF7] bg-white p-3.5 shadow-[0_16px_45px_-35px_rgba(29,78,216,0.9)] sm:p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2">
                  <Image
                    src="/logos/gemini.svg"
                    alt="Gemini logo"
                    width={20}
                    height={20}
                  />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1e3a8a] sm:text-xs">
                    Official Google Plan
                  </p>
                </div>
                <span className="rounded-full bg-gradient-to-r from-[#0f172a] to-[#1d4ed8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white sm:text-xs">
                  Limited Offer
                </span>
              </div>

              <h2
                id="offer-title"
                className="mt-1 text-[34px] font-black leading-[1.02] tracking-tight sm:text-[48px] sm:leading-[1.01]"
              >
                <span className="block text-[#0b1736]">Google Gemini AI</span>
                <span className="block text-[#0b1736]">Pro Plan</span>
                <span className="mt-0.5 block bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent">
                  18 Months Access
                </span>
              </h2>

              <div className="mt-2 rounded-2xl border border-[#dbe5f7] bg-[radial-gradient(circle_at_top,#eaf2ff_0%,#f7faff_42%,#ffffff_100%)] p-3 sm:p-4">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9f1239]">
                      Regular Price
                    </p>
                    <p className="mt-0.5 text-4xl font-extrabold leading-none text-[#B42318] line-through decoration-2 sm:text-5xl">
                      ${REGULAR_PRICE}
                    </p>
                  </div>
                  <span className="rounded-full border border-[#86efac] bg-[#ECFDF3] px-3.5 py-1.5 text-sm font-extrabold tracking-tight text-[#047857] sm:text-base">
                    {DISCOUNT_PERCENT}% OFF
                  </span>
                </div>

                <div className="mt-2 rounded-xl border border-[#dbe5f7] bg-white px-3 py-2.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#475467]">
                    Today You Pay
                  </p>
                  <div className="mt-1 flex items-end gap-2">
                    <p className="text-[64px] font-black leading-none text-[#0f172a] sm:text-[78px]">
                      ${OFFER_PRICE}
                    </p>
                    <div className="pb-2 text-[11px] text-[#475467] sm:text-sm">
                      <p className="font-semibold">one-time</p>
                      <p>${MONTHLY_EQUIVALENT}/month equivalent</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#FFF4ED] px-3 py-1 text-xs font-semibold text-[#9A3412]">
                  Save ${SAVINGS}
                </span>
                <span className="rounded-full bg-[#EEF4FF] px-3 py-1 text-xs font-semibold text-[#1D4ED8]">
                  5 TB Google Storage Included
                </span>
              </div>

              <div className="mt-3 rounded-xl border border-[#dbe5f7] bg-white px-3 py-2.5">
                <ul className="space-y-1.5 text-sm leading-6 text-[#1f2937] sm:text-[17px]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[9px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#22c55e]" />
                    <span>Pay once and use for 1.5 years. No monthly charges.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-[9px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#1d4ed8]" />
                    <span>Official Google partner offer.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-3.5 flex flex-col gap-2.5">
                <a
                  href={OFFER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={rememberDismissal}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#1D4ED8] px-5 text-center text-sm font-bold text-white transition hover:bg-[#1E40AF] sm:text-base"
                >
                  Activate Plan for ${OFFER_PRICE}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={rememberDismissal}
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-[#B8E5C8] bg-[#F2FFF6] px-5 text-sm font-semibold text-[#067647] transition hover:bg-[#E8FAF0] sm:text-base"
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
            </div>

            <div className="order-2 rounded-2xl border border-[#D8E4F8] bg-white/95 p-3.5 sm:p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full bg-[#0f172a] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  What You Get
                </span>
                <span className="inline-flex rounded-full border border-[#D5E3F8] bg-white px-3 py-1 text-xs font-medium text-[#334155]">
                  18-month premium plan
                </span>
              </div>

              <p className="mt-3 max-w-[760px] text-sm leading-6 text-[#334155] sm:text-[18px]">
                Premium Google AI tools + secure storage in one plan.
              </p>

              <div className="mt-4 rounded-2xl border border-[#dbe5f7] bg-white p-3.5 sm:p-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-lg border border-[#E4EAF6] bg-white p-2">
                    <Image
                      src="/logos/googledrive.svg"
                      alt="Google Drive logo"
                      width={24}
                      height={24}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a] sm:text-[18px]">
                      Secure Google storage included
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#475467] sm:text-base">
                      Get 5 TB across Gmail, Photos and Drive. Share privately
                      with up to 5 family members.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#475467]">
                  Included Tools
                </p>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {TOOL_FEATURES.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl border border-[#E4EAF6] bg-white p-3 shadow-[0_1px_0_0_#eef3ff]"
                      title={item.name}
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 shrink-0">
                          <Image
                            src={item.src}
                            alt={`${item.name} logo`}
                            width={32}
                            height={32}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <p className="text-sm font-semibold text-[#0f172a]">
                          {item.name}
                        </p>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-[#556173]">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
