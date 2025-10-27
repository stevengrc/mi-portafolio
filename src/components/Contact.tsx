export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-6 text-primary">Contacto</h2>
        <p className="text-gray-400 mb-8">
          ¿Quieres colaborar o tienes una idea interesante? Escríbeme:
        </p>
        <a
          href="mailto:tuemail@ejemplo.com"
          className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-500 transition-colors duration-700 ease-in-out"
        >
          Enviar correo
        </a>
      </div>
    </section>
  );
}