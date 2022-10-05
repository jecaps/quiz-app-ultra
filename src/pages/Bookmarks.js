import Cards from "./Cards";

export default function Bookmarks({ cards, deleteCard, toggleBookmark }) {
  return (
    <Cards
      cards={cards}
      deleteCard={deleteCard}
      toggleBookmark={toggleBookmark}
    />
  );
}
