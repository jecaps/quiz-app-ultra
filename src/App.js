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

  // console.log(cards);
  // console.log(data);

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

  return (
    <div className="App">
      <Header />
      <main className="card__container">
        {active === "home" ? (
          <Cards
            cards={cards}
            setCards={setCards}
            deleteCard={deleteCardHandler}
          />
        ) : active === "bookmark" ? (
          <Cards
            cards={cards.filter((card) => card.bookmarked === true)}
            setCards={setCards}
            deleteCard={deleteCardHandler}
          />
        ) : active === "create" ? (
          <Create createCard={appendCard} />
        ) : (
          <Profile />
        )}
      </main>
      <Footer setActive={setActive} active={active} />
    </div>
  );
}
