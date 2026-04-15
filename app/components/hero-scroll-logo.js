"use client";

import { useEffect, useState } from "react";

export default function HeroScrollLogo() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let frameId = null;

    const updateRotation = () => {
      const nextRotation = window.scrollY * 0.22;
      setRotation(nextRotation);
      frameId = null;
    };

    const onScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateRotation);
    };

    updateRotation();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <img
      src="/Dark Tower Logo wht.png"
      alt="Dark Tower Tattoo"
      className="home-hero-logo"
      style={{ transform: `rotate(${rotation}deg)` }}
    />
  );
}
