"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

export default function ArtistFanSelector({ artists }) {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState("");
  const [viewportWidth, setViewportWidth] = useState(1400);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsReady(true);
    }, 120);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);

    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const fanLayout = useMemo(() => {
    if (viewportWidth <= 640) {
      return [
        { rotate: -17, x: -106, y: 18, zIndex: 1 },
        { rotate: -6, x: -34, y: -6, zIndex: 3 },
        { rotate: 6, x: 34, y: -6, zIndex: 4 },
        { rotate: 17, x: 106, y: 18, zIndex: 2 }
      ];
    }

    if (viewportWidth <= 900) {
      return [
        { rotate: -18, x: -172, y: 16, zIndex: 1 },
        { rotate: -7, x: -58, y: -12, zIndex: 3 },
        { rotate: 7, x: 58, y: -12, zIndex: 4 },
        { rotate: 18, x: 172, y: 16, zIndex: 2 }
      ];
    }

    return [
      { rotate: -20, x: -270, y: 10, zIndex: 1 },
      { rotate: -7, x: -95, y: -20, zIndex: 3 },
      { rotate: 7, x: 95, y: -20, zIndex: 4 },
      { rotate: 20, x: 270, y: 10, zIndex: 2 }
    ];
  }, [viewportWidth]);

  const onSelectArtist = (event) => {
    const nextSlug = event.target.value;
    setSelectedSlug(nextSlug);

    if (nextSlug) {
      router.push(`/artists/${nextSlug}`);
    }
  };

  const selectArtistFromMenu = (slug) => {
    setSelectedSlug(slug);
    setIsMobileMenuOpen(false);
    router.push(`/artists/${slug}`);
  };

  return (
    <div className="artist-fan-shell">
      <div className="artist-fan-stage">
        <motion.div
          className="artist-fan-ring"
          aria-hidden="true"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1, 1.018, 1],
                  opacity: [0.72, 1, 0.72],
                  rotate: [0, 2, 0]
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
          }
        />

        {artists.map((artist, index) => {
          const layout = fanLayout[index] || fanLayout[fanLayout.length - 1];

          return (
            <motion.div
              key={artist.slug}
              className="artist-fan-card-wrap"
              initial={{ x: 0, y: 24, rotate: 0, opacity: 0 }}
              animate={
                isReady
                  ? {
                      x: layout.x,
                      y: layout.y,
                      rotate: layout.rotate,
                      opacity: 1
                    }
                  : {
                      x: 0,
                      y: 24,
                      rotate: 0,
                      opacity: 0
                  }
              }
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: layout.y - 22,
                      rotate: layout.rotate * 0.82,
                      rotateX: -5,
                      rotateY: index < 2 ? -7 : 7,
                      scale: 1.03
                    }
              }
              whileFocus={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: layout.y - 22,
                      rotate: layout.rotate * 0.82,
                      rotateX: -5,
                      rotateY: index < 2 ? -7 : 7,
                      scale: 1.03
                    }
              }
              transition={{
                duration: 0.9,
                delay: 0.12 + index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{ zIndex: layout.zIndex }}
            >
              <Link href={`/artists/${artist.slug}`} className="artist-fan-card">
                <img src={artist.portraitImage} alt={artist.name} />
                <div className="artist-fan-overlay" aria-hidden="true" />
                <div className="artist-fan-copy">
                  <h2>{artist.name}</h2>
                  <p>{artist.role}</p>
                  <span>Open profile</span>
                </div>
              </Link>
            </motion.div>
          );
        })}

        <div className="artist-fan-selector">
          <label htmlFor="artist-select" className="artist-fan-selector__label">
            Choose by name
          </label>
          <select
            id="artist-select"
            className="artist-fan-selector__input"
            value={selectedSlug}
            onChange={onSelectArtist}
          >
            <option value="">Select an artist</option>
            {artists.map((artist) => (
              <option key={artist.slug} value={artist.slug}>
                {artist.name}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="artist-fan-selector__trigger"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {selectedSlug ? artists.find((artist) => artist.slug === selectedSlug)?.name : "Select an artist"}
          </button>

          <div className={`artist-fan-selector__menu ${isMobileMenuOpen ? "is-open" : ""}`}>
            {artists.map((artist) => (
              <button
                key={artist.slug}
                type="button"
                className="artist-fan-selector__option"
                onClick={() => selectArtistFromMenu(artist.slug)}
              >
                <span>{artist.name}</span>
                <small>{artist.role}</small>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
