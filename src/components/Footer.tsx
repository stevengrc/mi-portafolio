import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-2 m-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">

        {/* Íconos */}
        <div className="flex space-x-5 text-2xl">
          <a
            href="https://github.com/stevengrc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/steven-garcia-95005a225"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/channel/UCJ17kezzY8DVvPYu36H3tQw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition-colors"
          >
            <FaYoutube />
          </a>
        </div>
        <p className="text-sm mb-4 mt-4 md:mb-0">
          © 2025 Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}