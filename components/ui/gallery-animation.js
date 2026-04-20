"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ExpandableGallery({
  images,
  artistName = "Artist",
  className = "",
  mobileColumns = false
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedIndex === null) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => (current + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => (current - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [images.length, selectedIndex]);

  const getFlexValue = (index) => {
    if (hoveredIndex === null) {
      return 1;
    }

    return hoveredIndex === index ? 2.4 : 0.6;
  };

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const goToNext = (event) => {
    event.stopPropagation();
    setSelectedIndex((current) => (current + 1) % images.length);
  };

  const goToPrev = (event) => {
    event.stopPropagation();
    setSelectedIndex((current) => (current - 1 + images.length) % images.length);
  };

  const onDragEnd = (_event, info) => {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;

    if (offsetX <= -70 || velocityX <= -500) {
      setSelectedIndex((current) => (current + 1) % images.length);
      return;
    }

    if (offsetX >= 70 || velocityX >= 500) {
      setSelectedIndex((current) => (current - 1 + images.length) % images.length);
    }
  };

  return (
    <LayoutGroup id={`gallery-${artistName}`}>
      <div className={className}>
      <div
        className={`expandable-gallery ${mobileColumns ? "expandable-gallery--mobile-columns" : ""}`}
      >
        {images.map((image, index) => (
          <motion.button
            key={image}
            type="button"
            className="expandable-gallery__item"
            style={{ flex: 1 }}
            animate={{ flex: getFlexValue(index) }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            onClick={() => openImage(index)}
          >
            <motion.img
              layoutId={`gallery-image-${artistName}-${index}`}
              src={image}
              alt={`${artistName} portfolio item ${index + 1}`}
              className="expandable-gallery__image"
            />
            <motion.div
              className="expandable-gallery__overlay"
              initial={false}
              animate={{ opacity: hoveredIndex === index ? 0.06 : 0.34 }}
              transition={{ duration: 0.25 }}
            />
            <div className="expandable-gallery__meta">
              <span>{artistName}</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null ? (
          <motion.div
            className="expandable-gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.div
              className="expandable-gallery-modal__backdrop-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.button
              type="button"
              className="expandable-gallery-modal__close"
              onClick={closeImage}
              aria-label="Close gallery image"
              initial={{ opacity: 0, y: -18, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.92 }}
              transition={{ duration: 0.32, delay: 0.08 }}
            >
              <X size={28} />
            </motion.button>

            {images.length > 1 ? (
              <motion.button
                type="button"
                className="expandable-gallery-modal__nav expandable-gallery-modal__nav--left"
                onClick={goToPrev}
                aria-label="Previous image"
                initial={{ opacity: 0, x: -30, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -16, scale: 0.92 }}
                transition={{ duration: 0.34, delay: 0.14 }}
              >
                <ChevronLeft size={34} />
              </motion.button>
            ) : null}

            <motion.div
              className="expandable-gallery-modal__content"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 32, scale: 0.9, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: 24, scale: 0.94, rotateX: 4 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              drag={images.length > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.14}
              onDragEnd={images.length > 1 ? onDragEnd : undefined}
            >
              <motion.div
                className="expandable-gallery-modal__image-frame"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.36, delay: 0.04 }}
              >
              <motion.img
                key={selectedIndex}
                layoutId={`gallery-image-${artistName}-${selectedIndex}`}
                src={images[selectedIndex]}
                alt={`${artistName} portfolio item ${selectedIndex + 1}`}
                className="expandable-gallery-modal__image"
                initial={{ opacity: 0, scale: 1.08, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              </motion.div>
              {images.length > 1 ? (
                <div className="expandable-gallery-modal__swipe-hint">
                  Swipe to browse
                </div>
              ) : null}
            </motion.div>

            {images.length > 1 ? (
              <motion.button
                type="button"
                className="expandable-gallery-modal__nav expandable-gallery-modal__nav--right"
                onClick={goToNext}
                aria-label="Next image"
                initial={{ opacity: 0, x: 30, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 16, scale: 0.92 }}
                transition={{ duration: 0.34, delay: 0.14 }}
              >
                <ChevronRight size={34} />
              </motion.button>
            ) : null}

            <motion.div
              className="expandable-gallery-modal__count"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.16 }}
            >
              {selectedIndex + 1} / {images.length}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}
