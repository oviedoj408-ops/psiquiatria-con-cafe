
"use client";

import { useEffect, useState } from "react";
import { siteData } from "@/data/siteData";

export default function FloatingContactBar() {
  const [visible, setVisible] = useState(false);

  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
    siteData.messages.whatsapp
  )}`;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 120) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#DCE6D9] bg-white/95 p-2 shadow-2xl backdrop-blur-md transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white hover:bg-[#1DA851]"
      >
        ☎ <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <a
        href={`tel:+${siteData.contact.phone}`}
        aria-label="Llamar"
        className="rounded-full bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
      >
        ☎ <span className="hidden sm:inline">Llamar</span>
      </a>

      <a
        href={`mailto:${siteData.contact.email}`}
        aria-label="Correo"
        className="rounded-full bg-[#526B50] px-5 py-3 font-semibold text-white hover:bg-[#344D3D]"
      >
        ✉ <span className="hidden sm:inline">Correo</span>
      </a>
    </div>
  );
}
