"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroScrollLogo from "@/app/components/hero-scroll-logo";

export default function HomeHeroScene({ shopInfo }) {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const skullY = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const skullRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const heroItem = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="home-hero"
      aria-label="Welcome to Dark Tower Tattoo"
    >
      <motion.div
        className="home-hero-bg"
        style={prefersReducedMotion ? undefined : { y: bgY, scale: bgScale }}
      />
      <motion.img
        src="/skull.png"
        alt=""
        className="home-hero-skull"
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { y: skullY, rotate: skullRotate }}
      />

      <motion.div
        className="home-hero-content"
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? undefined : "show"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.09,
              delayChildren: 0.14
            }
          }
        }}
      >
        <motion.div variants={heroItem}>
          <HeroScrollLogo />
        </motion.div>
        <motion.span className="home-hero-eyebrow" variants={heroItem}>
          Troy, New York · Est. in the 518
        </motion.span>
        <motion.p className="home-hero-sub" variants={heroItem}>
          Walk in for bold flash, book in for fully custom work, and head out with
          something that feels like it belongs to you.
        </motion.p>
        <motion.p className="home-hero-kicker" variants={heroItem}>
          {shopInfo.address} · Mon - Sat 11a - 8p · Sun by appointment only
        </motion.p>

        <motion.div className="home-hero-actions" variants={heroItem}>
          <a href={`tel:${shopInfo.phoneLink}`} className="home-pill home-pill-primary">
            Call the Shop
          </a>
          <Link href="/artists" className="home-pill">
            Meet the Artists
          </Link>
        </motion.div>

        <motion.div
          className="home-quickbar"
          aria-label="Quick actions"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          <motion.a
            href={`tel:${shopInfo.phoneLink}`}
            className="home-quickcard"
            variants={heroItem}
          >
            <span className="home-quickcard-label">Call the Shop</span>
            <div className="home-quickcard-title">{shopInfo.phoneDisplay}</div>
            <p className="home-quickcard-copy">
              Talk to the shop directly about walk-ins, consults, and availability.
            </p>
          </motion.a>
          <motion.a
            href={shopInfo.piercingBooking}
            target="_blank"
            rel="noreferrer"
            className="home-quickcard"
            variants={heroItem}
          >
            <span className="home-quickcard-label">Book with Gina</span>
            <div className="home-quickcard-title">Professional piercing appointments</div>
            <p className="home-quickcard-copy">
              Direct booking for piercing services with Gina Carbone.
            </p>
          </motion.a>
          <motion.a
            href={shopInfo.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="home-quickcard"
            variants={heroItem}
          >
            <span className="home-quickcard-label">Get Directions</span>
            <div className="home-quickcard-title">564 Hoosick St, Troy NY</div>
            <p className="home-quickcard-copy">
              Easy mobile jump-off for directions when someone is ready to head over.
            </p>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
