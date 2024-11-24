
import React from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import oficina from '../assets/auto1.jpg';
import equipo from '../assets/auto2.jpg';

export default function Home() {
  return (
    <div>
        <Header />
        <h2>
          Presentación de la Empresa CompuWorld
        </h2>
        <p>
          Historia<br />
          CompuWorld fue fundada en 1995 con el objetivo de revolucionar la industria tecnológica. Desde nuestros inicios, hemos estado comprometidos con el desarrollo de soluciones innovadoras que combinan tecnología avanzada y una experiencia de usuario de excelencia.
        </p>
        <iframe title="video" id="video1" width="1109" height="624" src="https://www.youtube.com/embed/BVvnSzMqI3M" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='d-block mx-auto'></iframe>
        <p>
          A lo largo de los años, hemos evolucionado hacia un enfoque global, ampliando nuestras operaciones y servicios a múltiples países. Hoy en día, CompuWorld es un referente en el desarrollo de software, soluciones en la nube y dispositivos tecnológicos que mejoran la calidad de vida de las personas.
        </p>
        <a href='https://www.youtube.com/watch?v=Zn6scKf7k_0' target="_blank" rel="noopener noreferrer">
          <img src={oficina} alt="oficina de CompuWorld" className='img-fluid w-50 mx-auto d-block'/>
        </a>
        <p>
          Nuestra sede central, ubicada en el corazón de la ciudad, está equipada con las últimas tecnologías para fomentar un ambiente creativo e innovador. En más de dos décadas, hemos construido una reputación sólida basada en nuestro compromiso con la calidad, la innovación y la responsabilidad social.
          Filosofía de la Empresa<br />
          En CompuWorld, creemos que la tecnología es el motor del cambio. Nuestra filosofía se basa en tres pilares:
        </p>
        <p>
          Calidad sin compromiso<br />
          Nos dedicamos a entregar productos y servicios que superen las expectativas de nuestros clientes, asegurando estándares rigurosos de calidad en cada desarrollo.
        </p>
        <p>
          Compromiso con la sostenibilidad<br />
          Integramos prácticas sostenibles en cada etapa de nuestro proceso, desde la producción hasta la distribución, minimizando nuestro impacto ambiental.
        </p>
        <p>
          Innovación constante<br />
          Invertimos significativamente en investigación y desarrollo, anticipándonos a las necesidades del mercado y creando soluciones tecnológicas que definen el futuro.
        </p>
        <h3>
          Nuestro Equipo
        </h3>
        <a href='https://www.youtube.com/watch?v=Zn6scKf7k_0' target="_blank" rel="noopener noreferrer">
          <img src={equipo} alt="equipo de trabajo en CompuWorld" className='img-fluid w-50 mx-auto d-block'/>
        </a>
        <p>
          Contamos con un equipo de profesionales apasionados por la tecnología. Cada miembro de CompuWorld aporta su experiencia y creatividad, contribuyendo al éxito y crecimiento de la empresa. Promovemos un ambiente colaborativo que inspira innovación y aprendizaje continuo.
        </p>
        <p>
          Compromiso con la Comunidad<br />
          En CompuWorld, nuestra responsabilidad no solo se limita a nuestros clientes, sino también a las comunidades donde operamos. Apoyamos programas educativos y de inclusión digital que buscan cerrar la brecha tecnológica y fomentar el desarrollo local.
        </p>
        <p>
          ¡Gracias por ser parte de nuestra historia!
        </p>
        <h3>Información de Contacto</h3>

        <h3>Dirección:</h3>
        <p>Av. Córdoba 1234, Piso 5, Oficina 2, Ciudad Autónoma de Buenos Aires, Argentina.</p>

        <h3>Teléfono:</h3>
        <p>+54 11 9876-5432</p>

        <h3>Correo Electrónico:</h3>
        <p>
          <a href="mailto:contacto@compuworld.com.ar">contacto@compuworld.com.ar</a>
        </p>

        <h3>Horario de Apertura:</h3>
        <p>
          Lunes a Viernes: 9:00 AM - 6:00 PM<br />
          Sábados: 10:00 AM - 2:00 PM<br />
          Domingos: Cerrado
        </p>

        <h3>Redes Sociales:</h3>
        <p>
          Facebook: <a href="https://facebook.com/compuworld" target="_blank" rel="noopener noreferrer">facebook.com/compuworld</a><br />
          Twitter: <a href="https://twitter.com/compuworld" target="_blank" rel="noopener noreferrer">@compuworld</a><br />
          Instagram: <a href="https://instagram.com/compuworld" target="_blank" rel="noopener noreferrer">@compuworld</a>
        </p>

        <h3>Mapa de Ubicación:</h3>
        <p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1839958626883!2d-58.387001388257644!3d-34.599508557163865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac7ea9eea65%3A0xf81aef973e067eb8!2sAv.%20C%C3%B3rdoba%201234%20Piso%205%2C%20Oficina%202%2C%20C1055AAP%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1732137031362!5m2!1ses-419!2sar" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </p>
        <Footer />
    </div>
    )
}
