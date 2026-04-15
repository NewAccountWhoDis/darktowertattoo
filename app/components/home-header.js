"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomeHeader({ phoneDisplay, phoneLink }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="home-nav" aria-label="Main navigation">
      <div className="home-nav-inner">
        <a href="#hero" className="home-nav-logo" aria-label="Dark Tower Tattoo Home" onClick={closeMenu}>
          <img src="/DTT Logo v2.png" alt="Dark Tower Tattoo logo" />
          <div className="home-nav-logo-text">Dark Tower Tattoo</div>
        </a>

        <div className="home-nav-links">
          <a href="#about">About</a>
          <Link href="/artists">Artists</Link>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <a href={`tel:${phoneLink}`} className="home-pill home-pill-primary">
          {phoneDisplay}
        </a>

        <button
          type="button"
          className={`home-nav-toggle ${isOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`home-mobile-menu ${isOpen ? "is-open" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <Link href="/artists" onClick={closeMenu}>
          Artists
        </Link>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
        <a href={`tel:${phoneLink}`} className="home-mobile-menu__cta" onClick={closeMenu}>
          {phoneDisplay}
        </a>
      </div>
    </nav>
  );
}
