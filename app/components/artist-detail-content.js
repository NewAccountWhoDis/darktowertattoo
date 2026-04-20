"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ExpandableGallery from "@/components/ui/gallery-animation";

export default function ArtistDetailContent({ artist, shopInfo }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="page-shell">
      <section className="artist-hero">
        <motion.div
          className="artist-hero-media"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 6, 6, 0.2), rgba(6, 6, 6, 0.88)), url('${artist.heroImage}')`
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1, 1.04, 1.02],
                  x: [0, 10, -8],
                  y: [0, -10, 8]
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 18,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }
          }
        />
        <div className="artist-hero-overlay" aria-hidden="true" />
        <motion.div
          className="container artist-hero-content"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/artists" className="inline-link">
            Back to artists
          </Link>
          <p className="eyebrow">Dark Tower Tattoo</p>
          <h1>{artist.name}</h1>
          <p className="hero-subhead">{artist.role}</p>
        </motion.div>
      </section>

      <section className="section">
        <div className="container profile-grid">
          <motion.div
            className="profile-image-card"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -34, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={artist.portraitImage} alt={artist.name} />
          </motion.div>
          <motion.div
            className="profile-copy"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 34, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2>{artist.title}</h2>
            {artist.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="meta-block">
              <p>
                <span>Focus</span>
                {artist.focus}
              </p>
              <p>
                <span>Shop</span>
                {shopInfo.name} · {shopInfo.address}
              </p>
            </div>

            <div className="button-row">
              <a
                className="button button-primary"
                href={artist.primaryLink.href}
                target="_blank"
                rel="noreferrer"
              >
                {artist.primaryLink.label}
              </a>
              {(artist.secondaryLinks || []).map((link) => (
                <a
                  key={link.href}
                  className="button"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
              <a className="button" href={`tel:${shopInfo.phoneLink}`}>
                Call the Shop
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h2>Gallery</h2>
          <p className="section-copy">
            Hover to expand a piece, then click to open the full-screen gallery.
          </p>
          <ExpandableGallery
            images={artist.gallery}
            artistName={artist.name}
            className="artist-gallery-shell"
          />
        </div>
      </section>

      {artist.extraGallery ? (
        <section className="section">
          <div className="container">
            <p className="eyebrow">More Work</p>
            <h2>{artist.extraGalleryTitle}</h2>
            <p className="section-copy">{artist.extraGalleryIntro}</p>
            <ExpandableGallery
              images={artist.extraGallery}
              artistName={artist.name}
              className="artist-gallery-shell artist-gallery-shell--secondary"
              mobileColumns
            />
          </div>
        </section>
      ) : null}
    </main>
  );
}
