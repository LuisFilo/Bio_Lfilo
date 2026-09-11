import Navegacion from "./componentes/Navegacion";
import QuienSoy from "./componentes/QuienSoy";
import MiHistoria from "./componentes/MiHistoria";
import MiFormacion from "./componentes/MiFormacion";
import MisIntereses from "./componentes/MisIntereses";
import VidaActual from "./componentes/VidaActual";
import MiFuturo from "./componentes/MiFuturo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c14]">

      <Navegacion />

      <main className="pt-16">

        <QuienSoy />

        <MiHistoria />

        <MiFormacion />

        <MisIntereses />

        <VidaActual />

        <MiFuturo />

      </main>

      <footer className="border-t border-slate-800 bg-[#080c14]">

        <div className="contenedor flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="font-bold text-white">
              Luis Carlos Filó Sanjuan
            </p>

            <p className="text-sm text-slate-500">
              Autobiografía
            </p>

          </div>

          <p className="text-sm text-slate-500">
            Desarrollo Fullstack · 2026
          </p>


        </div>

      </footer>

    </div>
  );
}