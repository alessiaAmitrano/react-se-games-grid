import styles from "./GameCard.module.css";

function GameCard({ game, handleToggleLightbox }) {
  const isMobile = window.innerWidth < 600;
  const gridArea = {
    gridArea: `card${game.id}`,
  };

  function handleGameClick() {
    handleToggleLightbox(game);
  }

  return (
    <div className={styles.card} style={gridArea} onClick={handleGameClick}>
      <img
        src={`assets/${game.artwork}`}
        alt={game.alt_text}
        aria-hidden="true"
      />
      <div className={styles.cardText}>
        <h2>{game.title}</h2>
        <p>{game.content.substring(0, isMobile ? 50 : 100) + "..."}</p>
      </div>
    </div>
  );
}

export default GameCard;
