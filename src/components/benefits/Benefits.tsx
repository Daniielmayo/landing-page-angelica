import React from "react";
import { PersonalizationIcon, GuaranteeIcon, ExperienceIcon } from "../icons";
import styles from "./Benefits.module.css";
import { CardDemo } from "../uiComponent/Card/Card";

export const Benefits = () => {
  const benefitsData = [
    {
      icon: <PersonalizationIcon />,
      title: "Personalización",
      description:
        "Diseños únicos y a medida que reflejan tu estilo personal y creatividad.",
    },
    {
      icon: <GuaranteeIcon />,
      title: "Garantía de Calidad",
      description:
        "Resultados duraderos y de alta calidad que superan tus expectativas.",
    },
    {
      icon: <ExperienceIcon />,
      title: "Experiencia Confiable",
      description:
        "Profesionales altamente capacitados con años de experiencia en nail art.",
    },
  ];

  return (
    <section className={styles["benefits-section"]}>
      <CardDemo benefitsData={benefitsData} />
    </section>
  );
};
