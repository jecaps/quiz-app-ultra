import { useState } from "react";

import "./App.css";
import cards from "./assets/DUMMY_DATA";

import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Header from "./components/header/Header";
import Footer from "./components/navigation/Navigation";

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="App">
      <Header />
      <main className="card__container">
        {active === "home" || active === "bookmark" ? (
          <Cards cards={cards} />
        ) : active === "create" ? (
          <Create />
        ) : (
          <Profile />
        )}
      </main>
      <Footer setActive={setActive} active={active} />
    </div>
  );
}
