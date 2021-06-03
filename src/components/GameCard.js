import styles from "./GameCard.module.css";

function GameCard({ game }) {
  const gridArea = {
    gridArea: `card${game.id}`,
  };

  return (
    <div className={styles.card} style={gridArea}>
      <img src={`assets/${game.artwork}`} alt={game.title} />
      <div className={styles.cardText}>
        <h2>{game.title}</h2>
        <p>{game.content.substring(0, 100) + "..."}</p>
      </div>
    </div>
  );
}

export default GameCard;
