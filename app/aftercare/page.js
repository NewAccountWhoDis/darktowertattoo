import Link from "next/link";
import { shopInfo } from "@/lib/site-data";

export const metadata = {
  title: "Aftercare | Dark Tower Tattoo",
  description:
    "Tattoo aftercare instructions from Dark Tower Tattoo in Troy, NY. How to care for your new tattoo so it heals sharp and lasts.",
};

export default function AftercarePage() {
  return (
    <main className="aftercare-page">
      <div className="aftercare-top-bar">
        <Link href="/" className="aftercare-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to Home
        </Link>
      </div>

      <section className="aftercare-hero">
        <span className="aftercare-eyebrow">Dark Tower Tattoo</span>
        <h1 className="aftercare-title">Tattoo Aftercare</h1>
        <p className="aftercare-subtitle">
          How you care for your tattoo in the first few weeks determines how it looks for life.
          Follow these steps carefully.
        </p>
      </section>

      <section className="aftercare-body">
        <div className="container aftercare-grid">
          <div className="aftercare-steps">

            <div className="aftercare-step">
              <div className="aftercare-step-num">01</div>
              <div className="aftercare-step-content">
                <h2>Remove the bandage and wash</h2>
                <p>
                  Wear your bandage for around 1 hour, then remove it and wash the tattoo
                  gently with Dial Antibacterial Soap.
                </p>
              </div>
            </div>

            <div className="aftercare-step">
              <div className="aftercare-step-num">02</div>
              <div className="aftercare-step-content">
                <h2>Pat dry — don&apos;t rub</h2>
                <p>
                  Gently pat dry with a paper towel. Do not rub back and forth.
                </p>
              </div>
            </div>

            <div className="aftercare-step">
              <div className="aftercare-step-num">03</div>
              <div className="aftercare-step-content">
                <h2>Apply a thin layer of A&amp;D ointment</h2>
                <p>
                  Apply a <strong>very thin</strong> layer of vitamin A&amp;D ointment to your
                  tattoo a few minutes after washing. Pat off any excess — you should have no
                  buildup of ointment on your tattoo.
                </p>
              </div>
            </div>

            <div className="aftercare-step">
              <div className="aftercare-step-num">04</div>
              <div className="aftercare-step-content">
                <h2>Repeat 2–3 times daily</h2>
                <p>
                  Wash your new tattoo 2 to 3 times daily as described above and re-apply
                  A&amp;D ointment as needed.
                </p>
              </div>
            </div>

            <div className="aftercare-divider" aria-hidden="true" />

            <h3 className="aftercare-warnings-title">What to avoid</h3>

            <div className="aftercare-warnings">
              <div className="aftercare-warning">
                <div className="aftercare-warning-icon" aria-hidden="true">✕</div>
                <div>
                  <strong>Do not pick scabs.</strong> Picking will cause your tattoo to bleed
                  and pull ink out of your skin.
                </div>
              </div>

              <div className="aftercare-warning">
                <div className="aftercare-warning-icon" aria-hidden="true">✕</div>
                <div>
                  <strong>Avoid fragranced products.</strong> No bodywash, lotions, or
                  shampoos that contain fragrances.
                </div>
              </div>

              <div className="aftercare-warning">
                <div className="aftercare-warning-icon" aria-hidden="true">✕</div>
                <div>
                  <strong>No swimming or hot tubs</strong> for at least 2 weeks.
                </div>
              </div>

              <div className="aftercare-warning">
                <div className="aftercare-warning-icon" aria-hidden="true">✕</div>
                <div>
                  <strong>Avoid direct sun exposure</strong> on the tattoo while it heals.
                </div>
              </div>
            </div>
          </div>

          <aside className="aftercare-sidebar">
            <div className="aftercare-sidebar-card">
              <p className="aftercare-sidebar-label">Questions?</p>
              <p className="aftercare-sidebar-body">
                Ask your artist before you leave the shop. They can walk you through
                anything specific to your piece.
              </p>
              <a href={`tel:${shopInfo.phoneLink}`} className="home-pill home-pill-primary aftercare-cta">
                Call the Shop
              </a>
            </div>

            <div className="aftercare-sidebar-card aftercare-sidebar-card--hours">
              <p className="aftercare-sidebar-label">Shop Hours</p>
              <p className="aftercare-sidebar-hours">Mon - Sat 11a - 8p<br />Sun by appointment only</p>
              <p className="aftercare-sidebar-note">Walk-ins welcome · {shopInfo.address}</p>
            </div>
          </aside>
        </div>
      </section>

      <footer className="aftercare-footer">
        <div className="container aftercare-footer-inner">
          <img src="/DTT Logo v2.png" alt="Dark Tower Tattoo" className="aftercare-footer-logo" />
          <p>© 2026 Dark Tower Tattoo · Troy, NY · {shopInfo.phoneDisplay}</p>
          <Link href="/" className="home-pill">Back to Home</Link>
        </div>
      </footer>
    </main>
  );
}
