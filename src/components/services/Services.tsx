import React from 'react';
import styles from './Services.module.css';

interface ServiceItem {
  title: string;
  prices: {
    name: string;
    price: string;
  }[];
}

const servicesData: ServiceItem[] = [
  {
    title: "Esmaltado tradicional",
    prices: [
      { name: "Manos", price: "$20.000" },
      { name: "Pies", price: "$18.000" },
      { name: "Duos", price: "$35.000" }
    ]
  },
  {
    title: "Esmaltado semipermanente",
    prices: [
      { name: "Manos", price: "$35.000" },
      { name: "Pies", price: "$30.000" },
      { name: "Duos", price: "$60.000" }
    ]
  },
  {
    title: "Forrado - Endurecimiento de uña natural",
    prices: [
      { name: "", price: "$60.000" }
    ]
  },
  {
    title: "Alargamiento de tech gel o fibra de vidrio",
    prices: [
      { name: "", price: "$70.000" }
    ]
  },
  {
    title: "Retiro de esmaltados o dual semipermanente",
    prices: [
      { name: "", price: "$5.000" }
    ]
  },
  {
    title: "Mantenimiento",
    prices: [
      { name: "(Dependiendo del crecimiento)", price: "$40.000 - $50.000" }
    ]
  }
];

export const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestros Servicios</h2>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <div className={styles.priceList}>
                {service.prices.map((price, priceIndex) => (
                  <div key={priceIndex} className={styles.priceItem}>
                    {price.name && <span className={styles.serviceName}>{price.name}</span>}
                    <span className={styles.price}>{price.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
