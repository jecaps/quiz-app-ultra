import Card from "../components/card/Card";

export default function Cards({ cards, deleteCard, toggleBookmark }) {
  const cardElement = cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        question={card.question}
        answer={card.answer}
        categories={card.categories}
        bookmarked={card.bookmarked}
        deleteCard={deleteCard}
        toggleBookmark={toggleBookmark}
      />
    );
  });

  return <>{cardElement}</>;
}
