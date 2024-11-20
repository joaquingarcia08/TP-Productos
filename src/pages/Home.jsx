
import React from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import carroceria from '../assets/auto1.jpg';
import empleados from '../assets/auto2.jpg';

export default function Home() {
  return (
    <div>
        <Header />
        <h2>
          Presentación de la Empresa AutoWorld
        </h2>
          <p>      
            Historia
            La Empresa AutoWorld fue fundada en 1995 con el objetivo de revolucionar la industria de manufactura de autos. Desde nuestros primeros días, nos hemos comprometido a ofrecer productos de la más alta calidad, combinando la innovación tecnológica con la experiencia en el mercado.
          </p>
          <iframe title="video" id="video1" width="1109" height="624" src="https://www.youtube.com/embed/BVvnSzMqI3M" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='d-block mx-auto'></iframe>
          <p>
            A lo largo de los años, hemos crecido y evolucionado, expandiendo nuestras operaciones tanto a nivel nacional como internacional. Hoy en día, somos reconocidos como líderes en el diseño y fabricación de componentes electrónicos, con un enfoque en la sostenibilidad y el desarrollo de soluciones que mejoren la vida de las personas.
          </p>
          <a href='https://www.youtube.com/watch?v=Zn6scKf7k_0' target="_blank" rel="noopener noreferrer">
          <img src={carroceria} alt="fabrica de carroceria" className='img-fluid w-50 mx-auto d-block'/>
          </a>
          <p>
            Nuestra planta de producción, ubicada en el corazón de la ciudad, ha estado en constante expansión, incorporando tecnologías de vanguardia que nos permiten satisfacer las demandas de un mercado global en constante cambio. A lo largo de más de dos décadas, hemos logrado construir una reputación sólida gracias a nuestro compromiso con la calidad, la innovación y la responsabilidad social.
            Filosofía de la Empresa
            En Empresa AutoWorld, creemos firmemente que la innovación es el motor que impulsa el progreso. Nuestra filosofía se centra en tres pilares fundamentales:
          </p>
          <p>
            Calidad sin compromiso
            Nuestra misión es ofrecer productos que superen las expectativas de nuestros clientes en términos de calidad, durabilidad y eficiencia. Cada producto que fabricamos está sometido a rigurosos controles de calidad para garantizar su perfección.
          </p>
          <p>
            Compromiso con la sostenibilidad
            Entendemos que la sostenibilidad es clave para el futuro de nuestro planeta. Por eso, nos esforzamos por minimizar nuestro impacto ambiental en todas las etapas de producción. Usamos materiales reciclables, promovemos la eficiencia energética en nuestras fábricas y adoptamos prácticas responsables de gestión de residuos.
          </p>
          <p>
            Innovación constante
            Para mantenernos a la vanguardia de la industria, invertimos en investigación y desarrollo. Trabajamos de cerca con nuestros ingenieros y diseñadores para crear productos innovadores que no solo respondan a las necesidades del mercado, sino que también anticipen las tendencias futuras.
            Visión y Misión
            Visión: Ser la empresa líder en la fabricación de autos tecnológicos avanzados, que ayuden a crear un futuro más conectado y sostenible para todos.
          </p>
          <p>
            Misión: Proporcionar a nuestros clientes productos de tecnología avanzada con un enfoque en la calidad, la innovación y la responsabilidad social, manteniendo siempre un compromiso con el medio ambiente y el bienestar de la comunidad.
          </p>
          <h3>
            Nuestro Equipo
          </h3>
          <a href='https://www.youtube.com/watch?v=Zn6scKf7k_0' target="_blank" rel="noopener noreferrer">
          <img src={empleados} alt="empleados con auto terminado" className='img-fluid w-50 mx-auto d-block'/>
          </a>
          <p>
            Contamos con un equipo de profesionales altamente capacitados, comprometidos con la misión de la empresa. Nuestros empleados son el corazón de la compañía, y cada uno juega un papel crucial en el éxito continuo de la empresa. Estamos orgullosos de fomentar un ambiente de trabajo colaborativo y de brindar oportunidades de crecimiento para todos.
          </p>

          <p>
            Compromiso con la Comunidad
            En Empresa AutoWorld, no solo estamos comprometidos con nuestros clientes, sino también con las comunidades en las que operamos. A través de programas de responsabilidad social empresarial, trabajamos para mejorar la educación, la salud y el bienestar en las comunidades cercanas a nuestras plantas de producción.
          </p>
          <p>
            ¡Gracias por ser parte de nuestra historia!
          </p>
          <h3>Información de Contacto</h3>

          <h3>Dirección:</h3>
          <p>Av. Córdoba 1234, Piso 5, Oficina 2, Ciudad Autónoma de Buenos Aires, Argentina.</p>

          <h3 >Teléfono:</h3>
          <p>+54 11 1234-5678</p>

          <h3>Correo Electrónico:</h3>
          <p>
            <a href="mailto:contacto@empresaxyz.com.ar">contacto@empresaxyz.com.ar</a>
          </p>

          <h3>Horario de Apertura:</h3>
          <p>
            Lunes a Viernes: 9:00 AM - 6:00 PM<br />
            Sábados: 10:00 AM - 2:00 PM<br />
            Domingos: Cerrado
          </p>

          <h3>Redes Sociales:</h3>
          <p>
            Facebook: <a href="https://facebook.com/empresaAutoWorld" target="_blank" rel="noopener noreferrer">facebook.com/empresaAutoWorld</a><br />
            Twitter: <a href="https://twitter.com/empresaAutoWorld" target="_blank" rel="noopener noreferrer">@empresaAutoWorld</a><br />
            Instagram: <a href="https://instagram.com/empresaAutoWorld" target="_blank" rel="noopener noreferrer">@empresaAutoWorld</a>
          </p>

          <h3>Mapa de Ubicación:</h3>
          <p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1839958626883!2d-58.387001388257644!3d-34.599508557163865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac7ea9eea65%3A0xf81aef973e067eb8!2sAv.%20C%C3%B3rdoba%201234%20Piso%205%2C%20Oficina%202%2C%20C1055AAP%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1732137031362!5m2!1ses-419!2sar" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </p>
        <Footer />
    </div>
    )
}
