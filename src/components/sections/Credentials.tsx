
"use client";

import { useState } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";

const education = [
  {
    number: "01",
    title: "Medicina General",
    institution: "Universidad Nacional Autónoma de Nicaragua",
    description:
      "Realicé mi formación médica en la Universidad Nacional Autónoma de Nicaragua, donde desarrollé las bases científicas y clínicas que fundamentan mi ejercicio profesional, así como mi compromiso con una atención integral y humanizada.",
  },
  {
    number: "02",
    title: "Psiquiatría",
    institution:
      "Hospital Psicosocial Dr. José Dolores Fletes y Universidad Nacional Autónoma de Nicaragua",
    description:
      "Cursé mi especialidad en Psiquiatría en el Hospital Psicosocial Dr. José Dolores Fletes, con respaldo académico de la Universidad Nacional Autónoma de Nicaragua. Mi formación especializada me permite abordar la salud mental desde una perspectiva integral, científica y centrada en las necesidades individuales de cada paciente.",
  },
  {
    number: "03",
    title: "Psiquiatría de Enlace",
    institution:
      "Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán (INCMNSZ), con aval de la Universidad Nacional Autónoma de México (UNAM)",
    description:
      "Actualmente, amplío mi formación en Psiquiatría de Enlace en el Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán, con aval académico de la Universidad Nacional Autónoma de México (UNAM). Mi enfoque se centra en la interacción entre la salud física y mental, particularmente en la atención especializada de personas con enfermedades médicas y condiciones clínicas complejas.",
  },
];

const commitments = [
  "Escucha sin prejuicios.",
  "Trato humano y empático.",
  "Explicaciones claras sobre tu atención.",
  "Planes de atención individualizados.",
];

const documents: Record<string, string> = {
  "Medicina General": "/Documentos/titulo-medicina-general.png",
  "Psiquiatría": "/Documentos/titulo-psiquiatria1.png",
  "Psiquiatría de Enlace": "/Documentos/titulo-psiquiatria-enlace.png",
};

export default function Credentials() {
  const [activeDocument, setActiveDocument] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const closeDocument = () => {
    setActiveDocument(null);
    setZoom(1);
  };

  return (
    <section
      id="formacion"
      className="scroll-mt-24 bg-white px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Panel principal: trayectoria y formación */}
        <div className="relative overflow-hidden rounded-[2rem] border border-[#DCE6D9]/80 bg-[#F7F5EF]/75 p-6 shadow-lg backdrop-blur-xl md:p-10 lg:p-12">

          {/* Decoración sutil */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#DCE6D9]/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#71876A]/10 blur-3xl" />

          <div className="relative z-10">

            {/* Encabezado */}
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#526B50]">
                Trayectoria profesional
              </span>

              <h2 className="mb-5 text-3xl font-semibold text-[#344D3D] md:text-5xl">
                Formación académica
              </h2>

              <p className="text-base leading-8 text-[#655D54] md:text-lg">
                Una trayectoria de formación médica y especializada
                orientada a comprender la salud mental y su relación
                con la salud física.
              </p>
            </div>

            {/* Tres títulos académicos */}
            <div className="grid gap-5 lg:grid-cols-3">
              {education.map((item) => (
                <article
                  key={item.number}
                  className="group flex flex-col rounded-3xl border border-[#DCE6D9] bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#71876A] hover:shadow-lg md:p-7"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest text-[#526B50]">
                      FORMACIÓN {item.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DCE6D9] text-[#344D3D] transition-colors group-hover:bg-[#526B50] group-hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3 2.5 8 12 13l9.5-5L12 3Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.5 10.1V15c3.4 2.7 7.6 2.7 11 0v-4.9"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.5 8v6"
                        />
                      </svg>
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-semibold leading-tight text-[#344D3D] md:text-2xl">
                    {item.title}
                  </h3>

                  <div className="mb-5 h-1 w-12 rounded-full bg-[#71876A]" />

                  <p className="mb-4 text-sm font-semibold leading-7 text-[#526B50]">
                    {item.institution}
                  </p>

                  <p className="flex-1 text-sm leading-7 text-[#655D54]">
                    {item.description}
                  </p>

                  {/* Botón para visualizar cada título */}
                  {documents[item.title] && (
                    <button
                      type="button"
                      onClick={() => {
                        setZoom(1);
                        setActiveDocument(documents[item.title]);
                      }}
                      className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#526B50] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#344D3D]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 3v6h6M8 14h8M8 17h8"
                        />
                      </svg>

                      Ver título profesional
                    </button>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Más allá de la formación: panel verde independiente */}
        <div className="mt-8 overflow-hidden rounded-3xl bg-[#344D3D] shadow-lg">
          <div className="grid md:grid-cols-2">

            {/* Enfoque profesional */}
            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-9">
              <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#DCE6D9]">
                Más allá de la formación
              </span>

              <h3 className="mb-4 text-2xl font-semibold leading-tight text-white md:text-3xl">
                Un enfoque basado en la empatía y la escucha
              </h3>

              <p className="text-sm leading-7 text-white/85">
                La manera de ejercer la medicina de la{" "}
                {siteData.doctor.name} se basa en el trato humano,
                la empatía y la escucha sin juicios. Cada persona
                merece tiempo para expresar lo que siente, ser
                tomada en cuenta y recibir explicaciones claras
                sobre su salud y su tratamiento.
              </p>
            </div>

            {/* Compromiso */}
            <div className="flex flex-col justify-center border-t border-white/15 bg-white/5 p-6 md:border-l md:border-t-0 md:p-8 lg:p-9">
              <h3 className="mb-5 text-xl font-semibold text-white">
                Mi compromiso contigo
              </h3>

              <ul className="space-y-3">
                {commitments.map((commitment) => (
                  <li
                    key={commitment}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DCE6D9] text-xs font-bold text-[#344D3D]">
                      ✓
                    </span>

                    <span className="text-sm leading-6">
                      {commitment}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 border-t border-white/15 pt-4">
                <p className="text-xs font-medium text-[#DCE6D9]">
                  Atención humana, sensible y profesional
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Modalidad virtual */}
        <div className="mt-5 rounded-xl border border-[#DCE6D9]/80 bg-[#F7F5EF]/70 px-4 py-3 md:px-5">
          <div className="flex items-center gap-3">

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DCE6D9]/80 text-[#344D3D]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="13" height="14" rx="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16 10 5-3v10l-5-3"
                />
              </svg>
            </span>

            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-[#344D3D]">
                Atención exclusivamente virtual
              </h3>

              <p className="mt-0.5 text-xs leading-5 text-[#655D54]">
                Consultas mediante videoconferencia, previa coordinación.
              </p>
            </div>

            <span className="hidden shrink-0 rounded-full border border-[#DCE6D9] bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#526B50] sm:inline-flex">
              100% virtual
            </span>

          </div>
        </div>

      </div>

      {/* Visor profesional de títulos académicos */}
      {activeDocument && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-2 backdrop-blur-sm md:p-5"
          onClick={closeDocument}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Visualización del título profesional"
            className="flex h-[96vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#F7F5EF] shadow-2xl md:h-[94vh] md:rounded-3xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Encabezado del visor */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#DCE6D9] bg-white px-4 py-4 md:px-7">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#344D3D] md:text-2xl">
                  Documento académico
                </h3>

                <p className="mt-1 text-xs text-[#71876A] md:text-sm">
                  Título profesional · Psiquiatría con Café
                </p>
              </div>

              <button
                type="button"
                onClick={closeDocument}
                className="flex shrink-0 items-center gap-2 rounded-full bg-[#DCE6D9] px-4 py-2.5 text-sm font-semibold text-[#344D3D] transition hover:bg-[#526B50] hover:text-white"
                aria-label="Cerrar documento"
              >
                Cerrar
                <span className="text-lg">×</span>
              </button>
            </div>

            {/* Herramientas de zoom */}
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-[#DCE6D9] bg-white/80 px-4 py-3 md:px-7">
              <span className="text-xs font-medium text-[#655D54] md:text-sm">
                Visualización del documento
              </span>

              <div className="flex items-center gap-2">

                <button
                  type="button"
                  onClick={() =>
                    setZoom((current) =>
                      Math.max(0.5, current - 0.25)
                    )
                  }
                  disabled={zoom <= 0.5}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DCE6D9] text-lg font-bold text-[#344D3D] transition hover:bg-[#526B50] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Reducir zoom"
                >
                  −
                </button>

                <span className="min-w-16 text-center text-sm font-semibold text-[#344D3D]">
                  {Math.round(zoom * 100)}%
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setZoom((current) =>
                      Math.min(2.5, current + 0.25)
                    )
                  }
                  disabled={zoom >= 2.5}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DCE6D9] text-lg font-bold text-[#344D3D] transition hover:bg-[#526B50] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Ampliar documento"
                >
                  +
                </button>

                <button
                  type="button"
                  onClick={() => setZoom(1)}
                  className="ml-1 rounded-full border border-[#DCE6D9] px-3 py-2 text-xs font-semibold text-[#526B50] transition hover:bg-[#DCE6D9]"
                >
                  Ajustar
                </button>

              </div>
            </div>

            {/* Área del documento */}
            <div className="min-h-0 flex-1 overflow-auto bg-[#EAE8E1] p-3 md:p-6">
              <div
                className="flex min-h-full min-w-full items-center justify-center"
                style={{
                  padding: zoom > 1 ? "20px" : "0",
                }}
              >
                <Image
                  src={activeDocument}
                  alt="Título profesional de la doctora"
                  width={2400}
                  height={1800}
                  sizes="95vw"
                  priority
                  className="mx-auto h-auto w-auto max-w-none rounded-sm shadow-xl transition-transform duration-200"
                  style={{
                    width: `${Math.min(100, 90 * zoom)}%`,
                    maxWidth: zoom <= 1 ? "100%" : "none",
                    maxHeight: zoom <= 1 ? "80vh" : "none",
                  }}
                />
              </div>
            </div>

            {/* Pie del visor */}
            <div className="shrink-0 border-t border-[#DCE6D9] bg-white px-4 py-3 text-center">
              <p className="text-xs text-[#71876A]">
                Puedes ampliar el documento para consultar sus detalles.
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
