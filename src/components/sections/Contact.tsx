
import { siteData } from "@/data/siteData";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
    siteData.messages.whatsapp
  )}`;

  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-[#344D3D] px-5 py-10 md:py-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Cuadro único semitransparente */}
        <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-8 md:px-10 md:py-10">

          {/* Encabezado */}
          <div className="mb-7 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DCE6D9]">
              Estamos para escucharte
            </span>

            <h2 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
              Tu bienestar importa
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#E5E9E1]">
              Si deseas información sobre los servicios o consultas virtuales,
              puedes comunicarte directamente.
            </p>
          </div>

          {/* Botones */}
          <div className="mb-7 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#DCE6D9] px-6 py-3 text-sm font-semibold text-[#344D3D] transition hover:bg-white"
            >
              WhatsApp
            </a>

            <a
              href={`mailto:${siteData.contact.email}`}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Enviar correo
            </a>

            <a
              href={`tel:${siteData.contact.phone}`}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Llamar
            </a>
          </div>

          {/* Datos de contacto */}
          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-center">
              <p className="text-xs text-[#DCE6D9]">Teléfono</p>
              <a
                href={`tel:${siteData.contact.phone}`}
                className="mt-1 block text-sm font-semibold text-white hover:underline"
              >
                +505 5872-9020
              </a>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-center">
              <p className="text-xs text-[#DCE6D9]">
                Correo electrónico
              </p>
              <a
                href={`mailto:${siteData.contact.email}`}
                className="mt-1 block break-all text-sm font-semibold text-white hover:underline"
              >
                {siteData.contact.email}
              </a>
            </div>
          </div>

          {/* Modalidad virtual */}
          <div className="mt-6 text-center">
            <p className="text-xs text-[#DCE6D9]">
              Atención exclusivamente virtual · Consultas mediante videoconferencia
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
