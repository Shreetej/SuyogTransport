"use client";

import { useEffect } from "react";

export default function RevealController() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const steps = Array.from(document.querySelectorAll(".step"));
    if (!steps.length) return;
    const sio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            steps.forEach((s) => s.classList.remove("active"));
            e.target.classList.add("active");
          }
        });
      },
      { threshold: 0.6 }
    );
    steps.forEach((s) => sio.observe(s));
    return () => sio.disconnect();
  }, []);

  return null;
}
