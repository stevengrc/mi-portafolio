export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 max-w-6xl mx-auto px-6 flex flex-col  md:flex-row  items-center gap-10"
    >
      {/* Imagen - Ahora a la izquierda */}
    
      {/* Texto - Ahora a la derecha */}
      <div className="sm:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-6 text-primary flex items-center justify-center md:justify-start gap-2">
          Sobre mí 
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Soy <span className="text-cyan-400 font-semibold">ingeniero en sistemas</span>{" "}
          graduado de la{" "}
          <span className="text-cyan-400 font-semibold">
            Universidad Nacional Autónoma de Honduras (UNAH)
          </span>
          . Tengo experiencia en desarrollo web{" "}
          <span className="text-cyan-400"><i>full stack</i></span>, diseño de bases de datos y la
          integración de tecnologías modernas como{" "}
          <span className="text-cyan-400"><i>Node.js, React, FastAPI y PostgreSQL</i></span>.
        </p>
        <p className="text-gray-400">
          Me apasiona crear soluciones digitales innovadoras, eficientes y centradas en la
          experiencia del usuario.
        </p>
      </div>
       <div className="md:w-1/2 flex justify-center">
        <img 
          src="/img/profile.jpg" 
          alt="Foto de perfil" 
          className="w-64 sm:w-80 rounded-2xl shadow-lg border border-cyan-700 hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
    </section>
  );
}
