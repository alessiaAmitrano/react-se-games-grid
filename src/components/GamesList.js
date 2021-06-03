import GameCard from "./GameCard";

function GamesList({ games }) {
  return (
    <div>
      {games.map((game) => {
        return <GameCard game={game} />;
      })}
    </div>
  );
}

export default GamesList;
