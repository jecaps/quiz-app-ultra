import { useState } from "react";
import Tag from "../tag/Tag";

export default function Card({
  id,
  question,
  answer,
  categories,
  bookmarked,
  deleteCard,
  toggleBookmark,
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  const categoriesItemElement = categories.map((category) => {
    return <Tag key={category} tag={category} />;
  });

  return (
    <article className="card">
      <svg
        onClick={() => toggleBookmark(id)}
        className="card__bookmark"
        style={{ fill: `${bookmarked ? "#df2935" : "#828a95"}` }}
        data-js="bookmark"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 30 30"
      >
        <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"></path>
      </svg>

      <button onClick={() => deleteCard(id)} className="card__delete-btn">
        ×
      </button>
      <p className="card__question">{question}</p>
      <button className="card__btn" onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
      <p className={`card__answer ${showAnswer ? "card__answer--shown" : ""}`}>
        {answer}
      </p>

      <ul className="card__category">{categoriesItemElement}</ul>
    </article>
  );
}
