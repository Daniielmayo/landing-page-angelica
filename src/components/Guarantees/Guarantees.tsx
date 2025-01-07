import React from 'react';
import styles from './Guarantees.module.css';
import { FaShieldAlt, FaClock, FaHandshake } from 'react-icons/fa';

const guaranteesData = [
  {
    icon: <FaShieldAlt />,
    title: 'Garantía de Calidad',
    description: 'Ofrecemos productos y servicios de la más alta calidad, garantizando tu satisfacción total.'
  },
  {
    icon: <FaClock />,
    title: 'Servicio Rápido',
    description: 'Nos comprometemos a brindarte un servicio eficiente y oportuno, respetando siempre tu tiempo.'
  },
  {
    icon: <FaHandshake />,
    title: 'Compromiso',
    description: 'Trabajamos con dedicación y profesionalismo para cumplir y superar tus expectativas.'
  }
];

const Guarantees: React.FC = () => {
  return (
    <section className={styles.guaranteesSection}>
      <div className={styles.guaranteesContainer}>
        <h2 className={styles.guaranteeTitle}>Nuestras Garantías</h2>
        {guaranteesData.map((guarantee, index) => (
          <div key={index} className={styles.guaranteeCard}>
            <div className={styles.guaranteeIcon}>{guarantee.icon}</div>
            <h3 className={styles.guaranteeCardTitle}>{guarantee.title}</h3>
            <p className={styles.guaranteeCardDescription}>{guarantee.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guarantees;
