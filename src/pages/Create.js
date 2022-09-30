import Form from "../components/form/Form";

export default function Create({ createCard, setActive }) {
  function submitHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setActive("home");
    createCard(data.question, data.answer, data.tags);
    event.target.reset();
    // event.target.elements.question.focus();
  }

  return (
    <>
      <Form submitHandler={submitHandler} />
    </>
  );
}
