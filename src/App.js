import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";

import "./App.css";
import data from "./assets/DUMMY_DATA";

import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";

import CardDetails from "./components/CardDetails";

export default function App() {
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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route>
            <Route
              index
              element={
                <Home
                  cards={cards}
                  deleteCard={deleteCardHandler}
                  toggleBookmark={bookmarkToggleHandler}
                />
              }
            />
            <Route
              path=":id/"
              element={
                <CardDetails
                  cards={cards}
                  deleteCard={deleteCardHandler}
                  toggleBookmark={bookmarkToggleHandler}
                />
              }
            />
          </Route>

          <Route
            path="bookmarks"
            element={
              <Bookmarks
                cards={cards.filter((card) => card.bookmarked)}
                deleteCard={deleteCardHandler}
                toggleBookmark={bookmarkToggleHandler}
              />
            }
          />
          <Route path="create" element={<Create createCard={appendCard} />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}
