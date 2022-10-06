import { useParams } from "react-router-dom";
// import Card from "./card/Card";

export default function CardDetails({ cards }) {
  const { id } = useParams();

  const card = cards.filter((c) => c.id === Number(id));
  console.log(card.question);

  return (
    <div>
      <p>Question id: {card[0]["id"]}</p>
      <h2>{card[0]["question"]}</h2>
      <p>{card[0]["answer"]}</p>
    </div>
  );
}
