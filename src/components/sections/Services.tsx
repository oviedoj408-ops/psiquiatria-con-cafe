
"use client";

import { useEffect, useState } from "react";
import { siteData } from "@/data/siteData";

const services = [
  {
    category: "Psiquiatría",
    description:
      "Un espacio de escucha y atención profesional para comprender lo que estás viviendo, evaluar tus síntomas y construir contigo un plan de tratamiento acorde con tus necesidades. Puedes acudir por primera vez o continuar el seguimiento de un diagnóstico previo.",
    items: [
      {
        title: "Ansiedad",
        description:
          "Evaluación y tratamiento de la preocupación excesiva, los ataques de pánico, los temores persistentes y otros síntomas de ansiedad que interfieren con tu vida cotidiana. En consulta exploramos cómo te afectan, los factores que pueden contribuir a su aparición y las opciones de tratamiento para ayudarte a recuperar bienestar y funcionamiento.",
      },
      {
        title: "Depresión",
        description:
          "Atención para quienes presentan tristeza persistente, pérdida de interés, falta de energía, sentimientos de culpa o cambios en el sueño, el apetito y la concentración. La valoración permite comprender los síntomas y su impacto, y acordar un tratamiento con seguimiento de tu evolución.",
      },
      {
        title: "Trastorno obsesivo-compulsivo (TOC)",
        description:
          "Evaluación de pensamientos, imágenes o impulsos intrusivos y no deseados, así como de rituales o conductas repetitivas que generan malestar o consumen tiempo. El abordaje busca reducir su interferencia en tu vida y orientar el tratamiento, incluida la coordinación con psicoterapia especializada cuando corresponde.",
      },
      {
        title: "Esquizofrenia",
        description:
          "Atención y seguimiento de personas con esquizofrenia, considerando los síntomas, el bienestar físico y las dificultades en las actividades cotidianas. El tratamiento incluye la revisión de la respuesta a los medicamentos y sus posibles efectos secundarios, así como estrategias para favorecer la autonomía y prevenir recaídas. Con tu consentimiento, se puede integrar a familiares o personas de apoyo.",
      },
      {
        title: "Trastorno bipolar",
        description:
          "Evaluación y seguimiento de episodios de depresión y de periodos de ánimo elevado o irritable, aumento de energía o menor necesidad de dormir. La atención se enfoca en estabilizar el estado de ánimo, reconocer señales tempranas de nuevos episodios y mantener un plan de tratamiento adaptado a tu evolución.",
      },
      {
        title: "Trastorno por déficit de atención e hiperactividad (TDAH)",
        description:
          "Valoración de dificultades persistentes de atención, organización, manejo del tiempo, impulsividad o inquietud que afectan las actividades diarias. Se exploran su presencia desde etapas tempranas, su impacto en diferentes ámbitos y otras posibles causas, para establecer un diagnóstico y orientar el tratamiento.",
      },
      {
        title: "Trastornos de la personalidad",
        description:
          "Evaluación y acompañamiento de personas que presentan dificultades persistentes en la forma de relacionarse, regular sus emociones, percibirse a sí mismas o afrontar situaciones cotidianas. En consulta exploramos cómo estas dificultades afectan tu bienestar y tus relaciones, sin juicios y considerando tu historia personal. El plan de atención se construye contigo y contempla la coordinación con psicoterapia, que tiene un papel central en el tratamiento. Cuando corresponde, se valoran medicamentos para síntomas específicos o condiciones asociadas, con seguimiento de su respuesta y tolerancia.",
      },
    ],
  },
  {
    category: "Psiquiatría de enlace",
    description:
      "La psiquiatría de enlace integra la atención de la salud mental con el cuidado médico. Considera cómo se relacionan tus síntomas físicos, tus emociones y los tratamientos que recibes. La atención se realiza en coordinación con tus médicos tratantes cuando corresponde, para construir un plan que considere tu salud de manera integral.",
    items: [
      {
        title: "Adaptación a un diagnóstico médico",
        description:
          "Acompañamiento ante el miedo, la incertidumbre, la tristeza o los cambios en tu vida después de recibir un diagnóstico. Un espacio para comprender lo que estás viviendo y abordar las dificultades emocionales durante el proceso de atención.",
      },
      {
        title: "Salud mental en enfermedades crónicas",
        description:
          "Evaluación y tratamiento de síntomas emocionales en personas que viven con diabetes, enfermedades cardiovasculares, renales, autoinmunes u otras condiciones médicas. Se consideran las exigencias del tratamiento, los cambios en la rutina y su impacto en la calidad de vida.",
      },
      {
        title: "Atención durante procesos oncológicos",
        description:
          "Apoyo ante las dificultades emocionales que pueden surgir durante el diagnóstico, el tratamiento y las distintas etapas de una enfermedad oncológica. La atención contempla las necesidades del paciente y, con su consentimiento, la participación de sus personas de apoyo.",
      },
      {
        title: "Salud mental en procesos quirúrgicos",
        description:
          "Valoración y acompañamiento antes y después de una cirugía, especialmente cuando implica cambios importantes en los hábitos, la imagen corporal o la vida cotidiana. Incluye la identificación de necesidades de atención y el apoyo durante la adaptación y la recuperación.",
      },
      {
        title: "Impacto emocional del dolor persistente",
        description:
          "Atención a las dificultades emocionales, del sueño y del funcionamiento cotidiano que pueden acompañar al dolor persistente. El abordaje se integra al tratamiento médico del dolor, reconociendo tu experiencia y su impacto en tu vida.",
      },
      {
        title: "Dificultades para seguir un tratamiento médico",
        description:
          "Exploración de las barreras emocionales, cognitivas y prácticas que dificultan tomar medicamentos, acudir a citas o realizar cambios indicados por el equipo médico. El objetivo es encontrar estrategias realistas y acordadas contigo.",
      },
      {
        title: "Salud mental en cuidados paliativos",
        description:
          "Atención psiquiátrica para personas que viven con enfermedades graves o que limitan la vida, considerando sus necesidades emocionales, sus preferencias y aquello que les resulta importante en esta etapa. La consulta ofrece un espacio de escucha para abordar la ansiedad, la tristeza, el miedo, las dificultades para dormir y el malestar emocional que pueden acompañar la enfermedad. El objetivo es contribuir al alivio del sufrimiento y a la calidad de vida, con respeto a la dignidad de cada persona. Cuando corresponde, se coordina con el equipo médico y de cuidados paliativos. Con el consentimiento del paciente, se puede integrar a familiares o cuidadores. La pertinencia de la modalidad virtual se determina durante la valoración.",
      },
    ],
  },
  {
    category: "Obesidad y conducta alimentaria",
    description:
      "Atención psiquiátrica para explorar la relación entre las emociones, la alimentación, la imagen corporal y las dificultades que pueden surgir durante el tratamiento. Un espacio respetuoso y libre de juicios sobre el peso, que considera tus necesidades y objetivos de salud.",
    items: [
      {
        title: "Obesidad y salud mental",
        description:
          "Atención psiquiátrica para personas que viven con obesidad. En consulta exploramos la relación entre las emociones, la alimentación, la imagen corporal y las dificultades que pueden surgir durante el tratamiento. La valoración considera síntomas de ansiedad, depresión y otras dificultades que puedan afectar tu bienestar. Cuando corresponde, el acompañamiento se coordina con nutrición y otras especialidades.",
      },
      {
        title: "Acompañamiento en cirugía bariátrica",
        description:
          "Valoración y seguimiento antes y después de una cirugía bariátrica, con atención a la adaptación emocional, los cambios en los hábitos y la relación con el cuerpo. Se consideran las necesidades de salud mental que pueden surgir durante las distintas etapas de este proceso.",
      },
      {
        title: "Trastornos de la conducta alimentaria",
        description:
          "Evaluación de dificultades relacionadas con la alimentación, como la restricción persistente, los episodios de atracón, las conductas compensatorias y la preocupación intensa por el peso o la figura corporal. La consulta permite explorar estas conductas, su impacto emocional y sus consecuencias en la salud, así como valorar la presencia de anorexia nerviosa, bulimia nerviosa, trastorno por atracón u otros trastornos alimentarios. El plan se adapta a tus necesidades y contempla el trabajo conjunto con psicoterapia, nutrición y otras especialidades médicas, según corresponda. No necesitas tener un diagnóstico previo ni un peso determinado para solicitar ayuda.",
      },
    ],
  },
  {
    category: "Valoraciones especiales",
    description:
      "Valoraciones psiquiátricas dirigidas a solicitudes específicas que requieren una evaluación clínica individual.",
    items: [
      {
        title: "Valoración para constancia de animal de apoyo emocional",
        description:
          "Consulta psiquiátrica para evaluar la pertinencia clínica de emitir una constancia relacionada con el acompañamiento de un animal de apoyo emocional, incluida su solicitud para viajes cuando la aerolínea y el destino contemplen esta modalidad. Durante la valoración se revisan tus antecedentes, tus necesidades de salud mental y el papel que tiene el animal en tu bienestar. La constancia se emite únicamente cuando existe una justificación clínica y se cumplen los requisitos profesionales y normativos aplicables. Agendar o pagar la consulta no garantiza su emisión. La constancia no certifica el entrenamiento, el comportamiento ni la salud del animal, no sustituye la documentación veterinaria y no garantiza su aceptación en el vuelo. La atención es exclusivamente virtual y está sujeta a que esta modalidad sea adecuada para la valoración y válida para el trámite solicitado.",
      },
    ],
  },
];

const careIncludes = [
  {
    title: "Evaluación de tus síntomas",
    description:
      "Evaluación de tus síntomas, antecedentes y contexto personal.",
  },
  {
    title: "Explicación de los hallazgos",
    description:
      "Explicación de los hallazgos y las opciones de tratamiento.",
  },
  {
    title: "Plan de tratamiento individualizado",
    description:
      "Un plan que puede incluir medicamentos cuando estén indicados y recomendaciones de psicoterapia.",
  },
  {
    title: "Seguimiento de tu evolución",
    description:
      "Consultas de seguimiento para revisar tu evolución y ajustar el tratamiento cuando sea necesario.",
  },
];

// Fotografías individuales para cada servicio.
const serviceImages: Record<string, string> = {
  "Ansiedad": "/images/services/ansiedad.png",
  "Depresión": "/images/services/depresion.png",
  "Trastorno obsesivo-compulsivo (TOC)": "/images/services/toc.png",
  "Esquizofrenia": "/images/services/esquizofrenia.png",
  "Trastorno bipolar": "/images/services/trastorno-bipolar.png",
  "Trastorno por déficit de atención e hiperactividad (TDAH)":
    "/images/services/tdah.png",
  "Trastornos de la personalidad": "/images/services/personalidad.png",

  "Adaptación a un diagnóstico médico":
    "/images/services/diagnostico-medico.png",
  "Salud mental en enfermedades crónicas":
    "/images/services/enfermedades-cronicas.png",
  "Atención durante procesos oncológicos":
    "/images/services/oncologia.png",
  "Salud mental en procesos quirúrgicos":
    "/images/services/cirugia.png",
  "Impacto emocional del dolor persistente":
    "/images/services/dolor-persistente.png",
  "Dificultades para seguir un tratamiento médico":
    "/images/services/tratamiento-medico.png",
  "Salud mental en cuidados paliativos":
    "/images/services/cuidados-paliativos.png",

  "Obesidad y salud mental": "/images/services/obesidad.png",
  "Acompañamiento en cirugía bariátrica":
    "/images/services/cirugia-bariatrica.png",
  "Trastornos de la conducta alimentaria":
    "/images/services/conducta-alimentaria.png",

  "Valoración para constancia de animal de apoyo emocional":
    "/images/services/animal-apoyo.png",
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    category: string;
  } | null>(null);

  const whatsappUrl = `https://wa.me/${siteData.contact.whatsapp}?text=${encodeURIComponent(
    siteData.messages.whatsapp
  )}`;

  // Control del modal y tecla Escape.
  useEffect(() => {
    if (!selectedService) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedService]);

  return (
    <section
      id="servicios"
      className="scroll-mt-24 bg-cream px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Encabezado editorial */}
        <div className="mb-12 md:mb-14">
          <div className="grid items-end gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-7 bg-sage" />
                Áreas de atención
              </span>

              <h2 className="max-w-xl text-3xl font-semibold leading-tight text-forest md:text-5xl">
                Un espacio para comprender lo que estás viviendo
              </h2>
            </div>

            <div className="md:pb-1">
              <p className="max-w-xl text-sm leading-7 text-text md:text-base">
                Atención psiquiátrica profesional, cercana y personalizada.
                Exploramos tus necesidades para construir contigo un plan
                de atención acorde con tu historia y bienestar.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sage" />
                <span className="text-xs font-medium tracking-wide text-forest">
                  Atención exclusivamente virtual por videollamada
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-[2px] w-16 rounded-full bg-primary" />
            <div className="h-1.5 w-1.5 rounded-full bg-sage" />
            <div className="h-px flex-1 bg-light-green" />
          </div>
        </div>

        {/* Categorías y tarjetas */}
        <div className="space-y-10">
          {services.map((group) => (
            <div key={group.category}>
              <div className="mb-5 max-w-3xl">
                <h3 className="mb-2 text-xl font-semibold text-forest md:text-2xl">
                  {group.category}
                </h3>

                <p className="text-sm leading-6 text-text">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((service) => (
                  <article
                    key={service.title}
                    className="flex flex-col rounded-xl border border-light-green/70 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-md"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h4 className="text-base font-semibold leading-6 text-forest">
                        {service.title}
                      </h4>

                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-light-green text-base font-medium text-forest">
                        +
                      </span>
                    </div>

                    <p className="mb-3 text-sm leading-6 text-text">
                      {`${service.description.slice(0, 145)}${
                        service.description.length > 145 ? "..." : ""
                      }`}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedService({
                          title: service.title,
                          description: service.description,
                          category: group.category,
                        })
                      }
                      className="mt-auto w-fit text-sm font-semibold text-primary transition-colors hover:text-forest"
                    >
                      Conocer más →
                    </button>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proceso de atención */}
        <div className="mt-16 border-y border-light-green py-9 md:mt-20 md:py-11">
          <div className="mb-8 flex flex-col gap-3 md:mb-9 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Tu proceso de atención
              </span>

              <h3 className="mt-2 text-2xl font-semibold text-forest md:text-3xl">
                ¿Cómo trabajaremos juntos?
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-text">
              Cada consulta se adapta a tus necesidades y a tu evolución.
              Estos son los aspectos principales de tu atención.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {careIncludes.map((item, index) => (
              <div key={item.title}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-light-green text-sm font-semibold text-forest">
                    0{index + 1}
                  </span>

                  {index !== careIncludes.length - 1 && (
                    <div className="hidden h-px flex-1 bg-light-green lg:block" />
                  )}
                </div>

                <h4 className="mb-2 text-base font-semibold leading-6 text-forest">
                  {item.title}
                </h4>

                <p className="text-sm leading-6 text-text">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-light-green pt-5 text-sm leading-6 text-text">
            <strong className="text-forest">
              No necesitas tener un diagnóstico previo.
            </strong>{" "}
            Puedes solicitar una valoración para explorar lo que te ocurre y
            definir los siguientes pasos de tu atención.
          </p>
        </div>

        {/* Contacto */}
        <div className="mt-12 rounded-2xl bg-forest px-6 py-9 text-center md:px-10">
          <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">
            Cada proceso merece una atención individualizada
          </h3>

          <p className="mx-auto mb-6 max-w-2xl text-sm leading-6 text-white/80">
            Si deseas conocer más sobre los servicios o consultar la
            disponibilidad de una cita, puedes comunicarte directamente.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-forest transition-colors hover:bg-light-green"
          >
            Consultar por WhatsApp
          </a>

          <p className="mt-4 text-xs text-white/70">
            Todas las consultas se realizan exclusivamente por videollamada.
          </p>
        </div>
      </div>

      {/* Modal de información del servicio */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest/70 p-2 backdrop-blur-sm sm:p-3 md:p-6"
          onClick={() => setSelectedService(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="relative grid h-[92dvh] max-h-[900px] w-full max-w-5xl grid-rows-[minmax(140px,25dvh)_minmax(0,1fr)] overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-2 md:grid-rows-1"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Fotografía compacta en teléfono, sin recortar */}
            <div className="relative min-h-0 overflow-hidden bg-light-green">
              <img
                src={serviceImages[selectedService.title]}
                alt={`Imagen ilustrativa de ${selectedService.title}`}
                className="absolute inset-0 h-full w-full object-contain p-2"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />

              <span className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-forest/80 px-4 py-2 text-xs font-medium text-white backdrop-blur-md md:bottom-5 md:left-5">
                {selectedService.category}
              </span>
            </div>

            {/* Información del servicio */}
            <div className="relative flex min-h-0 flex-col overflow-hidden p-4 sm:p-6 md:p-10">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Cerrar ventana"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-light-green text-xl text-forest transition-colors hover:bg-primary hover:text-white"
              >
                ×
              </button>

              <div className="mb-3 mt-7 shrink-0 md:mb-5 md:mt-10">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
                  Información del servicio
                </span>

                <h3
                  id="service-modal-title"
                  className="mt-2 text-xl font-semibold leading-tight text-forest sm:text-2xl md:text-3xl"
                >
                  {selectedService.title}
                </h3>

                <div className="mt-3 h-[2px] w-14 rounded-full bg-sage md:mt-5" />
              </div>

              {/* Descripción desplazable */}
              <div
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2 [scrollbar-color:#71876A_#F7F5EF] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-[#F7F5EF] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#71876A]"
                tabIndex={0}
                aria-label="Descripción completa del servicio"
              >
                <div className="mb-3 flex items-center gap-2 text-[11px] font-medium text-primary sm:text-xs">
                  <span>Desliza para leer la información completa</span>
                  <span className="animate-bounce text-base" aria-hidden="true">
                    ↓
                  </span>
                </div>

                <p className="text-sm leading-7 text-text md:text-base">
                  {selectedService.description}
                </p>
              </div>

              {/* Contacto siempre visible */}
              <div className="mt-3 shrink-0 border-t border-light-green pt-3 md:mt-4 md:pt-4">
                <p className="mb-3 text-[11px] leading-5 text-text sm:text-xs">
                  La atención se realiza exclusivamente de forma virtual,
                  según las características y necesidades de cada valoración.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
