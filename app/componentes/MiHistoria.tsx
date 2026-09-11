import Image from "next/image";

export default function MiHistoria() {
  return (
    <section id="mi-historia" className="seccion">
      <div className="contenedor">
        <div>
          <span className="etiqueta">02 · Mi historia</span>

          <h2 className="titulo-seccion">
            El camino que me ha traído hasta aquí.
          </h2>

          <p className="descripcion-seccion">
            Mi historia está formada por diferentes etapas, experiencias y
            decisiones que han influido en la persona que soy actualmente.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div className="timeline space-y-10">
            <article className="timeline-item">
              <span className="timeline-dot" />

              <div className="tarjeta tarjeta-hover p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-500">
                  Primeros años
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-slate-100">
                  Infancia
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  Desde mi infancia siempre tuve curiosidad por conocer cómo
                  funcionaban las cosas y encontrar soluciones a diferentes
                  situaciones. Con el paso de los años, esa curiosidad se fue
                  relacionando cada vez más con la tecnología y con el interés
                  por aprender sobre computadores, programas y herramientas
                  digitales. Fue así como decidí estudiar Ingeniería de
                  Sistemas, una carrera que considero acorde con mis
                  capacidades, mis intereses y la forma en la que quiero
                  construir mi futuro profesional.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-dot" />

              <div className="tarjeta tarjeta-hover p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-500">
                  Personas importantes
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-slate-100">
                  Familia
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  Mi familia ha sido una parte fundamental de mi crecimiento y
                  de la persona que soy actualmente. Desde pequeño, su apoyo,
                  sus enseñanzas y los valores que me han transmitido han
                  influido en la manera en que enfrento los diferentes retos de
                  mi vida. Cada integrante de mi familia ha aportado de alguna
                  manera a mi formación, enseñándome la importancia de la
                  responsabilidad, la perseverancia y el esfuerzo para alcanzar
                  mis objetivos.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-dot" />

              <div className="tarjeta tarjeta-hover p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-500">
                  Experiencias
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-slate-100">
                  Momentos importantes
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  Uno de los aspectos más importantes en mi decisión fue
                  descubrir, durante mi formación académica, que la tecnología
                  no solo sirve como una herramienta, sino que también permite
                  crear soluciones para diferentes necesidades. Algunas
                  experiencias relacionadas con la informática y el desarrollo
                  de proyectos despertaron aún más mi interés por este campo y
                  me motivaron a seguir aprendiendo.
                </p>
              </div>
            </article>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="tarjeta p-4">
              <div className="relative h-[350px] overflow-hidden rounded-[20px]"></div>
              <Image
                src="/images/Familia.jpeg"
                alt="Fotografía de mi infancia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
