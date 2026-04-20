"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function AftercareGuide({ steps, warnings, shopInfo }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef(null);
  const stepNodesRef = useRef([]);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 0.8", "end 0.35"]
  });
  const railScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const nodes = stepNodesRef.current.filter(Boolean);

    if (!nodes.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visible.length > 0) {
          const nextIndex = Number(visible[0].target.getAttribute("data-step-index"));
          setActiveStep(nextIndex);
        }
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: [0.25, 0.5, 0.75]
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [steps.length]);

  const stepVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0 }
    }),
    []
  );

  return (
    <section className="aftercare-body">
      <div className="container aftercare-grid">
        <div className="aftercare-steps-wrap">
          <div className="aftercare-progress-rail" aria-hidden="true">
            <div className="aftercare-progress-track" />
            <motion.div
              className="aftercare-progress-fill"
              style={prefersReducedMotion ? undefined : { scaleY: railScaleY }}
            />
          </div>

          <div className="aftercare-steps" ref={stepsRef}>
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                ref={(node) => {
                  stepNodesRef.current[index] = node;
                }}
                data-step-index={index}
                className={`aftercare-step ${activeStep === index ? "is-active" : ""}`}
                initial={prefersReducedMotion ? false : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "show"}
                viewport={{ once: true, amount: 0.45 }}
                variants={stepVariants}
                transition={{
                  duration: 0.48,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="aftercare-step-num">{String(index + 1).padStart(2, "0")}</div>
                <div className="aftercare-step-content">
                  <h2>{step.title}</h2>
                  <p>{step.body}</p>
                </div>
              </motion.div>
            ))}

            <div className="aftercare-divider" aria-hidden="true" />

            <motion.h3
              className="aftercare-warnings-title"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              What to avoid
            </motion.h3>

            <div className="aftercare-warnings">
              {warnings.map((warning, index) => (
                <motion.div
                  key={warning.title}
                  className="aftercare-warning"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                >
                  <div className="aftercare-warning-icon" aria-hidden="true">X</div>
                  <div>
                    <strong>{warning.title}</strong> {warning.body}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <aside className="aftercare-sidebar">
          <motion.div
            className="aftercare-sidebar-card"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="aftercare-sidebar-label">Questions?</p>
            <p className="aftercare-sidebar-body">
              Ask your artist before you leave the shop. They can walk you through
              anything specific to your piece.
            </p>
            <a href={`tel:${shopInfo.phoneLink}`} className="home-pill home-pill-primary aftercare-cta">
              Call the Shop
            </a>
          </motion.div>

          <motion.div
            className="aftercare-sidebar-card aftercare-sidebar-card--hours"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="aftercare-sidebar-label">Shop Hours</p>
            <p className="aftercare-sidebar-hours">Mon - Sat 11a - 8p<br />Sun by appointment only</p>
            <p className="aftercare-sidebar-note">Walk-ins welcome · {shopInfo.address}</p>
          </motion.div>
        </aside>
      </div>
    </section>
  );
}
