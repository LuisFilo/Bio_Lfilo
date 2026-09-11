import Image from "next/image";

const tecnologias = [
  {
    nombre: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    nombre: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    nombre: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    nombre: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    nombre: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    github: true,
  },
  {
    nombre: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    nombre: "Linux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },

  {
    nombre: "SNORT",
    logo: "https://www.svgrepo.com/show/374085/snort.svg",
  },

  {
    nombre: "Next.js",
    logo: "https://cdn.simpleicons.org/nextdotjs",
  },
  
  {
    nombre: "Postman",
    logo: "https://cdn.simpleicons.org/postman",
  },


];

export default function MiFormacion() {
  return (
    <section
      id="mi-formacion"
      className="seccion border-y border-slate-800 bg-[#0c121f]"
    >
      <div className="contenedor">

        <span className="etiqueta">
          03 · Mi formación
        </span>

        <h2 className="titulo-seccion">
          Aprender también ha sido parte de mi historia.
        </h2>

        <p className="descripcion-seccion">
          Mi formación académica me ha permitido construir progresivamente
          conocimientos en diferentes áreas y descubrir qué campos de la
          tecnología despiertan más mi interés.
        </p>

        {/* =========================
            EDUCACIÓN + CURSOS
        ========================= */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          <article className="tarjeta tarjeta-hover p-7 lg:col-span-2">

            <div className="flex items-start justify-between gap-5">

              <div>

                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                  Formación académica
                </span>

                <h3 className="mt-3 text-2xl font-extrabold text-white">
                  Mi trayectoria educativa
                </h3>

              </div>

              <span className="rounded-xl border border-blue-900/60 bg-blue-950/50 px-3 py-2 text-xs font-bold text-blue-400">
                8.º semestre
              </span>

            </div>

            <div className="mt-8 space-y-7">

              <div className="border-l-2 border-slate-700 pl-5">

                <p className="text-sm font-bold text-blue-400">
                  Bachillerato
                </p>

                <h4 className="mt-1 font-bold text-white">
                  I.E.D. Fundación Pies Descalzos
                </h4>

              </div>

              <div className="border-l-2 border-slate-700 pl-5">

                <p className="text-sm font-bold text-blue-400">
                  Formación técnica
                </p>

                <h4 className="mt-1 font-bold text-white">
                  SENA · Gestión Logística
                </h4>

              </div>

              <div className="border-l-2 border-blue-500 pl-5">

                <p className="text-sm font-bold text-blue-400">
                  Formación profesional
                </p>

                <h4 className="mt-1 font-bold text-white">
                  Ingeniería de Sistemas
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Actualmente cursando octavo semestre y fortaleciendo
                  conocimientos relacionados con programación, desarrollo
                  de software, bases de datos y tecnología.
                </p>

              </div>

            </div>

          </article>

          {/* =========================
              CURSOS
          ========================= */}

          <article className="tarjeta tarjeta-hover p-7">

            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Cursos
            </span>

            <h3 className="mt-3 text-2xl font-extrabold text-white">
              Formación complementaria
            </h3>

            <div className="mt-7 space-y-3">

              <div className="rounded-xl border border-slate-700 bg-[#0b1220] p-4">

                <p className="text-sm font-bold text-slate-200">
                  AWS Academy
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Cloud Operations
                </p>

              </div>

              <div className="rounded-xl border border-slate-700 bg-[#0b1220] p-4">

                <p className="text-sm font-bold text-slate-200">
                  AWS Skill Builder
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Cloud Quest: Cybersecurity
                </p>

              </div>

              <div className="rounded-xl border border-slate-700 bg-[#0b1220] p-4">

                <p className="text-sm font-bold text-slate-200">
                  SNORT - Level Medium
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Try Hack Me
                </p>

              </div>

            </div>

          </article>

        </div>

        {/* =========================
            IMAGEN + TECNOLOGÍAS
        ========================= */}

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="tarjeta relative h-[485px] overflow-hidden p-4">
            <Image
              src="/images/Formacion.jpg"
              alt="Imagen relacionada con mi formación"
              fill
              className="object-cover"
            />
          </div>

          {/* =========================
              TECNOLOGÍAS
          ========================= */}

          <article className="tarjeta p-7">

            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Herramientas y conocimientos
            </span>

            <h3 className="mt-3 text-2xl font-extrabold text-white">
              Tecnologías con las que he trabajado
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Algunas de las tecnologías y herramientas que he conocido
              durante mi formación académica y mis proyectos.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-5 sm:grid-cols-4">

              {tecnologias.map((tecnologia) => (

                <div
                  key={tecnologia.nombre}
                  className="flex items-center justify-center"
                >

                  <div
                    className="logo-tecnologia"
                    title={tecnologia.nombre}
                  >

                    <img
                      src={tecnologia.logo}
                      alt={`Logo de ${tecnologia.nombre}`}
                      className={
                        tecnologia.github
                          ? "logo-github"
                          : ""
                      }
                    />

                  </div>

                </div>

              ))}

            </div>

          </article>

        </div>

      </div>
    </section>
  );
}