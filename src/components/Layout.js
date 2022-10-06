import { Outlet, useNavigate } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./navigation/Navigation";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="card__container">
        <Outlet />
        <button onClick={() => navigate("/")}>Back to Home</button>
      </main>
      <Footer />
    </>
  );
}
