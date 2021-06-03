import styles from "./GameCard.module.css";

function GameCard({ game }) {
  const gridArea = {
    gridArea: `card${game.id}`,
  };

  return (
    <div className={styles.card} style={gridArea}>
      <img src={`assets/${game.artwork}`} alt={game.title} />
      <h1>{game.title}</h1>
      <p>{game.content.substring(0, 100) + "..."}</p>
    </div>
  );
}

export default GameCard;
