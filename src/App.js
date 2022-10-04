import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";

import "./App.css";
import data from "./assets/DUMMY_DATA";

import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Header from "./components/header/Header";
import Footer from "./components/navigation/Navigation";

export default function App() {
  const [active, setActive] = useState("home");
  const [cards, setCards] = useState(loadFromLocal("saved cards") ?? data);

  useEffect(() => {
    saveToLocal("saved cards", cards);
  }, [cards]);

  function appendCard(question, answer, tag) {
    setCards([
      ...cards,
      {
        id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
        question: question,
        answer: answer,
        categories: tag.split(", "),
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

  const bookmarkedCards = cards.filter((card) => card.bookmarked);

  return (
    <div className="App">
      <Header />
      <main className="card__container">
        <Routes>
          <Route
            path="/"
            element={
              <Cards
                cards={cards}
                deleteCard={deleteCardHandler}
                toggleBookmark={bookmarkToggleHandler}
              />
            }
          />
          <Route
            path="bookmarks"
            element={
              <Cards
                cards={bookmarkedCards}
                deleteCard={deleteCardHandler}
                toggleBookmark={bookmarkToggleHandler}
              />
            }
          />
          <Route
            path="create"
            element={<Create createCard={appendCard} setActive={setActive} />}
          />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer setActive={setActive} active={active} />
    </div>
  );
}
