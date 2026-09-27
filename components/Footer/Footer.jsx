import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Curativa Velas — velas feitas à mão com cera de abelha e óleos essenciais.</p>
        <p className={styles.aviso}>Projeto acadêmico desenvolvido para fins de estudo.</p>
      </div>
    </footer>
  );
}
