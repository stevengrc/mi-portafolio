import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-70 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-primary">
          <a href="#hero">SG <i>Dev</i></a>
        </h1>

        {/* Links */}
        <ul className="flex gap-6 text-sm items-center">
          <li>
            <a href="#about" className="hover:text-cyan-400">
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400">
              {t("navbar.projects")}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400">
              {t("navbar.contact")}
            </a>
          </li>

          {/* 🌍 Idioma */}
          <li>
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all text-xs"
            >
              {i18n.language.toUpperCase()}
            </button>
          </li>
        </ul>

      </div>
    </nav>
  );
}
