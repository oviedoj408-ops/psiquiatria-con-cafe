
import { siteData, navigationItems } from "@/data/siteData";

export default function Footer() {
  const currentYear = 2026;
  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}`;

  return (
    <footer className="bg-[#263B2D] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

        {/* Identidad */}
        <div>
          <h2 className="font-serif text-2xl font-bold">
            {siteData.name}
          </h2>

          <p className="mt-4 max-w-sm leading-relaxed text-[#DCE6D9]">
            Un espacio dedicado a la salud mental, la escucha
            y el bienestar emocional desde una perspectiva humana
            y profesional.
          </p>

          <p className="mt-4 text-sm font-medium text-[#DCE6D9]">
            Atención exclusivamente virtual.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="mb-4 font-semibold text-[#DCE6D9]">
            Navegación
          </h3>

          <ul className="space-y-3 text-sm text-white/80">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition hover:text-[#DCE6D9]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Información profesional */}
        <div>
          <h3 className="mb-4 font-semibold text-[#DCE6D9]">
            Información profesional
          </h3>

          <p className="text-sm text-white/80">
            {siteData.doctor.name}
          </p>

          <p className="mt-2 text-sm text-white/80">
            {siteData.doctor.specialty}
          </p>

          <p className="mt-2 text-sm text-white/80">
            {siteData.doctor.license}
          </p>

          <div className="mt-5 space-y-3 text-sm">
            <a
              href={`mailto:${siteData.contact.email}`}
              className="block break-all text-[#DCE6D9] transition hover:text-white"
            >
              {siteData.contact.email}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#DCE6D9] transition hover:text-white"
            >
              Contactar por WhatsApp →
            </a>
          </div>
        </div>
      </div>

      {/* Derechos y aviso */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/20 pt-6 text-center">
        <p className="text-sm text-white/70">
          © {currentYear} {siteData.name}. Todos los derechos reservados.
        </p>

        <p className="mt-2 text-xs leading-relaxed text-white/50">
          La información de este sitio es de carácter general y educativo.
          No sustituye una evaluación, diagnóstico ni consulta profesional.
        </p>
      </div>
    </footer>
  );
}
