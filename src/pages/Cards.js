import Card from "../components/card/Card";

export default function Cards({ cards, setCards }) {
  const cardElement = cards.map((card) => {
    return (
      <Card
        key={card.id}
        question={card.question}
        answer={card.answer}
        categories={card.categories}
        bookmarked={card.bookmarked}
      />
    );
  });

  return <>{cardElement}</>;
}
