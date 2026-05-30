import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suyog Transport — Goods Carriers across Navi Mumbai, Thane, Palghar & Pune",
  description:
    "Reliable goods transport, part loads & relocation across Navi Mumbai, Thane, Palghar and Pune. From a Mahindra Maxx Pickup to a 19ft Eicher 1109. Get a free quote today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
