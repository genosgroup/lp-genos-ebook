"use client";

import { useEffect } from "react";

/**
 * Rolagem suave da roda do mouse, como o plugin "Mousewheel Smooth Scroll"
 * do WordPress original (mesmas opções).
 */
export default function PageEffects() {
  useEffect(() => {
    import("smoothscroll-for-websites").then(({ default: SmoothScroll }) => {
      SmoothScroll({
        frameRate: 150,
        animationTime: 1000,
        stepSize: 100,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: true,
        arrowScroll: 50,
      });
    });
  }, []);

  return null;
}
