import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const smokeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    gsap.fromTo(
      heroRef.current.children,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1.2, ease: "power3.out" }
    );

    
    const handleMouseMove = (e: MouseEvent) => {
      if (!smokeRef.current) return;

      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

     
      gsap.to(smokeRef.current, {
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(0, 255, 255, 0.25), transparent 80%)`,
        duration: 6,
        ease: "power2.out",
      });
    };

    const heroEl = heroRef.current;
    heroEl.addEventListener("mousemove", handleMouseMove);
    return () => heroEl.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-20"
      >
        <source src="/videos/programming-bg.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

     
      <div
        ref={smokeRef}
        className="absolute inset-0 -z-10 pointer-events-none transition-all duration-500"
        style={{
          background: "radial-gradient(circle at center, rgba(0,255,255,0.15), transparent 10%)",
          mixBlendMode: "screen",
        }}
      ></div>

      
      <div className="z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          <span className="text-cyan-400 font-mono bg-cyan-900/30 px-2 py-1 rounded-lg">&lt;&gt;</span>
          Hola, soy <span className="text-cyan-400">Steven Garcia</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Ingeniero en Sistemas apasionado por el desarrollo web, las interfaces modernas y la tecnología.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-colors duration-500 ease-in-out"
        >
          Ver mis proyectos
        </a>
      </div>
    </section>
  );
}
