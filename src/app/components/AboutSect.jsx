"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import './neonimg.css';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    images: [
      {
        src: "/image/about-image.png",
        alt: "Skills Imagen 1",
        width: 900,
        height: 900,
        
      }
    ],
    content: (
      <ul className="list-disc pl-2">
        <li>Experimenta la emoción de las batallas de motos de luz, los enfrentamientos de tanques y las estrategias en las torres I/O en un solo juego.</li>
        <li>Disfruta de gráficos y efectos visuales que capturan la estética icónica de la película Tron. Sumérgete en un mundo digital lleno de neón y luz.</li>
        <li>Compite contra tus amigos en emocionantes partidas multijugador locales. Lucha por la supremacía en la cuadrícula digital con una variedad de modos de juego.</li>
        <li>Utiliza estrategia y habilidad para superar a tus oponentes. Crea barreras de luz, dispara proyectiles de tanque, controla torres I/O y caza gridbugs para dominar la cuadrícula.</li>
        <li>¡Aprende mientras juegas con el sistema de preguntas personalizado!</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    images: [
      {
        src: "/image/cycle.png",
        alt: "Education Imagen 1",
        width: 400,
        height: 400,
      },
      {
        src: "/image/tank.png",
        alt: "Education Imagen 2",
        width: 400,
        height: 400,
      },
      {
        src: "/image/gbug.png",
        alt: "Education Imagen 3",
        width: 400,
        height: 400,
      },
      {
        src: "/image/mcp.png",
        alt: "Education Imagen 4",
        width: 400,
        height: 400,
      },
    ],
    content: (
      <ul className="list-disc pl-2">
        <li>Motos de Luz:

En el emocionante minijuego de &quot;Motos de Luz&quot;, los jugadores se suben a las icónicas motos de luz y compiten en una carrera mortal. Esquiva los obstáculos que se encuentran en la pista y planifica tus movimientos con cuidado para cortarles el paso. La velocidad y la agilidad son esenciales para sobrevivir y ser el último en pie en la cuadrícula digital.</li>
<li>Tanques de Luz: El minijuego de &quot;Tanques&quot; te sumerge en un enfrentamiento de alta tecnología. Controla un tanque futurista y utiliza proyectiles láser para destruir a tus oponentes. la estrategia es crucial mientras te abres paso a través de la cuadrícula digital, disparando a los enemigos y evitando sus ataques. </li>
<li>Caza de Gridbugs:
En el minijuego de &quot;Caza de Gridbugs&quot;, te embarcarás en una misión para eliminar a las plagas digitales conocidas como gridbugs. Estas criaturas digitales se mueven y multiplican rápidamente y representan una amenaza para la estabilidad de la cuadrícula. Utiliza tus habilidades de caza y captura a estos bichos molestos mientras evitas sus movimientos impredecibles. Sin embargo, tienes un tiempo límite, y tu única manera de sobrevivir es escapar a la esfera de escape.</li>
<li>Entrada al MCP (Control Maestro del Programa):

En este emocionante minijuego, los jugadores se enfrentarán al desafío definitivo: penetrar en el corazón mismo del sistema, el Control Maestro del Programa (MCP). La misión es infiltrarse en este centro neurálgico digital y desactivar sus defensas. Sin embargo, este tiene defensas, paredes reforzadas las cuales solo pueden ser destruidas con tu arma. </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    images: [
      {
        src: "/image/unity.png",
        alt: "Certifications Imagen 1",
        width: 600,
        height: 400,
      },
      {
        src: "/image/arduino.png",
        alt: "Certifications Imagen 2",
        width: 400,
        height: 400,
      },
      {
        src: "/image/python.png",
        alt: "Certifications Imagen 3",
        width: 400,
        height: 400,
      },
      {
        src: "/image/csharp.png",
        alt: "Certifications Imagen 4",
        width: 400,
        height: 400,
      },
    ],
    content: (
      <ul className="list-disc pl-2">
        <li>Motor de Juego Unity: Unity es el motor de juego utilizado para desarrollar &quot;TRON REMAKE&quot;. Es conocido por su versatilidad y capacidad para crear gráficos 3D impresionantes, lo que lo convierte en una elección popular para desarrolladores de juegos.</li>
        <li>Lenguaje de Programación C#:

        C# es el lenguaje de programación principal utilizado en Unity. Se utiliza para escribir el código del juego, controlar el comportamiento de los objetos y gestionar la lógica del juego.</li>
        <li>Programación de Arduino:

        Para la integración del mundo físico y digital, se utiliza programación de Arduino para controlar los dispositivos físicos, como el controlador que hemos realizado.</li>
        <li>Comunicación Serie:

        La comunicación serie se emplea para la transmisión de datos entre los controladores físicos y el juego. Esto permite que los movimientos de los jugadores se reflejen en tiempo real en el juego digital.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="image-container">
          {tab === "skills" && (
            <div className="flex p-10 justify-center">
              {/* Imagen de Skills */}
              <Image
                src="/image/about-image.png"
                alt="Skills Imagen 1"
                width={900}
                height={900}
                className="neon-border"
              />
            </div>
          )}

          {(tab === "education" || tab === "certifications") && (
            <div className="grid grid-cols-2 gap-8">
              {TAB_DATA
                .find((t) => t.id === tab)
                .images.slice(0, 4) // Obtener las primeras 4 imágenes
                .map((image, index) => (
                  <div key={index} className="flex p-10 justify-center">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={400}
                      className="neon-border"
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Acerca del juego</h2>
          <p className="text-base lg:text-lg">
            TRON REMAKE es una reinvención completa del clásico juego de arcade inspirado en el icónico mundo de Tron. Sumérgete en una experiencia retrofuturista en la que las batallas de motos de luz, los enfrentamientos de tanques, la estrategia en las torres I/O y la caza de gridbugs son la clave para la victoria en una cuadrícula digital mortal.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Características{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Minijuegos{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Tecnologías usadas{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
