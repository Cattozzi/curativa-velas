import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BackButton from '../components/BackButton/BackButton';
import Card from '../components/Card/Card';
import produtos from '../data/produtos.json';
import styles from '../styles/Catalogo.module.css';

const CATEGORIAS = [
  { valor: 'todas', label: 'Todas' },
  { valor: 'cera-de-abelha', label: 'Cera de abelha pura' },
  { valor: 'aromaticas', label: 'Aromáticas' },
  { valor: 'kits', label: 'Kits & presentes' },
];

export default function Catalogo() {
  const router = useRouter();
  const categoriaInicial = typeof router.query.categoria === 'string' ? router.query.categoria : 'todas';

  const [categoriaAtiva, setCategoriaAtiva] = useState(categoriaInicial);
  const [favoritos, setFavoritos] = useState([]);

  function alternarFavorito(id) {
    setFavoritos((atual) => (atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id]));
  }

  function selecionarCategoria(valor) {
    setCategoriaAtiva(valor);
    router.push(valor === 'todas' ? '/catalogo' : `/catalogo?categoria=${valor}`, undefined, {
      shallow: true,
    });
  }

  const produtosFiltrados = useMemo(() => {
    if (categoriaAtiva === 'todas') return produtos;
    return produtos.filter((produto) => produto.categoria === categoriaAtiva);
  }, [categoriaAtiva]);

  return (
    <>
      <Head>
        <title>Catálogo — Favo</title>
      </Head>

      <Header favoritosCount={favoritos.length} />

      <main className={styles.main}>
        <BackButton texto="Voltar ao início" />
        <h1 className={styles.titulo}>Nosso catálogo</h1>

        <div className={styles.filtros}>
          {CATEGORIAS.map((categoria) => (
            <button
              key={categoria.valor}
              type="button"
              className={`${styles.filtro} ${categoriaAtiva === categoria.valor ? styles.filtroAtivo : ''}`}
              onClick={() => selecionarCategoria(categoria.valor)}
            >
              {categoria.label}
            </button>
          ))}
        </div>

        <div className={styles.grade}>
          {produtosFiltrados.map((produto) => (
            <Card
              key={produto.id}
              produto={produto}
              favorito={favoritos.includes(produto.id)}
              onAlternarFavorito={alternarFavorito}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
