export default function MiFuturo() {
  return (
    <section id="mi-futuro" className="seccion">

      <div className="contenedor">

        <span className="etiqueta">
          06 · Mi futuro
        </span>

        <h2 className="titulo-seccion">
          No tengo todo definido, pero sí tengo una dirección.
        </h2>

        <p className="descripcion-seccion">
          Mis metas combinan crecimiento profesional, independencia,
          estabilidad y experiencias que me permitan disfrutar y aprender
          durante el camino.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {/* =========================
              ASPIRACIONES PERSONALES
          ========================= */}

          <article className="tarjeta tarjeta-hover overflow-hidden">

            <div className="border-b border-slate-800 bg-[#111827] p-8">

              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Aspiraciones personales
              </span>

              <h3 className="mt-4 text-3xl font-black text-white">
                La vida que quiero construir.
              </h3>

            </div>

            <div className="space-y-6 p-8">

              <div>

                <h4 className="font-extrabold text-white">
                  01 · Estabilidad y bienestar
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Construir una vida estable en la que pueda tener
                  tranquilidad, bienestar y tiempo para disfrutar de las
                  cosas que considero importantes.
                </p>

              </div>

              <div>

                <h4 className="font-extrabold text-white">
                  02 · Independencia
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Alcanzar una independencia económica y personal que me
                  permita tomar mis propias decisiones y construir el
                  estilo de vida que deseo.
                </p>

              </div>

              <div>

                <h4 className="font-extrabold text-white">
                  03 · Viajes y experiencias
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Conocer nuevos lugares, culturas y personas, acumulando
                  experiencias que contribuyan a mi crecimiento personal.
                </p>

              </div>

            </div>

          </article>

          {/* =========================
              OBJETIVOS PROFESIONALES
          ========================= */}

          <article className="tarjeta tarjeta-hover overflow-hidden">

            <div className="border-b border-blue-900/50 bg-blue-950/40 p-8">

              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Objetivos profesionales
              </span>

              <h3 className="mt-4 text-3xl font-black text-white">
                El profesional que quiero ser.
              </h3>

            </div>

            <div className="space-y-6 p-8">

              <div>

                <h4 className="font-extrabold text-white">
                  01 · Culminar mi carrera
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Finalizar satisfactoriamente mi formación como Ingeniero
                  de Sistemas y aprovechar los conocimientos adquiridos
                  durante estos semestres.
                </p>

              </div>

              <div>

                <h4 className="font-extrabold text-white">
                  02 · Fortalecer mis habilidades
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Continuar aprendiendo programación, desarrollo de
                  software, bases de datos, análisis de datos y nuevas
                  tecnologías.
                </p>

              </div>

              <div>

                <h4 className="font-extrabold text-white">
                  03 · Obtener experiencia profesional
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Encontrar oportunidades que me permitan aplicar mis
                  conocimientos en situaciones reales y adquirir
                  experiencia dentro del campo de la Ingeniería de Sistemas.
                </p>

              </div>

              <div>

                <h4 className="font-extrabold text-white">
                  04 · Construir un perfil sólido
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Desarrollar un perfil profesional basado en mis
                  capacidades, responsabilidad, adaptación y disposición
                  para seguir aprendiendo.
                </p>

              </div>

            </div>

          </article>

        </div>

        {/* =========================
            CIERRE
        ========================= */}

        <div className="mt-6 rounded-3xl border border-slate-800 bg-[#0f172a] p-8 sm:p-10">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Próximo capítulo
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Seguir aprendiendo, avanzar y construir mi propio camino.
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                El futuro todavía tiene muchas cosas por descubrir.
                Por ahora, mi objetivo es aprovechar el presente para
                prepararme mejor para las oportunidades que vendrán.
              </p>

            </div>

            <div className="hidden text-right lg:block">

              <span className="text-7xl font-black text-blue-400">
                →
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}