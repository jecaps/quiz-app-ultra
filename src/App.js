import "./App.css";
import dataSet from "./DUMMY_DATA";

import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Footer from "./components/navigation/Navigation";

export default function App() {
  const cardElement = dataSet.map((data) => {
    return (
      <Card
        key={data.id}
        question={data.question}
        answer={data.answer}
        categories={data.categories}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <main className="card__container">{cardElement}</main>
      <Footer />
    </div>
  );
}
