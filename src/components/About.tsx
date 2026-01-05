import { useTranslation } from "react-i18next";
import Piano from "./Piano";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="about"
        className="py-24 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Texto */}
        <div className="sm:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center justify-center md:justify-start gap-2">
            {t("about.title")}
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            {t("about.description1.part1")}{" "}
            <span className="text-cyan-400 font-semibold">
              {t("about.description1.career")}
            </span>{" "}
            {t("about.description1.part2")}{" "}
            <span className="text-cyan-400 font-semibold">
              {t("about.description1.university")}
            </span>
            . {t("about.description1.part3")}{" "}
            <span className="text-cyan-400">
              <i>{t("about.description1.stack")}</i>
            </span>
            .
          </p>

          <p className="text-gray-400">
            {t("about.description2")}
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 flex flex-col justify-center items-center gap-8">
          <img
            src="/img/profile.jpg"
            alt={t("about.imageAlt")}
            className="w-64 sm:w-80 rounded-2xl shadow-lg border border-cyan-700 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* 🎹 Piano */}
      <Piano />
    </>
  );
}
