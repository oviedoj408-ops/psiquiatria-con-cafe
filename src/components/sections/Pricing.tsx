
import { siteData } from "@/data/siteData";

export default function Pricing() {
  const { individual, packages, followUp } = siteData.pricing;

  const whatsappLink = (message: string) =>
    `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <section
      id="tarifas"
      className="scroll-mt-24 bg-white px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* PANEL PRINCIPAL SEMITRANSPARENTE */}
        <div className="relative overflow-hidden rounded-[2rem] border border-[#DCE6D9]/80 bg-[#F7F5EF]/75 p-6 shadow-lg backdrop-blur-xl md:p-12">

          {/* Decoración ambiental */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#DCE6D9]/50 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#71876A]/10 blur-3xl" />

          <div className="relative z-10">

            {/* ENCABEZADO */}
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#71876A]">
                Inversión en tu bienestar
              </span>

              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#344D3D] md:text-4xl">
                Tarifas de atención
              </h2>

              <div className="mx-auto mt-5 h-px w-20 bg-[#71876A]" />

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#655D54] md:text-base">
                Conoce nuestras opciones de consulta y seguimiento
                profesional, siempre en modalidad virtual.
              </p>
            </div>

            {/* CONSULTA INDIVIDUAL */}
            <div className="mb-12 flex flex-col justify-between gap-5 rounded-2xl border border-[#DCE6D9] bg-white/75 p-6 md:flex-row md:items-center md:px-9 md:py-7">

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#71876A]">
                  Atención profesional
                </span>

                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#344D3D]">
                  Consulta individual
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#655D54]">
                  Una consulta para realizar tu valoración psiquiátrica
                  o continuar tu proceso de atención y seguimiento.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-5 md:justify-end">
                <div>
                  <span className="font-serif text-4xl font-semibold text-[#344D3D]">
                    ${individual}
                  </span>

                  <span className="ml-2 text-xs text-[#655D54]">
                    USD
                  </span>
                </div>

                <a
                  href={whatsappLink(
                    "Hola, doctora. Me gustaría obtener información sobre la consulta individual."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#526B50] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#344D3D]"
                >
                  Consultar
                </a>
              </div>
            </div>

            {/* PAQUETES DE ATENCIÓN */}
            <div className="mb-7 text-center">
              <h3 className="font-serif text-2xl font-semibold text-[#344D3D]">
                Paquetes de atención
              </h3>

              <p className="mt-2 text-sm text-[#655D54]">
                Opciones para acompañar tu proceso de seguimiento.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

              {packages.map((item) => (
                <article
                  key={item.consultations}
                  className="flex flex-col rounded-2xl border border-[#DCE6D9] bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#71876A]">
                    Paquete de {item.consultations} consultas
                  </span>

                  <div className="mt-4">
                    <span className="font-serif text-4xl font-semibold text-[#344D3D]">
                      ${item.price}
                    </span>

                    <span className="ml-2 text-xs text-[#655D54]">
                      USD
                    </span>
                  </div>

                  <div className="mt-4 rounded-xl bg-[#DCE6D9]/60 p-3">
                    <span className="text-sm font-semibold text-[#526B50]">
                      Ahorras ${item.savings} USD
                    </span>

                    <p className="mt-1 text-xs leading-relaxed text-[#655D54]">
                      En comparación con pagar cada consulta individualmente.
                    </p>
                  </div>

                  <p className="mt-5 flex-1 text-sm leading-6 text-[#655D54]">
                    Incluye la primera consulta y las consultas de
                    seguimiento correspondientes al paquete.
                  </p>

                  <a
                    href={whatsappLink(
                      `Hola, doctora. Me gustaría obtener información sobre el paquete de ${item.consultations} consultas.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 rounded-full border border-[#526B50] px-5 py-3 text-center text-sm font-semibold text-[#526B50] transition hover:bg-[#526B50] hover:text-white"
                  >
                    Consultar paquete
                  </a>
                </article>
              ))}

            </div>
          </div>
        </div>

        {/* SEGUIMIENTO ESPECIAL */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#DCE6D9] bg-[#344D3D]">

          <div className="grid md:grid-cols-[1fr_auto] md:items-center">

            <div className="p-8 md:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DCE6D9]">
                Continuidad de atención
              </span>

              <h3 className="mt-4 font-serif text-2xl font-semibold text-white md:text-3xl">
                Tarifa especial de seguimiento
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
                A partir de la quinta consulta, cada seguimiento tiene
                una tarifa especial. Esta condición aplica después de
                completar cuatro consultas, tanto si fueron individuales
                como si se adquirió un paquete.
              </p>
            </div>

            <div className="border-t border-white/15 px-8 py-8 text-center md:min-w-[240px] md:border-l md:border-t-0 md:py-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#DCE6D9]">
                Por consulta
              </span>

              <div className="mt-3 font-serif text-5xl font-semibold text-white">
                ${followUp}
              </div>

              <span className="mt-1 block text-xs text-white/70">
                USD
              </span>

              <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-[#DCE6D9]">
                25 % de ahorro
              </span>
            </div>

          </div>
        </div>

        {/* INFORMACIÓN FINAL */}
        <div className="mt-10 text-center">
          <p className="text-sm leading-7 text-[#655D54]">
            La frecuencia de las consultas se acuerda contigo
            según tus necesidades y evolución.
          </p>

          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#71876A]">
            Todas las consultas se realizan exclusivamente de forma virtual.
          </p>
        </div>

      </div>
    </section>
  );
}
