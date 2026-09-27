import Link from 'next/link';
import styles from './BackButton.module.css';

export default function BackButton({ href = '/', texto = 'Voltar' }) {
  return (
    <Link href={href} className={styles.botao}>
      <span aria-hidden="true">‹</span> {texto}
    </Link>
  );
}
