
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationItems, siteData } from "@/data/siteData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}`;
  
  

  return (
    <header className="sticky top-0 z-50 border-b border-green-900/10 bg-[#F7F5EF]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

         
<Link
  href="#inicio"
  className="flex items-center"
  onClick={() => setMenuOpen(false)}
>
  <Image
    src="/images/logo-psiquiatria4.png"
    alt="Psiquiatría con Café"
    width={500}
    height={500}
    priority
    className="h-20 w-auto object-contain md:h-20"
  />
</Link>


        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-[#344D3D] md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-5 border-b border-green-900/10 bg-[#F7F5EF] px-6 py-6 shadow-lg md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[#344D3D] transition-colors hover:text-[#879B83]"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#526B50] px-5 py-3 text-center font-medium text-white transition-colors hover:bg-[#344D3D]"
          >
            Contactar
          </a>
        </div>

      </nav>
    </header>
  );
}

