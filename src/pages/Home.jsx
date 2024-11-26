
import React from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import compu from '../assets/compu1.jpg';
import equipo from '../assets/equipo1.jpg';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container text-center mt-4">
        <h2 className="mb-4">Presentación de la Empresa CompuWorld</h2>
        <p className="mb-4">
          <strong>Historia</strong>
          <br />
          CompuWorld fue fundada en 1995 con el objetivo de revolucionar la industria tecnológica. Desde nuestros inicios, hemos estado comprometidos con el desarrollo de soluciones innovadoras que combinan tecnología avanzada y una experiencia de usuario de excelencia.
        </p>
        <iframe
          title="video"
          id="video1"
          width="80%"
          height="450"
          src="https://www.youtube.com/embed/iExX3T70878"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="d-block mx-auto mb-4"
        ></iframe>
        <p className="mb-4">
          A lo largo de los años, hemos evolucionado hacia un enfoque global, ampliando nuestras operaciones y servicios a múltiples países. Hoy en día, CompuWorld es un referente en el desarrollo de software, soluciones en la nube y dispositivos tecnológicos que mejoran la calidad de vida de las personas.
        </p>
        <a
          href="https://youtu.be/iExX3T70878"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={compu}
            alt="oficina de CompuWorld"
            className="img-fluid w-50 mx-auto d-block mb-4 rounded shadow"
          />
        </a>
        <p className="mb-4">
          Nuestra sede central, ubicada en el corazón de la ciudad, está equipada con las últimas tecnologías para fomentar un ambiente creativo e innovador. En más de dos décadas, hemos construido una reputación sólida basada en nuestro compromiso con la calidad, la innovación y la responsabilidad social.
        </p>
        <div className="my-4">
          <h3>Filosofía de la Empresa</h3>
          <p>
            <strong>Calidad sin compromiso:</strong> Nos dedicamos a entregar productos y servicios que superen las expectativas de nuestros clientes, asegurando estándares rigurosos de calidad en cada desarrollo.
          </p>
          <p>
            <strong>Compromiso con la sostenibilidad:</strong> Integramos prácticas sostenibles en cada etapa de nuestro proceso, desde la producción hasta la distribución, minimizando nuestro impacto ambiental.
          </p>
          <p>
            <strong>Innovación constante:</strong> Invertimos significativamente en investigación y desarrollo, anticipándonos a las necesidades del mercado y creando soluciones tecnológicas que definen el futuro.
          </p>
        </div>
        <div className="my-4">
          <h3>Nuestro Equipo</h3>
          <a
            href="https://youtu.be/iExX3T70878"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={equipo}
              alt="equipo de trabajo en CompuWorld"
              className="img-fluid w-50 mx-auto d-block mb-4 rounded shadow"
            />
          </a>
          <p>
            Contamos con un equipo de profesionales apasionados por la tecnología. Cada miembro de CompuWorld aporta su experiencia y creatividad, contribuyendo al éxito y crecimiento de la empresa. Promovemos un ambiente colaborativo que inspira innovación y aprendizaje continuo.
          </p>
        </div>
        <div className="my-4">
          <h3>Información de Contacto</h3>
          <p><strong>Dirección:</strong> Av. Córdoba 1234, Piso 5, Oficina 2, Ciudad Autónoma de Buenos Aires, Argentina.</p>
          <p><strong>Teléfono:</strong> +54 11 9876-5432</p>
          <p>
            <strong>Correo Electrónico:</strong>{' '}
            <a href="mailto:contacto@compuworld.com.ar">contacto@compuworld.com.ar</a>
          </p>
          <p>
            <strong>Horario de Apertura:</strong>
            <br />
            Lunes a Viernes: 9:00 AM - 6:00 PM<br />
            Sábados: 10:00 AM - 2:00 PM<br />
            Domingos: Cerrado
          </p>
          <p>
            <strong>Redes Sociales:</strong>
            <br />
            Facebook: <a href="https://facebook.com/compuworld" target="_blank" rel="noopener noreferrer">facebook.com/compuworld</a>
            <br />
            Twitter: <a href="https://twitter.com/compuworld" target="_blank" rel="noopener noreferrer">@compuworld</a>
            <br />
            Instagram: <a href="https://instagram.com/compuworld" target="_blank" rel="noopener noreferrer">@compuworld</a>
          </p>
        </div>
        <div className="my-4">
          <h3>Mapa de Ubicación</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1839958626883!2d-58.387001388257644!3d-34.599508557163865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac7ea9eea65%3A0xf81aef973e067eb8!2sAv.%20C%C3%B3rdoba%201234%20Piso%205%2C%20Oficina%202%2C%20C1055AAP%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1732137031362!5m2!1ses-419!2sar"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
