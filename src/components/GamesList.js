import GameCard from "./GameCard";
import styles from "./GamesList.module.css";

function GamesList({ games }) {
  return (
    <div className={styles.gamesGrid}>
      {games.map((game) => {
        return <GameCard key={game.id} game={game} />;
      })}
    </div>
  );
}

export default GamesList;
