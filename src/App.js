import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="app__main">
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default App;
