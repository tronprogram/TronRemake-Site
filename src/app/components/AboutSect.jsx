"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Experimenta la emoción de las batallas de motos de luz, los enfrentamientos de tanques y las estrategias en las torres I/O en un solo juego.</li>
        <li>Disfruta de gráficos y efectos visuales que capturan la estética icónica de la película Tron. Sumérgete en un mundo digital lleno de neón y luz.</li>
        <li>Compite contra tus amigos en emocionantes partidas multijugador locales. Lucha por la supremacía en la cuadrícula digital con una variedad de modos de juego.</li>
        <li>Utiliza estrategia y habilidad para superar a tus oponentes. Crea barreras de luz, dispara proyectiles de tanque, controla torres I/O y caza gridbugs para dominar la cuadrícula.</li>
        <li>¡Aprende mientras juegas con el sistema de preguntas personalizado!</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
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
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
        TRON REMAKE es una reinvención completa del clásico juego de arcade inspirado en el icónico mundo de Tron. Sumérgete en una experiencia retrofuturista en la que las batallas de motos de luz, los enfrentamientos de tanques, la estrategia en las torres I/O y la caza de gridbugs son la clave para la victoria en una cuadrícula digital mortal.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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