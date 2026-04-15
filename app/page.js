import Link from "next/link";
import { artists, shopInfo } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main>
      <section className="hero-shell">
        <div className="container topbar">
          <Link href="/" className="brand">
            <img src="/Dark Tower Logo wht.png" alt="Dark Tower Tattoo logo" />
            <span>
              Dark Tower Tattoo
              <strong>Troy, New York</strong>
            </span>
          </Link>
          <nav className="top-links">
            <a href="#artists">Artists</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Custom Tattooing and Professional Piercing</p>
            <h1>Dark, polished, custom work built for Troy.</h1>
            <p className="lede">
              {shopInfo.name} brings together tattoo artists and piercing services
              under one roof, with galleries, direct artist links, and walk-in
              friendly shop contact.
            </p>
            <div className="button-row">
              <a className="button button-primary" href={`tel:${shopInfo.phoneLink}`}>
                Call the Shop
              </a>
              <Link className="button" href="/artists">
                View Artists
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <img src="/skull.png" alt="Dark Tower Tattoo skull artwork" />
          </div>
        </div>
      </section>

      <section className="section" id="artists">
        <div className="container section-header">
          <p className="eyebrow">Artists</p>
          <h2>Meet the crew</h2>
          <p className="section-copy">
            Each profile now lives on its own route, which makes the site much
            easier to maintain in Next.js and much cleaner to deploy.
          </p>
        </div>
        <div className="container artist-grid">
          {artists.map((artist) => (
            <article key={artist.slug} className="artist-card">
              <img src={artist.portraitImage} alt={artist.name} />
              <div className="artist-card-copy">
                <p className="artist-role">{artist.role}</p>
                <h3>{artist.name}</h3>
                <p>{artist.shortBio}</p>
                <Link href={`/artists/${artist.slug}`} className="inline-link">
                  Open profile
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt" id="contact">
        <div className="container contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Visit the shop</h2>
            <p className="section-copy">
              {shopInfo.address}
              <br />
              {shopInfo.hours}
            </p>
          </div>
          <div className="button-row">
            <a className="button button-primary" href={`tel:${shopInfo.phoneLink}`}>
              {shopInfo.phoneDisplay}
            </a>
            <a className="button" href={shopInfo.instagram} target="_blank" rel="noreferrer">
              Shop Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
