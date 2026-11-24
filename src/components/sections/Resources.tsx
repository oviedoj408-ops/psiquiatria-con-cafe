
import Image from "next/image";

const resources = [
  {
    number: "01",
    category: "Bienestar emocional",
    title: "La importancia de cuidar nuestra salud mental",
    description:
      "La salud mental forma parte de nuestro bienestar integral. Reconocer cuándo necesitamos apoyo es un paso importante para cuidar de nosotros mismos.",
    detail: "Reconocer nuestras necesidades también es autocuidado.",
    image: "/images/bienestar-emocional.png",
    alt: "Mujer reflexionando tranquilamente junto a una ventana",
  },
  {
    number: "02",
    category: "Autoconocimiento",
    title: "Aprender a reconocer nuestras emociones",
    description:
      "Identificar y comprender nuestras emociones nos permite conocer mejor nuestras experiencias, necesidades y formas de reaccionar ante distintas situaciones.",
    detail: "Comprender lo que sentimos nos ayuda a conocernos mejor.",
    image: "/images/autoconocimiento.png",
    alt: "Persona escribiendo en un diario personal",
  },
  {
    number: "03",
    category: "Autocuidado",
    title: "Pequeños hábitos para nuestro bienestar",
    description:
      "Mantener hábitos saludables, procurar un descanso adecuado y cultivar relaciones positivas puede contribuir a nuestro bienestar cotidiano.",
    detail: "Cuidarnos también está en las pequeñas acciones diarias.",
    image: "/images/autocuidado.png",
    alt: "Mujer disfrutando de un momento de tranquilidad",
  },
];

export default function Resources() {
  return (
    <section
      id="recursos"
      className="scroll-mt-24 bg-white px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* PANEL PRINCIPAL SEMITRANSPARENTE */}
        <div className="relative overflow-hidden rounded-[2rem] border border-[#DCE6D9]/80 bg-[#F7F5EF]/75 p-6 shadow-lg backdrop-blur-xl md:p-12">

          {/* DECORACIÓN AMBIENTAL */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#DCE6D9]/50 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#71876A]/10 blur-3xl" />

          <div className="relative z-10">

            {/* ENCABEZADO */}
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#71876A]">
                Aprende y descubre
              </span>

              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#344D3D] md:text-4xl">
                Recursos para tu bienestar
              </h2>

              <div className="mx-auto mt-5 h-px w-20 bg-[#71876A]" />

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#655D54] md:text-base">
                Un espacio informativo para reflexionar, aprender y conocer
                más sobre la salud mental desde una perspectiva humana
                y profesional.
              </p>
            </div>

            {/* TARJETAS DE RECURSOS */}
            <div className="grid gap-6 md:grid-cols-3">

              {resources.map((resource) => (
                <article
                  key={resource.number}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#DCE6D9] bg-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* FOTOGRAFÍA RESPONSIVE */}
                  <div className="relative h-72 overflow-hidden bg-[#F7F5EF] sm:h-80 md:h-56">

                    <Image
                      src={resource.image}
                      alt={resource.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="
                        object-contain
                        p-2
                        transition-transform duration-700
                        group-hover:scale-[1.02]
                        md:object-cover
                        md:p-0
                        md:group-hover:scale-105
                      "
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#344D3D]/30 via-transparent to-transparent" />

                    <span className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#344D3D] backdrop-blur-md">
                      {resource.category}
                    </span>

                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/90 font-serif text-sm font-semibold text-[#526B50] shadow-sm">
                      {resource.number}
                    </span>

                  </div>

                  {/* CONTENIDO */}
                  <div className="flex flex-1 flex-col p-6 md:p-7">

                    <h3 className="font-serif text-xl font-semibold leading-snug text-[#344D3D]">
                      {resource.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#655D54]">
                      {resource.description}
                    </p>

                    <div className="mt-auto pt-6">

                      <div className="border-t border-[#DCE6D9] pt-5">
                        <p className="text-sm font-medium italic leading-relaxed text-[#526B50]">
                          {resource.detail}
                        </p>
                      </div>

                      <span className="mt-5 inline-flex rounded-full bg-[#DCE6D9]/70 px-4 py-2 text-[11px] font-semibold text-[#344D3D]">
                        Contenido informativo
                      </span>

                    </div>
                  </div>
                </article>
              ))}

            </div>
          </div>
        </div>

        {/* AVISO INFORMATIVO */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#806B5B]">
          La información presentada tiene fines educativos y no sustituye
          una evaluación, diagnóstico ni consulta profesional.
        </p>

      </div>
    </section>
  );
}
