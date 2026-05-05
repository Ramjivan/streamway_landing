import styles from './page.module.css'

const trustMetrics = [
  { value: '2.8x', label: 'Faster campaign launches' },
  { value: '41%', label: 'Higher watch completion' },
  { value: '94%', label: 'Teams staying week over week' },
]

const features = [
  {
    title: 'Adaptive Story Blocks',
    description:
      'Build one stream layout and let Streamway tune pacing, chapter order, and overlays for each audience segment.',
  },
  {
    title: 'Live Insight Layer',
    description:
      'Track drop-off moments and replay spikes in real time, then ship fixes before the campaign window closes.',
  },
  {
    title: 'Brand Control Center',
    description:
      'Keep visual consistency with locked palettes, typography controls, and reusable scene presets for every team.',
  },
  {
    title: 'Team Workflows',
    description:
      'Share review links, collect timestamped feedback, and move from draft to publish without chasing approvals.',
  },
]

const steps = [
  {
    title: 'Import your assets',
    detail: 'Drop in clips, audio, and brand kits. Streamway auto-organizes files into a ready-to-edit workspace.',
  },
  {
    title: 'Design your flow',
    detail: 'Use modular blocks to build a narrative path with sections for hooks, proof, demos, and conversion.',
  },
  {
    title: 'Launch and optimize',
    detail: 'Publish once, then use behavior signals to refine messaging and boost performance every week.',
  },
]

export default function Home() {
  return (
    <div className={styles.page} id="top">
      <div className={styles.backdrop} aria-hidden />

      <header className={styles.navbar}>
        <a href="/" className={styles.brand}>
          Streamway
        </a>

        <nav className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="#demo" className={styles.navCta}>
          Book a Demo
        </a>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Audience-first streaming campaigns</p>
            <h1>
              Launch immersive streams that drive{' '}
              <span>more qualified buyers</span>
            </h1>
            <p className={styles.subcopy}>
              Streamway helps growth teams publish cinematic landing experiences
              in days, not months. Keep brand control, personalize every
              journey, and scale without design debt.
            </p>

            <div className={styles.heroActions}>
              <a href="#demo" className={styles.primaryButton}>
                Start Free Trial
              </a>
              <a href="#features" className={styles.secondaryButton}>
                See Product Tour
              </a>
            </div>

            <div className={styles.trustRow}>
              <span>Trusted by teams at:</span>
              <p>Northline Media</p>
              <p>Arc Labs</p>
              <p>Brightforge</p>
            </div>
          </div>

          <div className={styles.heroPanel} id="demo">
            <p className={styles.panelHeading}>Live Campaign Snapshot</p>
            <h2>Spring Product Launch</h2>
            <div className={styles.panelMetrics}>
              {trustMetrics.map((metric) => (
                <div key={metric.label} className={styles.metricBox}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.timeline}>
              <div>
                <p>Hook Segment</p>
                <span>00:00 - 00:18</span>
              </div>
              <div>
                <p>Proof Module</p>
                <span>00:19 - 01:45</span>
              </div>
              <div>
                <p>Offer Reveal</p>
                <span>01:46 - 02:21</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.featureSection} id="features">
          <div className={styles.sectionHeading}>
            <p>Why teams switch to Streamway</p>
            <h2>Everything you need to ship conversion-focused stream pages</h2>
          </div>

          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.workflowSection} id="workflow">
          <div className={styles.sectionHeading}>
            <p>Simple workflow</p>
            <h2>Go from raw media to polished landing stream in 3 steps</h2>
          </div>

          <div className={styles.stepGrid}>
            {steps.map((step, index) => (
              <article key={step.title} className={styles.stepCard}>
                <p className={styles.stepCount}>0{index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.testimonial}>
          <p>
            "We replaced a static launch page with Streamway and doubled our
            qualified demo bookings in less than 30 days."
          </p>
          <span>Leah Morgan, Growth Lead at Northline Media</span>
        </section>

        <section className={styles.ctaSection} id="pricing">
          <h2>Ready to turn passive views into active pipeline?</h2>
          <p>
            Start with a free trial, invite your team, and launch your first
            personalized stream page this week.
          </p>
          <a href="#demo" className={styles.primaryButton}>
            Build Your First Campaign
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>2026 Streamway. Built for modern growth teams.</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}
