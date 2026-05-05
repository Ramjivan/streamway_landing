'use client'

import { useEffect, useMemo, useState } from 'react'
import styles from './offer-popup.module.css'

const OFFER_URL = 'https://digitalgoods.streamway.in/google-ai-pro'
const WHATSAPP_URL =
  'https://wa.me/917229997799?text=Hi%2C%20I%20need%20help%20with%20the%20Google%20AI%20Pro%20offer.'
const STORAGE_KEY = 'streamway-offer-popup-dismissed-at'
const REOPEN_AFTER_MS = 24 * 60 * 60 * 1000

const benefits = [
  { name: 'Gemini AI Pro', logo: '/logos/gemini.svg' },
  { name: 'Nano Banana', logo: '/logos/nanobanana.svg' },
  { name: 'Veo AI Photo + Video', logo: '/logos/veo.png' },
  { name: 'Antigravity Coding Assistant', logo: '/logos/antigravity.svg' },
  { name: 'NotebookLM', logo: '/logos/notebooklm.svg' },
  { name: '5 TB Google Drive', logo: '/logos/googledrive.svg' },
]

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false)

  const shouldOpen = useMemo(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const lastDismissed = window.localStorage.getItem(STORAGE_KEY)
    if (!lastDismissed) {
      return true
    }

    const parsed = Number(lastDismissed)
    if (!Number.isFinite(parsed)) {
      return true
    }

    return Date.now() - parsed > REOPEN_AFTER_MS
  }, [])

  useEffect(() => {
    if (shouldOpen) {
      setIsOpen(true)
    }
  }, [shouldOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopup()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const closePopup = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()))
    }
    setIsOpen(false)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.overlay} onClick={closePopup}>
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="offer-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          type="button"
          onClick={closePopup}
          aria-label="Close offer popup"
        >
          ×
        </button>

        <p className={styles.badge}>Limited-Time Offer</p>
        <h2 id="offer-modal-title">18-Month Google Gemini AI Pro Plan</h2>

        <p className={styles.priceLine}>
          Worth <span className={styles.crossed}>$350</span>
          <span className={styles.livePrice}>Now only $51</span>
        </p>

        <p className={styles.subCopy}>
          Includes <strong>5 TB Google Drive storage</strong> that can be
          shared with up to <strong>5 family members</strong>, plus premium AI
          tools for creators, students, and teams.
        </p>

        <div className={styles.logoGrid}>
          {benefits.map((benefit) => (
            <div key={benefit.name} className={styles.logoCard}>
              <img src={benefit.logo} alt={benefit.name} loading="lazy" />
              <span>{benefit.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.actionRow}>
          <a
            href={OFFER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryAction}
            onClick={closePopup}
          >
            Claim This Offer
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappAction}
            onClick={closePopup}
          >
            <img src="/logos/whatsapp.svg" alt="" aria-hidden />
            WhatsApp Support
          </a>
        </div>

        <p className={styles.footnote}>
          Secure checkout. Official product names belong to their respective
          owners.
        </p>
      </section>
    </div>
  )
}
