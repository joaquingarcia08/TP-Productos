import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

export default function Home() {
  return (
    <div>
        <head>
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Inicio - [Nombre de la Empresa]</title>
            <link rel="stylesheet" href="estilos.css"> </link>
        </head>
        <body>

        {/*-- Encabezado -- */}
        <header>
            <div class="logo">
                <img src="logo.png" alt="Logo de [Nombre de la Empresa]"></img>
            </div>
            <nav>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#galeria">Galería</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>

        {/*-- Sección Hero -->*/}
        <section id="inicio" class="hero">
            <h1>Bienvenidos a [Nombre de la Empresa]</h1>
            <p>Líderes en [industria], ofreciendo [producto o servicio] desde [año].</p>
            <a href="#sobre-nosotros" class="cta-btn">Conoce nuestra historia</a>
        </section>

        {/*-- Sobre Nosotros -->*/}
        <section id="sobre-nosotros">
            <h2>Nuestra Historia y Filosofía</h2>
            <p>[Aquí va la descripción de la empresa]</p>
            <img src="empresa.jpg" alt="Foto de la empresa"></img>
        </section>
        {/*-- Galería de Imágenes -->*/}
        <section id="galeria">
            <h2>Galería</h2>
            <a href="https://www.youtube.com/watch?v=videoID" target="_blank">
                <img src="imagen1.jpg" alt="Imagen descriptiva"></img>
            </a>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoID" frameborder="0" allowfullscreen></iframe>
        </section>

        {/*-- Información de Contacto*/}
        <section id="contacto">
            <h2>Contáctanos</h2>
            <p>Dirección: [Dirección de la empresa]</p>
            <p>Teléfono: [Número de teléfono]</p>
            <p>Correo: [Correo de contacto]</p>
            <p>Horario: [Horario de apertura]</p>
        </section>

        {/*-- Mapa Interactivo */}
        <section>
            <h2>Visítanos</h2>
            <iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </section>

        {/*-- Pie de Página -->*/}
        <footer>
            <p>© 2024 [Nombre de la Empresa]. Todos los derechos reservados.</p>
        </footer>

        </body>
    </div>
    )
}
