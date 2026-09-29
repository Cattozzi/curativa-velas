import Link from 'next/link';
import styles from './Header.module.css';

export default function Header({ favoritosCount = 0 }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.marca}>
           <img src="/icon.png" alt="" className={styles.marcaIcone} />
              Curativa Velas
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Início
          </Link>
          <Link href="/catalogo" className={styles.link}>
            Catálogo
          </Link>
          <a
             href="https://www.instagram.com/curativa.velas/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagram}
            >
    Instagram
  </a>
        </nav>

        <div className={styles.favoritos} aria-label={`${favoritosCount} velas favoritas`}>
          <span className={styles.coracao} aria-hidden="true">
            ♥
          </span>
          <span>{favoritosCount}</span>
        </div>
      </div>
    </header>
  );
}
