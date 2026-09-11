import Image from "next/image";

export default function QuienSoy() {
  return (
    <section
      id="quien-soy"
      className="fondo-grid border-b border-slate-800"
    >
      <div className="contenedor grid min-h-[calc(100vh-64px)] items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]">

        {/* =========================
            INFORMACIÓN PRINCIPAL
        ========================= */}

        <div>

          <div className="etiqueta">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Autobiografía
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            Ingeniería de Sistemas · Octavo semestre
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
            Luis Carlos
            <span className="block text-blue-400">
              Filó Sanjuan
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Una mirada a mi historia, mi formación, mis intereses y
            la persona que estoy construyendo mientras avanzo en mi
            camino dentro de la Ingeniería de Sistemas.
          </p>

          {/* =========================
              BOTONES
          ========================= */}

          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="#mi-historia"
              className="boton-principal"
            >
              Conocer mi historia
            </a>

            <a
              href="#mi-futuro"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-slate-300 transition hover:border-slate-500 hover:bg-slate-800 hover:text-white"
            >
              Ver hacia dónde voy
            </a>

          </div>

          {/* =========================
              INFORMACIÓN PERSONAL
          ========================= */}

          <div className="mt-10 flex flex-wrap gap-3">

            <span className="tag">
              21 años
            </span>

            <span className="tag">
              Barranquilla, Colombia
            </span>

            <span className="tag">
              Ingeniería de Sistemas
            </span>

            <span className="tag">
              Tecnología
            </span>

            <span className="tag">
              Tu tranquil@ yo Resuelvo
            </span>

          </div>

        </div>

        {/* =========================
            IMAGEN
        ========================= */}

        <div className="relative">

          <div className="tarjeta p-4">

            <div className="relative h-[390px] overflow-hidden rounded-[20px]">

              <Image
                src="/images/yo 2.png"
                alt="Foto de Luis Carlos"
                fill
                className="object-cover"
                priority
              />

            </div>

          </div>

          {/* =========================
              TARJETA INFORMATIVA
          ========================= */}

          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-700 bg-[#111827] p-5 shadow-xl sm:block">

            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Actualmente
            </p>

            <p className="mt-1 text-lg font-extrabold text-white">
              Construyendo mi futuro
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
