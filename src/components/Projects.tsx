import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const proyectos = [
    {
      id: 1,
      nombre: "Gestión de Oficios",
      descripcion:
        "Sistema para la gestión y asignación de oficios con roles y autenticación segura.",
      imagen: "/img/oficios.PNG",
      enlace: "https://unah-oficios-dev.netlify.app/",
      tecnologias: ["FastAPI", "React", "PostgreSQL","Daisy UI"],
    },
    {
      id: 2,
      nombre: "Gestión de Inventarios",
      descripcion:
        "Panel para control de consumibles con historial de movimientos y búsqueda avanzada.",
      imagen: "/img/prestamos.jpg",
      enlace: "#",
      tecnologias: ["React", "Tailwind CSS", "Flask", "MySQL"],
    },
    {
      id: 3,
      nombre: "Nodo",
      descripcion:
        "Plataforma para gestionar solicitudes y pagos de préstamos con panel de control y notificaciones automáticas.",
      imagen: "/img/nodo.PNG",
      enlace: "https://presta-nodo.pages.dev/",
      tecnologias: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
    },
    
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 max-w-6xl mx-auto px-6"
    >
      <h2 className="text-3xl font-bold mb-8 text-primary">Proyectos</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className="bg-gray-800 p-6 rounded-xl transition duration-300 ease-in-out hover:scale-105 border border-transparent hover:border-cyan-400"
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.nombre}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{proyecto.nombre}</h3>
            <p className="text-gray-400 mb-3">{proyecto.descripcion}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {proyecto.tecnologias.map((tec, i) => (
                <span
                  key={i}
                  className="bg-cyan-700/30 text-cyan-300 text-xs px-2 py-1 rounded-md"
                >
                  {tec}
                </span>
              ))}
            </div>

            <a
              href={proyecto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Ver proyecto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
