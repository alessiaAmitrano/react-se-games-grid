import GameCard from "./GameCard";
import styles from "./GamesList.module.css";

function GamesList({ games, handleToggleLightbox }) {
  return (
    <div className={styles.gamesGrid}>
      {games.map((game) => {
        return (
          <GameCard
            key={game.id}
            game={game}
            handleToggleLightbox={handleToggleLightbox}
          />
        );
      })}
    </div>
  );
}

export default GamesList;
