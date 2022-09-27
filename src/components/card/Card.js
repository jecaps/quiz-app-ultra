export default function Card({ question, answer, tags }) {
  return (
    <article className="card">
      <svg
        data-js="bookmark"
        className="card__bookmark"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 30 30"
      >
        <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"></path>
      </svg>

      <p className="card__question">{question}</p>
      <a className="card__btn" href="./">
        Show Answer
      </a>
      <p className="card__answer">{answer}</p>

      <ul className="card__category">
        <li className="card__item">#{tags}</li>
      </ul>
    </article>
  );
}