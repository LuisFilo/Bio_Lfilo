import Image from "next/image";

export default function VidaActual() {
  return (
    <section
      id="vida-actual"
      className="seccion border-y border-slate-800 bg-[#0c121f]"
    >
      <div className="contenedor">

        <span className="etiqueta">
          05 · Vida actual
        </span>

        <h2 className="titulo-seccion">
          Estoy en una etapa de construcción.
        </h2>

        <p className="descripcion-seccion">
          Actualmente gran parte de mi tiempo está enfocado en terminar
          mi formación profesional, seguir aprendiendo y prepararme para
          dar el siguiente paso hacia el mundo laboral.
        </p>

        {/* =========================
            PRESENTE + IMAGEN
        ========================= */}

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* =========================
              INFORMACIÓN
          ========================= */}

          <article className="tarjeta tarjeta-hover p-8">

            <div className="flex items-center gap-3">

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-950 text-sm font-black text-blue-400">
                01
              </span>

              <div>

                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Presente
                </p>

                <h3 className="font-extrabold text-white">
                  Estudiante de Ingeniería de Sistemas
                </h3>

              </div>

            </div>

            <p className="mt-7 leading-8 text-slate-300">
              Actualmente curso octavo semestre de Ingeniería de Sistemas.
              Esta etapa me ha permitido fortalecer mis conocimientos y
              entender mejor las diferentes áreas que forman parte del
              mundo tecnológico.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Además de las actividades académicas, continúo explorando
              herramientas y tecnologías que pueden ayudarme a desarrollar
              soluciones y proyectos propios.
            </p>

          </article>

          {/* =========================
              IMAGEN
          ========================= */}

          <div className="tarjeta p-4">

            <div className="relative h-[350px] overflow-hidden rounded-[20px]">

              <Image
                src="/images/CUC.jpg"
                alt="Imagen de mi vida universitaria"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* =========================
            PROYECCIÓN
        ========================= */}

        <div className="mt-6 grid gap-6 md:grid-cols-3">

          {/* =========================
              PROGRAMACIÓN
          ========================= */}

          <article className="tarjeta tarjeta-hover p-6">

            <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Desarrollo
            </p>

            <h3 className="mt-3 text-lg font-extrabold text-white">
              Programación
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Seguir mejorando mis capacidades para mejorar, opitimizar, crear aplicaciones y
              soluciones tecnológicas.
            </p>

          </article>

          {/* =========================
              NUEVAS TECNOLOGÍAS
          ========================= */}

          <article className="tarjeta tarjeta-hover p-6">

            <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Exploración
            </p>

            <h3 className="mt-3 text-lg font-extrabold text-white">
              Nuevas tecnologías
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Mantener una actitud de aprendizaje frente a las herramientas
              que están transformando la industria.
            </p>

          </article>

          {/* =========================
              EXPERIENCIA PROFESIONAL
          ========================= */}

          <article className="tarjeta tarjeta-hover p-6">

            <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Proyección
            </p>

            <h3 className="mt-3 text-lg font-extrabold text-white">
              Experiencia profesional
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Prepararme para aplicar lo aprendido en escenarios reales.
            </p>

          </article>

        </div>

      </div>
    </section>
  );
}

