import Card from "../components/card/Card";

export default function Cards({ cards }) {
  const cardElement = cards.map((data) => {
    return (
      <Card
        key={data.id}
        question={data.question}
        answer={data.answer}
        categories={data.categories}
      />
    );
  });

  return <>{cardElement}</>;
}
