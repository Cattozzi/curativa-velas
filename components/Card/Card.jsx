import CandleIcon from '../CandleIcon/CandleIcon';
import styles from './Card.module.css';

export default function Card({ produto, favorito, onAlternarFavorito }) {
  return (
    <article className={styles.card}>
      <button
        type="button"
        className={`${styles.favoritoBotao} ${favorito ? styles.favoritoAtivo : ''}`}
        onClick={() => onAlternarFavorito(produto.id)}
        aria-pressed={favorito}
        aria-label={favorito ? `Remover ${produto.nome} dos favoritos` : `Favoritar ${produto.nome}`}
      >
        ♥
      </button>

      <div className={styles.iconeArea}>
        <CandleIcon corCera={produto.corCera} tamanho={72} />
      </div>

      <span className={styles.categoria}>{produto.categoriaLabel}</span>
      <h3 className={styles.nome}>{produto.nome}</h3>
      <p className={styles.aroma}>{produto.aroma}</p>
      <p className={styles.descricao}>{produto.descricao}</p>

      <div className={styles.rodape}>
        <span className={styles.preco}>R$ {produto.preco.toFixed(2).replace('.', ',')}</span>
        <span className={styles.duracao}>{produto.duracaoHoras}h de queima</span>
      </div>
    </article>
  );
}
