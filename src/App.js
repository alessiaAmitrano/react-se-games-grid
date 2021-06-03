import { useState, useEffect } from "react";
import GamesList from "./components/GamesList";
import Layout from "./ui/Layout";
import Loader from "./ui/Loader";

const HTTP_URL =
  "https://react-se-games-grid-default-rtdb.europe-west1.firebasedatabase.app/games.json";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(HTTP_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGames(data);
        console.log("data", games);
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>{isLoading ? <Loader /> : <GamesList games={games} />}</Layout>
  );
}

export default App;
