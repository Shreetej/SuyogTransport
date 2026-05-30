"use client";

import { FormEvent, useState } from "react";
import { ArrowIcon, CheckIcon } from "./Icons";

const REQUIRED = ["name", "phone", "pickup", "drop"] as const;

export default function EnquiryForm({ waNumber }: { waNumber: string }) {
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);

  function validate(form: HTMLFormElement) {
    const errs: Record<string, boolean> = {};
    REQUIRED.forEach((n) => {
      const input = form.elements.namedItem(n) as HTMLInputElement;
      let valid = input.value.trim().length > 0;
      if (n === "phone") {
        const raw = input.value.trim();
        valid = /^[0-9+\s-]{10,15}$/.test(raw) && raw.replace(/\D/g, "").length >= 10;
      }
      if (!valid) errs[n] = true;
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) {
      const firstErrName = REQUIRED.find((n) => errors[n] || form.elements.namedItem(n));
      if (firstErrName) {
        const el = form.elements.namedItem(firstErrName) as HTMLInputElement | null;
        el?.focus();
      }
      return;
    }
    const d = form.elements as unknown as Record<string, HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
    const msg =
      `*New enquiry — Suyog Transport*\n` +
      `Name: ${d.name.value}\n` +
      `Phone: ${d.phone.value}\n` +
      `Pickup: ${d.pickup.value}\n` +
      `Drop: ${d.drop.value}\n` +
      `Service: ${d.service.value}\n` +
      `Vehicle: ${d.vehicle.value}\n` +
      `Details: ${d.message.value || "-"}`;
    setSent(true);
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  function clearErr(name: string) {
    if (!errors[name]) return;
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  if (sent) {
    return (
      <div className="form-card reveal d2">
        <div className="form-success show">
          <span className="check">
            <CheckIcon />
          </span>
          <h3>Enquiry received!</h3>
          <p>
            Thanks — we'll call you back shortly with a quote. We've also opened WhatsApp so you can send it instantly.
          </p>
          <a
            href="#top"
            className="btn btn-dark"
            onClick={() => setTimeout(() => setSent(false), 400)}
          >
            Back to top
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card reveal d2">
      <form onSubmit={onSubmit} noValidate>
        <h3>Request a free quote</h3>
        <p className="sub">
          Fields marked <span className="accent">*</span> are required.
        </p>
        <div className="form-grid">
          <div className={`field${errors.name ? " error" : ""}`}>
            <label>
              Your name <span className="req">*</span>
            </label>
            <input type="text" name="name" placeholder="e.g. Rohan Kulkarni" onInput={() => clearErr("name")} />
            <span className="err">Please enter your name.</span>
          </div>
          <div className={`field${errors.phone ? " error" : ""}`}>
            <label>
              Phone <span className="req">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="10-digit mobile"
              inputMode="numeric"
              onInput={() => clearErr("phone")}
            />
            <span className="err">Enter a valid 10-digit number.</span>
          </div>
          <div className={`field${errors.pickup ? " error" : ""}`}>
            <label>
              Pickup location <span className="req">*</span>
            </label>
            <input
              type="text"
              name="pickup"
              placeholder="e.g. Bhiwandi, Thane"
              onInput={() => clearErr("pickup")}
            />
            <span className="err">Where should we pick up?</span>
          </div>
          <div className={`field${errors.drop ? " error" : ""}`}>
            <label>
              Drop location <span className="req">*</span>
            </label>
            <input
              type="text"
              name="drop"
              placeholder="e.g. Panvel, Raigad"
              onInput={() => clearErr("drop")}
            />
            <span className="err">Where are we delivering?</span>
          </div>
          <div className="field">
            <label>Service</label>
            <select name="service" defaultValue="Full Truck Load (FTL)">
              <option>Full Truck Load (FTL)</option>
              <option>Part Load (LTL)</option>
              <option>Packers &amp; Movers</option>
              <option>Industrial / Project cargo</option>
              <option>Warehousing &amp; storage</option>
              <option>Not sure — advise me</option>
            </select>
          </div>
          <div className="field">
            <label>Vehicle type</label>
            <select name="vehicle" defaultValue="Recommend for me">
              <option>Recommend for me</option>
              <option>Mahindra Maxx Pickup</option>
              <option>Tata Intra</option>
              <option>Mahindra Bolero Pickup</option>
              <option>Tata 407</option>
              <option>Eicher 1109</option>
            </select>
          </div>
          <div className="field full">
            <label>What are you moving?</label>
            <textarea name="message" placeholder="Goods type, approx. weight, preferred date…" />
          </div>
          <div className="form-submit">
            <button type="submit" className="btn btn-primary">
              Send enquiry
              <ArrowIcon />
            </button>
            <span className="note">or it opens prefilled on WhatsApp →</span>
          </div>
        </div>
      </form>
    </div>
  );
}
