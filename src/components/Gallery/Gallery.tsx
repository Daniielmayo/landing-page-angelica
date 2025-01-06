import React from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

const galleryImages = [
  {
    id: 1,
    src: '/banner.jpg',
    alt: 'Diseño de uñas elegante',
    width: 400,
    height: 600
  },
  {
    id: 2,
    src: '/banner.jpg',
    alt: 'Uñas decoradas con brillos',
    width: 400,
    height: 500
  },
  {
    id: 3,
    src: '/banner.jpg',
    alt: 'Diseño floral en uñas',
    width: 400,
    height: 700
  },
  {
    id: 4,
    src: '/banner.jpg',
    alt: 'Uñas con diseño geométrico',
    width: 400,
    height: 550
  },
  {
    id: 5,
    src: '/banner.jpg',
    alt: 'Diseño minimalista',
    width: 400,
    height: 600
  },
  {
    id: 6,
    src: '/banner.jpg',
    alt: 'Uñas con diseño artístico',
    width: 400,
    height: 500
  },
  {
    id: 7,
    src: '/banner.jpg',
    alt: 'Diseño elegante con pedrería',
    width: 400,
    height: 650
  },
  {
    id: 8,
    src: '/banner.jpg',
    alt: 'Uñas con diseño abstracto',
    width: 400,
    height: 550
  }
];

export const Gallery = () => {
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.galleryTitle}>Nuestros Trabajos</h2>
      <div className={styles.galleryGrid}>
        {galleryImages.map((image) => (
          <div key={image.id} className={styles.galleryItem}>
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <p className={styles.imageDescription}>{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
