import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <Link href="https://facebook.com" target="_blank" className={styles.socialIcon}>
          <FaFacebook />
        </Link>
        <Link href="https://instagram.com" target="_blank" className={styles.socialIcon}>
          <FaInstagram />
        </Link>
        <Link href="https://wa.me/YOURNUMBER" target="_blank" className={styles.socialIcon}>
          <FaWhatsapp />
        </Link>
      </div>
      <div className={styles.reserveButtonContainer}>
        <Link href="/reserva" className={styles.reserveButton}>
          Reservar Ahora
        </Link>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
