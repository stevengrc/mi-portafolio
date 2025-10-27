export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-70 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary"><a href ="index.html">SG <i>Dev</i></a></h1>
        <ul className="flex gap-6 text-sm">
          <li><a href="#about" className="hover:text-cyan-400">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}