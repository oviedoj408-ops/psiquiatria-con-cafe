
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
    siteData.messages.whatsapp
  )}`;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#F7F5EF] px-6 py-16 md:py-24"
    >
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#DCE6D9]/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

        {/* Presentación profesional */}
        <div className="order-2 space-y-7 md:order-1">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#71876A]/30 bg-[#DCE6D9]/70 px-5 py-2 text-sm font-semibold text-[#344D3D]">
            <span className="h-2 w-2 rounded-full bg-[#526B50]" />
            {siteData.doctor.modality}
          </span>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#71876A]">
              Psiquiatría con Café
            </p>

            <h1 className="font-serif text-4xl font-bold leading-[1.15] text-[#344D3D] md:text-6xl">
              Tu salud mental también merece un espacio.
            </h1>

            <p className="max-w-xl text-lg leading-8 text-[#655D54]">
              Un espacio de escucha, orientación y acompañamiento
              profesional para cuidar de tu bienestar emocional.
            </p>
          </div>

          {/* Datos profesionales */}
          <div className="border-l-4 border-[#71876A] py-2 pl-5">
            <h2 className="text-2xl font-bold leading-snug text-[#344D3D]">
              {siteData.doctor.name}
            </h2>

            <p className="mt-2 font-medium text-[#526B50]">
              {siteData.doctor.specialty}
            </p>

            <p className="mt-1 text-sm leading-relaxed text-[#71876A]">
              {siteData.doctor.subspecialty}
            </p>

            <p className="mt-2 text-xs text-[#806B5B]">
              {siteData.doctor.license}
            </p>
          </div>

          {/* Contacto */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#526B50] px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#344D3D] hover:shadow-xl"
            >
              <span>Solicitar consulta virtual</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="text-xs leading-relaxed text-[#806B5B]">
            Atención exclusivamente por videollamada.
          </p>
        </div>

        {/* Fotografía profesional */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative w-full max-w-[430px]">

            {/* Marco decorativo */}
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2.5rem] border-2 border-[#71876A]" />

            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#DCE6D9]" />

            <div className="relative overflow-hidden rounded-[2.5rem] border-[7px] border-white bg-[#DCE6D9] shadow-2xl">
              <Image
                src={siteData.doctor.photo}
                alt={siteData.doctor.name}
                width={600}
                height={750}
                priority
                className="h-[430px] w-full object-cover object-top sm:h-[500px] md:h-[570px]"
              />
            </div>

            {/* Identificador visual */}
            <div className="absolute -bottom-5 right-4 rounded-2xl border border-[#DCE6D9] bg-white px-5 py-3 shadow-xl sm:right-[-15px]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#71876A]">
                Atención profesional
              </p>
              <p className="text-sm font-bold text-[#344D3D]">
                Psiquiatría y bienestar
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
