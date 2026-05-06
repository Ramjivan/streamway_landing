import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const OFFER_URL = "https://digitalgoods.streamway.in/google-ai-pro";
const STORAGE_KEY = "streamway_offer_strip_closed";

const OfferStrip = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const isClosed = window.localStorage.getItem(STORAGE_KEY) === "1";
    setIsVisible(!isClosed);
  }, []);

  const closeStrip = useCallback(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "1");
    }
    setIsVisible(false);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="offer-strip-neon block text-white">
      <div className="offer-strip-content container mx-auto flex items-start justify-between gap-2 px-2.5 py-2 sm:items-center sm:px-3 sm:py-2.5">
        <a
          href={OFFER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-0 flex flex-1 items-start gap-2 sm:items-center"
        >
          <Image
            src="/logos/gemini.svg"
            alt="Gemini"
            width={18}
            height={18}
            className="mt-0.5 h-4 w-4 shrink-0 sm:mt-0 sm:h-[18px] sm:w-[18px]"
          />
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold leading-4 sm:hidden">
              Google One AI Pro 18-Month:
              <span className="ml-1 font-semibold text-[#FECACA] line-through">
                $350
              </span>
              <span className="ml-1 font-bold text-[#86EFAC]">$51</span>
            </p>
            <p className="mt-0.5 text-[10px] leading-4 sm:hidden">
              Includes
              <span className="ml-1 inline-flex items-center gap-1 align-middle">
                <Image
                  src="/logos/googledrive.svg"
                  alt="Google Drive"
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5 shrink-0"
                />
                <span>5 TB storage</span>
              </span>
              <span className="ml-1">+ Gemini AI.</span>
              <span className="ml-1 font-semibold underline underline-offset-2">
                Checkout special offer
              </span>
            </p>

            <p className="hidden text-[15px] font-medium leading-5 sm:block">
              Google One AI Pro 18-Month Plan:
              <span className="ml-1 font-semibold text-[#FECACA] line-through">
                $350
              </span>
              <span className="ml-1 font-bold text-[#86EFAC]">$51</span>.
              <span className="ml-1">Includes</span>
              <span className="ml-1 inline-flex items-center gap-1 align-middle">
                <Image
                  src="/logos/googledrive.svg"
                  alt="Google Drive"
                  width={16}
                  height={16}
                  className="h-4 w-4 shrink-0"
                />
                <span>5 TB storage</span>
              </span>
              <span className="ml-1">+ Gemini AI.</span>
              <span className="ml-1 font-semibold underline underline-offset-2">
                Checkout special offer
              </span>
            </p>
          </div>
        </a>

        <button
          type="button"
          onClick={closeStrip}
          aria-label="Close offer strip"
          className="shrink-0 rounded-md border border-white/30 px-2 py-0.5 text-[11px] font-semibold leading-4 text-white/90 transition hover:bg-white/10 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default OfferStrip;
