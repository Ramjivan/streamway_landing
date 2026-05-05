import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

const OFFER_URL = "https://digitalgoods.streamway.in/google-ai-pro";
const WHATSAPP_URL = "https://wa.me/917229997799";
const STORAGE_KEY = "streamway_google_ai_offer_dismissed_at";
const SHOW_INTERVAL_MS = 24 * 60 * 60 * 1000;
const REGULAR_PRICE = 350;
const OFFER_PRICE = 51;
const SAVINGS = REGULAR_PRICE - OFFER_PRICE;
const DISCOUNT_PERCENT = Math.round((SAVINGS / REGULAR_PRICE) * 100);

type Benefit = {
  title: string;
  detail: string;
  logo: string;
};

const BENEFITS: Benefit[] = [
  {
    title: "Secure storage",
    detail:
      "Get 5 TB total storage across Gmail, Photos and Drive. Share privately with up to 5 people.",
    logo: "/logos/googledrive.svg",
  },
  {
    title: "Higher access to Gemini features",
    detail:
      "Create and edit images with precision and control across premium Gemini tools.",
    logo: "/logos/gemini.svg",
  },
  {
    title: "Nano Banana 2",
    detail:
      "Powered by a more advanced model and engineered for complex, sophisticated outputs.",
    logo: "/logos/nanobanana.svg",
  },
  {
    title: "Generate stunning videos",
    detail: "Turn your photos into videos with Veo 3.1.",
    logo: "/logos/veo.png",
  },
  {
    title: "Create 30s custom soundtracks",
    detail:
      "Transform text and images into high-quality soundtracks with Lyria 3.",
    logo: "/logos/gemini.svg",
  },
  {
    title: "Write, organise and visualise",
    detail: "Use Gemini across Gmail, Docs and other apps across Google.",
    logo: "/logos/gemini.svg",
  },
  {
    title: "Tackle complex tasks",
    detail: "Solve difficult problems and generate ideas with Gemini 3 Pro.",
    logo: "/logos/gemini.svg",
  },
  {
    title: "NotebookLM",
    detail: "More access to AI research tools and your thinking partner.",
    logo: "/logos/notebooklm.svg",
  },
  {
    title: "Flow",
    detail:
      "Higher access to AI filmmaking to create cinematic scenes and stories with Veo 3.1.",
    logo: "/logos/veo.png",
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
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6">
      <button
        type="button"
        aria-label="Close offer popup"
        className="absolute inset-0 bg-[#020617]/75 backdrop-blur-[3px]"
        onClick={closeModal}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="google-ai-offer-title"
        className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-[#D6E0F2] bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-3 top-3 z-10 h-9 w-9 rounded-full border border-[#D9E3F7] bg-white text-xl leading-none text-[#111827] transition hover:bg-[#F3F6FC]"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
          <div className="bg-gradient-to-br from-[#e8f1ff] via-[#f4f8ff] to-[#ebf8ff] px-5 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
            <span className="inline-flex rounded-full bg-[#111827] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
              Limited Time Offer
            </span>
            <h2
              id="google-ai-offer-title"
              className="mt-3 text-[26px] font-bold leading-tight text-[#0f172a] sm:text-[34px]"
            >
              18 Months Google Gemini AI Pro
              <span className="block text-[#1d4ed8]">Premium Plan at $51</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#334155] sm:text-base">
              Premium storage + advanced Gemini + Veo 3.1 + NotebookLM + Flow
              in one plan.
            </p>

            <div className="mt-5 rounded-2xl border border-[#D7E4FF] bg-white p-4 shadow-sm sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#475467]">
                Special Pricing
              </p>
              <div className="mt-2 flex items-end gap-3">
                <p className="text-5xl font-black leading-none text-[#0f172a] sm:text-6xl">
                  ${OFFER_PRICE}
                </p>
                <p className="pb-1 text-xl font-semibold text-[#D92D20] line-through sm:text-2xl">
                  ${REGULAR_PRICE}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#fff4ed] px-3 py-1 text-xs font-semibold text-[#9a3412]">
                  Save ${SAVINGS}
                </span>
                <span className="rounded-full bg-[#ecfdf3] px-3 py-1 text-xs font-semibold text-[#067647]">
                  {DISCOUNT_PERCENT}% OFF
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-[#0f172a] sm:grid-cols-3">
              <p className="rounded-lg border border-[#dbe5f7] bg-white/80 px-3 py-2 text-center">
                Instant Access
              </p>
              <p className="rounded-lg border border-[#dbe5f7] bg-white/80 px-3 py-2 text-center">
                Secure Checkout
              </p>
              <p className="rounded-lg border border-[#dbe5f7] bg-white/80 px-3 py-2 text-center">
                WhatsApp Support
              </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-[#D7E4FF] bg-white px-3 py-1 text-[#334155]">
                UPI / Cards
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#D7E4FF] bg-white px-3 py-1 text-[#334155]">
                <FontAwesomeIcon icon={faPaypal} className="text-[#003087]" />
                PayPal
              </span>
              <span className="rounded-full border border-[#D7E4FF] bg-white px-3 py-1 text-[#334155]">
                Encrypted Checkout
              </span>
            </div>
          </div>

          <div className="px-5 pb-6 pt-5 sm:px-8 sm:pb-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[#475467]">
              Plan Includes
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {BENEFITS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl border border-[#E4EAF6] bg-white px-3 py-3"
                >
                  <div className="h-11 w-11 shrink-0 overflow-hidden rounded-md border border-[#ECF0F8] bg-white p-1">
                    <Image
                      src={item.logo}
                      alt={`${item.title} logo`}
                      width={34}
                      height={34}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F172A]">
                      {item.title}
                    </p>
                    <p className="text-xs leading-5 text-[#475467]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
              Talk Before Purchase
            </a>
          </div>
          <p className="mt-3 text-center text-xs text-[#667085]">
            Payment options shown at checkout can vary by region and method
            availability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
