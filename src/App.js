import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Footer from "./components/navigation/Navigation";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="app__main">
        <Card
          question={"What is the capital of Germany?"}
          answer={"Berlin"}
          tags={"Germany"}
        />
        <Card
          question={"When did World War II end?"}
          answer={"1945"}
          tags={"history"}
        />
        <Card
          question={"Which known city was destroyed by Mt. Vesuvius?"}
          answer={"Pompeii"}
          tags={"history"}
          bookmarked
        />
        <Card
          question={
            "How many years was Philippines under the colonial rule of Spain?"
          }
          answer={"333 years"}
          tags={"Philippines"}
        />
      </main>
      <Footer />
    </div>
  );
}
