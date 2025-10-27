import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
     if (!heroRef.current) return;
    gsap.fromTo(
      heroRef.current.children,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
      >
        <source src="/videos/programming-bg.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

     
      <div ref={heroRef} className="z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Hola, soy <span className="text-cyan-400">Steven Garcia</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Ingeniero en Sistemas apasionado por el desarrollo web, las interfaces modernas y la tecnología.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-all duration-500 ease-in-out"
        >
          Ver mis proyectos
        </a>
      </div>
    </section>
  );
}
