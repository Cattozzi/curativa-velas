import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from '../styles/Home.module.css';

const CATEGORIAS = [
  {
    valor: 'cera-de-abelha',
    titulo: 'Cera de abelha pura',
    descricao: 'Velas moldadas em cera 100% natural, com queima limpa e aroma suave de mel.',
  },
  {
    valor: 'aromaticas',
    titulo: 'Aromáticas',
    descricao: 'Blends com óleos essenciais para cada momento do dia.',
  },
  {
    valor: 'kits',
    titulo: 'Kits & presentes',
    descricao: 'Conjuntos prontos para presentear ou para começar sua coleção.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Curativa — Velas Naturais</title>
        <meta name="description" content="Velas artesanais de cera de abelha e aromáticas." />
      </Head>

      <Header favoritosCount={0} />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroTexto}>
            <p className={styles.heroSubtitulo}>Velas naturais, feitas à mão</p>
            <h1 className={styles.heroTitulo}>A luz que vem da colmeia</h1>
            <h2 className={styles.heroSubtitulo}>*****ATENÇÃO: Este site é apenas um trabalho acadêmico, os valores aqui não refletem o valor real dos produtos****</h2>
            <p className={styles.heroDescricao}>
              Trabalhamos direto com apicultores parceiros para transformar cera de abelha pura
              e óleos essenciais em velas de queima limpa e aroma duradouro.
            </p>
            <Link href="/catalogo" className={styles.heroBotao}>
              Ver catálogo completo
            </Link>
          </div>

          <div className={styles.heroFavo} aria-hidden="true">
            <div className={styles.hex} />
            <div className={styles.hex} />
            <div className={styles.hex} />
            <div className={styles.hex} />
            <div className={styles.hex} />
          </div>
        </section>

        <section className={styles.categorias}>
          <h2 className={styles.categoriasTitulo}>Escolha por categoria</h2>
          <div className={styles.categoriasGrade}>
            {CATEGORIAS.map((categoria) => (
              <Link
                key={categoria.valor}
                href={`/catalogo?categoria=${categoria.valor}`}
                className={styles.categoriaCard}
              >
                <h3>{categoria.titulo}</h3>
                <p>{categoria.descricao}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
