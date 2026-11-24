
import { siteData } from "@/data/siteData";

export default function ContactActions() {
  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
    siteData.messages.whatsapp
  )}`;

  return (
    <div className="flex flex-wrap items-center gap-3">

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1DA851]"
      >
        WhatsApp
      </a>

      {/* Llamada */}
      <a
        href={`tel:+${siteData.contact.phone}`}
        className="rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
      >
        ☎ Llamar
      </a>

      {/* Correo */}
      <a
        href={`mailto:${siteData.contact.email}`}
        className="rounded-full bg-[#526B50] px-6 py-3 font-semibold text-white transition hover:bg-[#344D3D]"
      >
        ✉ Correo
      </a>

    </div>
  );
}
