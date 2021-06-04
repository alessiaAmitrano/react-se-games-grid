import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";
import GameCard from "./components/GameCard";
import Lightbox from "./ui/Lightbox";

const MOCK_GAME = {
  id: 0,
  title: "Final Fantasy X",
  artwork: "ffcc.jpeg",
  content: "Description",
  alt_text: "Final Fantasy X",
};

test("renders without crashing", () => {
  const div = document.createElement("div");
  window.scrollTo = jest.fn();
  ReactDOM.render(<App />, div);
});

test("renders logo in header", () => {
  render(<App />);
  const headerLogo = screen.getByText(/GAMEDB/i);
  expect(headerLogo).toBeInTheDocument();
});

test("renders loader", () => {
  const rendered = render(<App />);
  const loader = rendered.getByAltText("spinner");
  expect(loader).toBeInTheDocument();
});

test("renders game card", () => {
  render(<GameCard game={MOCK_GAME} />);
  const component = screen.getByText(MOCK_GAME.title);
  expect(component).toBeInTheDocument();
});

test("renders lightbox", () => {
  render(
    <Lightbox>
      <img
        aria-hidden="true"
        src={`assets/${MOCK_GAME.artwork}`}
        alt={MOCK_GAME.alt_text}
      />
      <div>
        <h2>{MOCK_GAME.title}</h2>
        <p>{MOCK_GAME.content}</p>
      </div>
    </Lightbox>
  );
  const closeBtn = screen.getByLabelText("close");
  expect(closeBtn).toBeInTheDocument();
});
