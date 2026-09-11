"use client";

import { useEffect, useState } from "react";

const secciones = [
  { id: "quien-soy", label: "Quién soy" },
  { id: "mi-historia", label: "Historia" },
  { id: "mi-formacion", label: "Formación" },
  { id: "mis-intereses", label: "Intereses" },
  { id: "vida-actual", label: "Vida actual" },
  { id: "mi-futuro", label: "Mi futuro" },
];

export default function Navegacion() {
  const [activa, setActiva] = useState("quien-soy");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visible) {
          setActiva(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    secciones.forEach((seccion) => {
      const elemento = document.getElementById(seccion.id);

      if (elemento) {
        observer.observe(elemento);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/80 bg-[#0b1120]/90 backdrop-blur-xl">
      <div className="contenedor flex h-16 items-center justify-between gap-5">
        <a
          href="#quien-soy"
          className="shrink-0 text-sm font-extrabold tracking-tight text-white"
        >
          LCFS<span className="text-blue-400">.</span>
        </a>

        <div className="flex min-w-0 gap-1 overflow-x-auto">
          {secciones.map((seccion) => (
            <a
              key={seccion.id}
              href={`#${seccion.id}`}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition ${
                activa === seccion.id
                  ? "bg-blue-500 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {seccion.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}