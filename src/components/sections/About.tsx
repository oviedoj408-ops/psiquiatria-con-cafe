
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 bg-white px-5 py-20 md:px-8 md:py-24"
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
                Conoce a tu psiquiatra
              </span>

              <h2 className="mx-auto mt-3 max-w-4xl font-serif text-3xl font-semibold leading-tight text-[#344D3D] md:text-4xl">
                Una atención que comienza escuchándote
              </h2>

              <div className="mx-auto mt-5 h-px w-20 bg-[#71876A]" />

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#655D54] md:text-base">
                Un espacio de atención profesional donde la empatía,
                la escucha y el respeto son parte fundamental del
                acompañamiento en salud mental.
              </p>
            </div>

            {/* PRESENTACIÓN */}
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14">

              {/* INFORMACIÓN */}
              <div className="order-2 lg:order-1">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCE6D9] bg-white/80 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#71876A]" />

                  <span className="text-xs font-semibold tracking-wide text-[#526B50]">
                    Atención profesional y humana
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-semibold leading-tight text-[#344D3D] md:text-4xl">
                  Un compromiso con tu bienestar
                </h3>

                <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#655D54] md:text-base">

                  <p>
                    Soy la {siteData.doctor.name}, médico especialista
                    en Psiquiatría, con alta especialidad en Psiquiatría
                    de Enlace.
                  </p>

                  <p>
                    Mi preparación profesional me ha permitido desarrollar
                    una visión integral de la salud mental, considerando
                    tanto las necesidades emocionales como su relación
                    con la salud física y las circunstancias personales
                    de cada paciente.
                  </p>

                  <p>
                    Mi manera de ejercer la medicina se basa en el trato
                    humano, la empatía y la escucha sin prejuicios. Cada
                    persona merece ser escuchada, comprendida y tomada
                    en cuenta en las decisiones sobre su salud.
                  </p>

                </div>

                {/* FRASE DESTACADA */}
                <div className="mt-8 rounded-2xl border border-[#DCE6D9] bg-white/75 p-6 md:p-7">

                  <span className="font-serif text-4xl leading-none text-[#71876A]">
                    “
                  </span>

                  <p className="-mt-1 font-serif text-xl italic leading-relaxed text-[#344D3D] md:text-2xl">
                    Cada persona merece tiempo para expresar lo que siente
                    y recibir una atención respetuosa, sensible y profesional.
                  </p>

                  <div className="mt-5 h-px w-12 bg-[#71876A]" />

                </div>
              </div>

              {/* FOTOGRAFÍA */}
              <div className="relative order-1 mx-auto w-full max-w-md lg:order-2">

                <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-[#B9CBB5] md:-right-5 md:-top-5" />

                <div className="relative overflow-hidden rounded-[2rem] bg-[#DCE6D9] shadow-xl">

                  <Image
                    src="/images/dra-ruth-aguilar0.jpg"
                    alt="Dra. Ruth Yubelka Aguilar Ramírez"
                    width={700}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="aspect-[4/5] w-full object-cover object-center"
                    priority={false}
                  />

                </div>

                {/* IDENTIFICACIÓN */}
                <div className="relative mx-4 -mt-8 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-lg backdrop-blur-xl md:mx-6">

                  <h4 className="font-serif text-xl font-semibold text-[#344D3D]">
                    {siteData.doctor.name}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#655D54]">
                    {siteData.doctor.specialty}
                  </p>

                  <p className="mt-2 text-xs font-medium text-[#71876A]">
                    {siteData.doctor.subspecialty}
                  </p>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
