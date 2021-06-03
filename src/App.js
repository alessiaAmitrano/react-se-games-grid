import { useState, useEffect, useReducer } from "react";
import GamesList from "./components/GamesList";
import Layout from "./ui/Layout";
import Lightbox from "./ui/Lightbox";
import Loader from "./ui/Loader";

const HTTP_URL =
  "https://react-se-games-grid-default-rtdb.europe-west1.firebasedatabase.app/games.json";

function App() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGame, setSelectedGame] = useReducer((state, action) => {
    state = action.game;
    return state;
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(HTTP_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGames(data);
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedGame) {
      // When the modal is shown, we want a fixed body
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // When the modal is hidden we can scroll through the page again
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [selectedGame]);

  function handleToggleLightbox(game) {
    setSelectedGame({ game: game });
  }

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <GamesList games={games} handleToggleLightbox={handleToggleLightbox} />
      )}
      {selectedGame ? (
        <Lightbox handleCloseLightBox={handleToggleLightbox}>
          <img
            src={`assets/${selectedGame.artwork}`}
            alt={selectedGame.alt_text}
          />
          <div>
            <h2>{selectedGame.title}</h2>
            <p>{selectedGame.content}</p>
          </div>
        </Lightbox>
      ) : (
        ""
      )}
    </Layout>
  );
}

export default App;
