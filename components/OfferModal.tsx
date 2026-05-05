import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const OFFER_URL = "https://digitalgoods.streamway.in/google-ai-pro";
const WHATSAPP_URL = "https://wa.me/917229997799";
const STORAGE_KEY = "streamway_google_ai_offer_dismissed_at";
const SHOW_INTERVAL_MS = 24 * 60 * 60 * 1000;

type Benefit = {
  name: string;
  detail: string;
  logo: string;
};

const BENEFITS: Benefit[] = [
  {
    name: "Google Gemini AI Pro",
    detail: "18 months premium access",
    logo: "/logos/gemini.svg",
  },
  {
    name: "Google Drive",
    detail: "5 TB storage, share with 5 family members",
    logo: "/logos/googledrive.svg",
  },
  {
    name: "Nano Banana",
    detail: "Advanced AI creation tools",
    logo: "/logos/nanobanana.svg",
  },
  {
    name: "Veo",
    detail: "AI photo and video generation",
    logo: "/logos/veo.png",
  },
  {
    name: "Antigravity",
    detail: "Coding assistant capabilities",
    logo: "/logos/antigravity.svg",
  },
  {
    name: "NotebookLM",
    detail: "Research and note intelligence",
    logo: "/logos/notebooklm.svg",
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
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Close offer popup"
        className="absolute inset-0 bg-[#030712]/70 backdrop-blur-[2px]"
        onClick={closeModal}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="google-ai-offer-title"
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-[#D6E0F2] bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-3 top-3 h-9 w-9 rounded-full border border-[#D9E3F7] bg-white text-xl leading-none text-[#111827] transition hover:bg-[#F3F6FC]"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="bg-gradient-to-r from-[#e8f1ff] via-[#f4f8ff] to-[#e8f7ff] px-5 pb-4 pt-6 sm:px-8 sm:pt-8">
          <span className="inline-flex rounded-full bg-[#0f172a] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            Limited Offer
          </span>
          <h2
            id="google-ai-offer-title"
            className="mt-3 text-2xl font-bold leading-tight text-[#101828] sm:text-3xl"
          >
            18 Months Google Gemini AI Pro Plan
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[#344054] sm:text-base">
            Get premium Google AI access with family-ready storage and top AI
            tools, all in one plan.
          </p>

          <div className="mt-4 flex flex-wrap items-end gap-3">
            <div className="rounded-lg border border-[#F2D4D6] bg-[#FFF6F6] px-3 py-2 text-sm text-[#B42318] line-through">
              Worth $350
            </div>
            <div className="rounded-lg bg-[#0B8A53] px-4 py-2 text-lg font-bold text-white sm:text-xl">
              Now only $51
            </div>
          </div>
        </div>

        <div className="px-5 pb-6 pt-5 sm:px-8">
          <div className="grid grid-cols-1 gap-2 text-sm text-[#1D2939] sm:grid-cols-2">
            <p className="rounded-lg border border-[#E4EAF6] bg-[#F8FAFD] px-3 py-2">
              5 TB Google Drive storage
            </p>
            <p className="rounded-lg border border-[#E4EAF6] bg-[#F8FAFD] px-3 py-2">
              Share access with up to 5 family members
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {BENEFITS.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 rounded-xl border border-[#E4EAF6] bg-white px-3 py-3"
              >
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-md border border-[#ECF0F8] bg-white p-1">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={32}
                    height={32}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">
                    {item.name}
                  </p>
                  <p className="text-xs text-[#475467]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={OFFER_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={rememberDismissal}
              className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl bg-[#1D4ED8] px-5 text-center text-sm font-semibold text-white transition hover:bg-[#1E40AF]"
            >
              Claim This Offer
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={rememberDismissal}
              className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl border border-[#B8E5C8] bg-[#F2FFF6] px-5 text-sm font-semibold text-[#067647] transition hover:bg-[#E8FAF0]"
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

          <p className="mt-4 text-xs text-[#667085]">
            Note: Google and product logos belong to their respective owners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
