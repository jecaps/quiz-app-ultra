export default function Create({ createCard, setActive }) {
  function submitHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setActive("home");
    createCard(data.question, data.answer, data.tags);
    event.target.reset();
    event.target.elements.question.focus();
  }

  return (
    <>
      <form
        action="./"
        data-js="form"
        className="form"
        onSubmit={submitHandler}
      >
        <fieldset className="form__fieldset">
          <legend className="form__legend">Create New Question</legend>

          <div className="form__question">
            <label className="form__label" htmlFor="question">
              Your Question:{" "}
            </label>
            <textarea
              className="form__input"
              name="question"
              id="question"
              cols="30"
              rows="6"
              maxLength="150"
              placeholder="Write a question"
            ></textarea>
            <p
              className="form__char-indicator"
              id="question-char-indicator"
            ></p>
          </div>

          <div className="form__answer">
            <label className="form__label" htmlFor="answer">
              Your Answer:{" "}
            </label>
            <textarea
              className="form__input"
              name="answer"
              id="answer"
              cols="30"
              rows="6"
              maxLength="150"
              placeholder="Write the answer"
            ></textarea>
            <p className="form__char-indicator" id="answer-char-indicator"></p>
          </div>

          <div className="form__tags">
            <label className="form__label" htmlFor="tag">
              Tags:
            </label>
            <input
              className="form__input"
              type="text"
              id="tag"
              name="tags"
              placeholder="Example AnotherExample"
            />
          </div>
          <button className="form__button" type="submit">
            Create Question
          </button>
        </fieldset>
      </form>
    </>
  );
}
