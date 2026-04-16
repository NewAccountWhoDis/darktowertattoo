import Link from "next/link";
import HomeHeader from "@/app/components/home-header";
import HeroScrollLogo from "@/app/components/hero-scroll-logo";
import { artists, shopInfo } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main className="home-page">
      <HomeHeader phoneDisplay={shopInfo.phoneDisplay} phoneLink={shopInfo.phoneLink} />

      <section id="hero" className="home-hero" aria-label="Welcome to Dark Tower Tattoo">
        <div className="home-hero-bg" />
        <img src="/skull.png" alt="" className="home-hero-skull" aria-hidden="true" />

        <div className="home-hero-content">
          <HeroScrollLogo />
          <span className="home-hero-eyebrow">Troy, New York · Est. in the 518</span>
          <p className="home-hero-sub">
            Walk in for bold flash, book in for fully custom work, and head out with
            something that feels like it belongs to you.
          </p>
          <p className="home-hero-kicker">
            {shopInfo.address} · Open daily 11am to 8pm · Walk-ins welcome
          </p>

          <div className="home-hero-actions">
            <a href={`tel:${shopInfo.phoneLink}`} className="home-pill home-pill-primary">
              Call the Shop
            </a>
            <Link href="/artists" className="home-pill">
              Meet the Artists
            </Link>
          </div>

          <div className="home-quickbar" aria-label="Quick actions">
            <a href={`tel:${shopInfo.phoneLink}`} className="home-quickcard">
              <span className="home-quickcard-label">Call the Shop</span>
              <div className="home-quickcard-title">{shopInfo.phoneDisplay}</div>
              <p className="home-quickcard-copy">
                Talk to the shop directly about walk-ins, consults, and availability.
              </p>
            </a>
            <a
              href={shopInfo.piercingBooking}
              target="_blank"
              rel="noreferrer"
              className="home-quickcard"
            >
              <span className="home-quickcard-label">Book with Gina</span>
              <div className="home-quickcard-title">Professional piercing appointments</div>
              <p className="home-quickcard-copy">
                Direct booking for piercing services with Gina Carbone.
              </p>
            </a>
            <a href={shopInfo.mapsUrl} target="_blank" rel="noreferrer" className="home-quickcard">
              <span className="home-quickcard-label">Get Directions</span>
              <div className="home-quickcard-title">564 Hoosick St, Troy NY</div>
              <p className="home-quickcard-copy">
                Easy mobile jump-off for directions when someone is ready to head over.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="home-section">
        <div className="container home-about-grid">
          <div className="home-about-text">
            <span className="home-section-label">Our Story</span>
            <div className="home-gold-rule home-gold-rule-left" />
            <h2 className="home-section-title">
              Built for the Work.
              <br />
              Built for Troy.
            </h2>

            <p>
              Dark Tower Tattoo is a unique and welcoming tattoo shop that specializes in
              custom designs. We believe your body is a canvas, and we are your artists.
              We take pride in our work and strive to create art that is as unique as you are.
            </p>
            <p>
              Our team of highly experienced professional artists are passionate about their
              craft and dedicated to giving you the best experience possible.
            </p>
            <p>
              Stop by to book an appointment today and let us turn your vision into a reality.
            </p>

            <blockquote className="home-highlight">
              &quot;We take pride in our work and strive to create art that is as unique as
              you are.&quot;
            </blockquote>

            <div className="home-about-actions">
              <Link href="/artists" className="home-pill home-pill-primary">
                See the Artists
              </Link>
              <a href={`tel:${shopInfo.phoneLink}`} className="home-pill">
                Call the Shop
              </a>
            </div>

            <div className="home-stat-bar">
              <div>
                <div className="home-stat-num">11-8</div>
                <div className="home-stat-label">Every Day</div>
              </div>
              <div>
                <div className="home-stat-num">Walk-In</div>
                <div className="home-stat-label">Always Welcome</div>
              </div>
              <div>
                <div className="home-stat-num">518</div>
                <div className="home-stat-label">Area Code Proud</div>
              </div>
            </div>
          </div>

          <div className="home-about-image">
            <div className="home-about-image-frame">
              <img src="/GARY.jpeg" alt="Gary Aldrich, Owner and Artist at Dark Tower Tattoo" />
            </div>
          </div>
        </div>
      </section>

      <section id="artists" className="home-section home-section-alt">
        <div className="container">
          <div className="home-centered-header">
            <span className="home-section-label">The Crew</span>
            <div className="home-gold-rule" />
            <h2 className="home-section-title">Meet the Artists</h2>
            <p className="home-section-intro">
              Four different lanes of work, one shop standard. Start with the artist whose
              style feels closest to the piece you want.
            </p>
          </div>

          <div className="home-artists-grid home-artists-grid--editorial">
            {artists.map((artist) => (
              <Link
                key={artist.slug}
                href={`/artists/${artist.slug}`}
                className="home-artist-card"
                aria-label={`View ${artist.name} artist page`}
              >
                <div className="home-artist-photo">
                  <img src={artist.portraitImage} alt={artist.name} />
                  <div className="home-artist-photo-overlay" aria-hidden="true" />
                </div>
                <div className="home-artist-info">
                  <h3 className="home-artist-name">{artist.name}</h3>
                  <p className="home-artist-role">{artist.role}</p>
                  <p className="home-artist-blurb">{artist.shortBio}</p>
                  <p className="home-artist-link-label">View gallery &amp; links</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="home-section">
        <div className="container">
          <div className="home-centered-header">
            <span className="home-section-label">What We Do</span>
            <div className="home-gold-rule" />
            <h2 className="home-section-title">Services</h2>
          </div>

          <div className="home-services-grid">
            <div className="home-service-card home-service-card--tattoo">
              <div className="home-service-kicker">Built for custom work</div>
              <div className="home-service-number">01</div>
              <h3 className="home-service-title">Custom Tattoos</h3>
              <p className="home-service-desc">
                No stock flash. Every design starts with your idea. The artists here draw
                for you: traditional, neo-traditional, realism, horror, blackwork,
                portraits, color, and cover-ups.
              </p>
              <div className="home-service-notes">
                <span>Sleeves</span>
                <span>Cover-Ups</span>
                <span>Large Scale</span>
              </div>
              <Link href="/artists" className="home-service-link">
                View Artists
              </Link>
            </div>

            <div className="home-service-card home-service-card--piercing">
              <div className="home-service-kicker">Precise placement</div>
              <div className="home-service-number">02</div>
              <h3 className="home-service-title">Body Piercing</h3>
              <p className="home-service-desc">
                Gina Carbone handles all piercing at Dark Tower. Professional,
                hygienic, and precise. From nostrils to ears to curated setups,
                book online or walk in and ask for Gina.
              </p>
              <div className="home-service-notes">
                <span>Ears</span>
                <span>Nostrils</span>
                <span>Jewelry</span>
              </div>
              <a
                href={shopInfo.piercingBooking}
                target="_blank"
                rel="noreferrer"
                className="home-service-link"
              >
                Book Piercing
              </a>
            </div>

            <div className="home-service-card home-service-card--merch">
              <div className="home-service-kicker">Take the shop with you</div>
              <div className="home-service-number">03</div>
              <h3 className="home-service-title">DTT Merch</h3>
              <p className="home-service-desc">
                Hoodies, hats, jewelry, stickers, and more Dark Tower gear.
                Stop in the shop to see what&apos;s in stock. New designs drop regularly.
              </p>
              <div className="home-service-notes">
                <span>Hoodies</span>
                <span>Stickers</span>
                <span>Jewelry</span>
              </div>
              <a href="#contact" className="home-service-link">
                Find the Shop
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="home-section">
        <div className="container home-contact-grid">
          <div className="home-contact-info">
            <span className="home-section-label">Find Us</span>
            <div className="home-gold-rule home-gold-rule-left" />
            <h2 className="home-section-title">
              Hours &amp;
              <br />
              Location
            </h2>

            <p>
              Walk-in or call ahead. Either way, there&apos;s an artist here every day
              of the week.
            </p>

            <table className="home-hours-table" aria-label="Business hours">
              <tbody>
                <tr>
                  <td>Open Daily</td>
                  <td>11am – 8pm</td>
                </tr>
              </tbody>
            </table>
            <p className="home-hours-note">*Shop hours may vary - call ahead to confirm.</p>

            <div className="home-contact-details">
              <div className="home-contact-item">
                <span className="home-contact-item-label">Address</span>
                <a href={shopInfo.mapsUrl} target="_blank" rel="noreferrer" className="home-contact-item-value">
                  {shopInfo.addressFull}
                </a>
              </div>
              <div className="home-contact-item">
                <span className="home-contact-item-label">Phone</span>
                <a href={`tel:${shopInfo.phoneLink}`} className="home-contact-item-value">
                  {shopInfo.phoneDisplay}
                </a>
              </div>
              <div className="home-contact-item">
                <span className="home-contact-item-label">Piercing Booking</span>
                <a
                  href={shopInfo.piercingBooking}
                  target="_blank"
                  rel="noreferrer"
                  className="home-contact-item-value"
                >
                  Book with Gina Online
                </a>
              </div>
            </div>

            <div className="home-contact-social-wrap">
              <span className="home-contact-item-label">Follow Us</span>
              <div className="home-contact-social">
                <a href={shopInfo.instagram} target="_blank" rel="noreferrer" className="home-social-icon" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href={shopInfo.facebook} target="_blank" rel="noreferrer" className="home-social-icon" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="home-contact-map">
            <div className="home-map-frame">
              <iframe
                src={shopInfo.mapsEmbed}
                title="Dark Tower Tattoo location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="home-map-overlay" aria-hidden="true" />
            </div>
            <div className="home-map-info">
              <p className="home-map-address">564 Hoosick St · Troy, NY 12180</p>
              <a href={shopInfo.mapsUrl} target="_blank" rel="noreferrer" className="home-pill">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="home-aftercare-banner">
        <div className="container home-aftercare-inner">
          <p className="home-aftercare-text">
            <strong>New tattoo or piercing?</strong> Proper aftercare keeps your work
            looking sharp for life. Ask your artist before you leave.
          </p>
          <a href="/aftercare" className="home-pill">
            Aftercare Info
          </a>
        </div>
      </div>

      <footer className="home-footer">
        <div className="container">
          <div className="home-footer-grid">
            <div className="home-footer-brand">
              <img src="/DTT Logo v2.png" alt="Dark Tower Tattoo" />
              <p className="home-footer-tagline">
                Custom tattoos and professional piercing in Troy, New York.
                Walk-ins welcome, 7 days a week.
              </p>
            </div>

            <div>
              <p className="home-footer-col-title">Navigate</p>
              <div className="home-footer-links">
                <a href="#about">About the Shop</a>
                <Link href="/artists">Artists &amp; Piercers</Link>
                <a href="#services">Services</a>
                <a href="#contact">Hours &amp; Location</a>
                <Link href="/aftercare">Aftercare</Link>
              </div>
            </div>

            <div>
              <p className="home-footer-col-title">Contact</p>
              <div className="home-footer-links">
                <a href={`tel:${shopInfo.phoneLink}`}>{shopInfo.phoneDisplay}</a>
                <a href={shopInfo.mapsUrl} target="_blank" rel="noreferrer">
                  {shopInfo.addressFull}
                </a>
                <a href={shopInfo.piercingBooking} target="_blank" rel="noreferrer">
                  Book Piercing Online
                </a>
                <span>Open Daily 11am - 8pm</span>
              </div>
            </div>
          </div>

          <div className="home-footer-bottom">
            <p>© 2026 Dark Tower Tattoo · Troy, NY · All Rights Reserved</p>
            <p>564 Hoosick St · Troy, NY 12180 · {shopInfo.phoneDisplay}</p>
            <p className="home-footer-credit">
              Designed By{" "}
              <a href="https://www.meeetmister.black" target="_blank" rel="noreferrer">
                JxB
              </a>
            </p>
          </div>
        </div>
      </footer>

      <div className="home-mobile-dock" aria-label="Mobile quick actions">
        <div className="home-mobile-dock-grid">
          <a href={`tel:${shopInfo.phoneLink}`}>Call</a>
          <a href={shopInfo.piercingBooking} target="_blank" rel="noreferrer">
            Book
          </a>
          <a href={shopInfo.mapsUrl} target="_blank" rel="noreferrer">
            Directions
          </a>
        </div>
      </div>
    </main>
  );
}
