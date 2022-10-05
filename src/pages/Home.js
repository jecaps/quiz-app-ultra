import Cards from "./Cards";

export default function Home({ cards, deleteCard, toggleBookmark }) {
  return (
    <Cards
      cards={cards}
      deleteCard={deleteCard}
      toggleBookmark={toggleBookmark}
    />
  );
}
