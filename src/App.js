import { useState } from "react";

import "./App.css";
import data from "./assets/DUMMY_DATA";

import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Header from "./components/header/Header";
import Footer from "./components/navigation/Navigation";

export default function App() {
  const [active, setActive] = useState("home");
  const [cards, setCards] = useState(data);

  function appendCard(question, answer, tag) {
    setCards([
      ...cards,
      {
        id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
        question: question,
        answer: answer,
        categories: [tag],
        bookmarked: false,
      },
    ]);
  }

  function deleteCardHandler(cardId) {
    setCards(cards.filter((card) => card.id !== cardId));
  }

  function bookmarkToggleHandler(cardId) {
    setCards(
      cards.map((card) =>
        card.id === cardId ? { ...card, bookmarked: !card.bookmarked } : card
      )
    );
  }

  return (
    <div className="App">
      <Header />
      <main className="card__container">
        {active === "home" || active === "bookmark" ? (
          <Cards
            cards={
              active === "bookmark"
                ? cards.filter((card) => card.bookmarked)
                : cards
            }
            deleteCard={deleteCardHandler}
            toggleBookmark={bookmarkToggleHandler}
          />
        ) : active === "create" ? (
          <Create createCard={appendCard} setActive={setActive} />
        ) : (
          <Profile />
        )}
      </main>
      <Footer setActive={setActive} active={active} />
    </div>
  );
}
