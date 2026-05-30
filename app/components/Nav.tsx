"use client";

import { useEffect, useState } from "react";
import { PhoneIcon } from "./Icons";

const LINKS = [
  ["#services", "Services"],
  ["#fleet", "Fleet"],
  ["#routes", "Routes"],
  ["#how", "How it works"],
  ["#why", "Why us"],
] as const;

export default function Nav({ phone }: { phone: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="wrap">
          <a href="#top" className="logo">
            <span className="mark">S</span>
            <span className="name">
              SUYOG<span>TRANSPORT</span>
            </span>
          </a>
          <nav className="nav-links">
            {LINKS.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href={`tel:${phone}`} className="btn btn-ghost nav-call">
              <PhoneIcon />
              Call
            </a>
            <a href="#enquiry" className="btn btn-primary">
              Get a quote
            </a>
            <button
              className={`hamburger${open ? " open" : ""}`}
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={open}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`scrim${open ? " show" : ""}`} onClick={close} />
      <nav className={`mobile-menu${open ? " open" : ""}`}>
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={close}>
            {label}
          </a>
        ))}
        <a href="#enquiry" className="btn btn-primary" onClick={close}>
          Get a free quote
        </a>
        <a href={`https://wa.me/${phone.replace(/\D/g, "")}`} className="btn btn-wa" onClick={close}>
          WhatsApp us
        </a>
      </nav>
    </>
  );
}
