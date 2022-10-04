import Form from "../components/form/Form";
import { useNavigate } from "react-router-dom";

export default function Create({ createCard, setActive }) {
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    navigate("/");
    setActive("home");
    createCard(data.question, data.answer, data.tags);
    event.target.reset();
  }

  return (
    <>
      <Form submitHandler={submitHandler} />
    </>
  );
}
