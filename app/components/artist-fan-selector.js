"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ArtistFanSelector({ artists }) {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState("");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsReady(true);
    }, 120);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const fanLayout = useMemo(
    () => [
      { rotate: -20, x: -270, y: 10, zIndex: 1 },
      { rotate: -7, x: -95, y: -20, zIndex: 3 },
      { rotate: 7, x: 95, y: -20, zIndex: 4 },
      { rotate: 20, x: 270, y: 10, zIndex: 2 }
    ],
    []
  );

  const onSelectArtist = (event) => {
    const nextSlug = event.target.value;
    setSelectedSlug(nextSlug);

    if (nextSlug) {
      router.push(`/artists/${nextSlug}`);
    }
  };

  return (
    <div className="artist-fan-shell">
      <div className="artist-fan-stage">
        <div className="artist-fan-ring" aria-hidden="true" />

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
        </div>
      </div>
    </div>
  );
}
