type Cancion = {
  titulo: string;
  artista: string;
  spotify: string;
};

type Interes = {
  numero: string;
  titulo: string;
  descripcion: string;
  imagenes: string[];
  alt: string;
  canciones?: Cancion[];
};

const intereses: Interes[] = [
  {
    numero: "01",
    titulo: "Fotografía",
    descripcion:
      "Me interesa capturar momentos, experimentar con diferentes perspectivas y observar detalles que muchas veces pasan desapercibidos, pero mi perro Braulio es mi modelo favorito",
    imagenes: [
      "/images/Foto1.jpeg",
      "/images/Foto2.jpeg",
      "/images/Foto3.jpeg",
    ],
    alt: "Fotografía",
  },

  {
    numero: "02",
    titulo: "Videojuegos",
    descripcion:
      "Los videojuegos forman parte de mis espacios de entretenimiento y también despiertan mi interés por la tecnología, el diseño y las experiencias digitales.",
    imagenes: ["/images/Game.jpg"],
    alt: "Videojuegos",
  },

  {
    numero: "03",
    titulo: "Lectura",
    descripcion:
      "Me interesan especialmente las historias de ciencia ficción y las narrativas relacionadas con futuros distópicos.",
    imagenes: ["/images/Libros.jpg"],
    alt: "Libros de distopias",
  },

  {
    numero: "04",
    titulo: "Música",
    descripcion:
      "Entre las bandas que más escucho están System of a Down, Linkin Park y La Unión.",
    imagenes: [],
    alt: "Música",
    canciones: [
      {
        titulo: "Aerials",
        artista: "System of a Down",
        spotify:
          "https://open.spotify.com/search/Aerials%20System%20of%20a%20Down",
      },
      {
        titulo: "Numb",
        artista: "Linkin Park",
        spotify:
          "https://open.spotify.com/search/Numb%20Linkin%20Park",
      },
      {
        titulo: "Lobo-Hombre en París",
        artista: "La Unión",
        spotify:
          "https://open.spotify.com/search/Lobo-Hombre%20en%20Paris%20La%20Union",
      },
    ],
  },

  {
    numero: "05",
    titulo: "Deporte",
    descripcion:
      "El gimnasio y el fútbol hacen parte de mis actividades. Además, el deporte representa una forma de mantenerme activo y despejar la mente.",
    imagenes: [
      "/images/Gym.jpeg",
      "/images/Gym3.jpeg",
      "/images/Gym2.jpeg",
    ],
    alt: "Deporte",
  },

  {
    numero: "06",
    titulo: "Tecnología",
    descripcion:
      "La programación, el desarrollo de software y las nuevas tecnologías son áreas que quiero seguir explorando durante mi formación profesional.",
    imagenes: ["/images/Tecnologi.jpg"],
    alt: "Tecnología",
  },
];

export default function MisIntereses() {
  return (
    <section id="mis-intereses" className="seccion">
      <div className="contenedor">
        <span className="etiqueta">04 · Mis intereses</span>

        <h2 className="titulo-seccion">
          Lo que también forma parte de mí.
        </h2>

        <p className="descripcion-seccion">
          Aunque gran parte de mi camino está relacionado con la tecnología,
          también existen actividades, historias, sonidos y experiencias
          que forman parte de mi personalidad y de la manera en que disfruto
          mi tiempo.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {intereses.map((interes) => (
            <article
              key={interes.numero}
              className="tarjeta tarjeta-hover overflow-hidden"
            >
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-blue-400">
                    {interes.numero}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                </div>

                {interes.titulo === "Música" && interes.canciones && (
                  <div className="lista-canciones canciones-musica">
                    {interes.canciones.map((cancion) => (
                      <a
                        key={cancion.titulo}
                        href={cancion.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cancion"
                      >
                        <span className="cancion-icono">▶</span>

                        <span className="cancion-info">
                          <span className="cancion-titulo">
                            {cancion.titulo}
                          </span>

                          <span className="cancion-artista">
                            {cancion.artista}
                          </span>
                        </span>

                        <span className="cancion-flecha">↗</span>
                      </a>
                    ))}
                  </div>
                )}

                {interes.titulo !== "Música" && (
                  <>
                    {interes.imagenes.length === 1 ? (
                      <div className="interes-imagen">
                        <img
                          src={interes.imagenes[0]}
                          alt={interes.alt}
                        />
                      </div>
                    ) : (
                      <div className="interes-galeria">
                        {interes.imagenes.map((imagen, index) => (
                          <img
                            key={imagen}
                            src={imagen}
                            alt={`${interes.alt} ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}

                <h3 className="mt-5 text-xl font-extrabold text-white">
                  {interes.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {interes.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}