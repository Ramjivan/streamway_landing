import Link from 'next/link'
import styles from './page.module.css'

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <p className={styles.kicker}>Contact</p>
        <h1>Talk to Streamway</h1>
        <p className={styles.copy}>
          Need help with onboarding, pricing, or integrations? Reach out and our
          team will respond quickly.
        </p>

        <div className={styles.infoRow}>
          <span>Email</span>
          <a href="mailto:contact@streamway.in">contact@streamway.in</a>
        </div>

        <div className={styles.infoRow}>
          <span>Phone</span>
          <a href="tel:+917229997799">+91 7229997799</a>
        </div>

        <div className={styles.actions}>
          <a
            href="https://wa.me/917229997799"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            Chat on WhatsApp
          </a>
          <Link href="/" className={styles.back}>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
