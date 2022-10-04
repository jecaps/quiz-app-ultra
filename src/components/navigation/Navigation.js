import { NavLink } from "react-router-dom";

export default function Footer({ active, setActive }) {
  const buttonhandler = (classname) => {
    setActive(classname);
  };

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <NavLink
          to="/"
          className={`footer__link ${
            active === "home" ? "footer__link--active" : ""
          }`}
          onClick={() => buttonhandler("home")}
        >
          <svg
            className="footer__icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path>
          </svg>
        </NavLink>

        <NavLink
          to="/bookmarks"
          className={`footer__link home ${
            active === "bookmark" ? "footer__link--active" : ""
          }`}
          onClick={() => buttonhandler("bookmark")}
        >
          <svg
            className="footer__icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 30 30"
          >
            <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"></path>
          </svg>
        </NavLink>

        <NavLink
          to="/create"
          className={`footer__link ${
            active === "create" ? "footer__link--active" : ""
          }`}
          onClick={() => buttonhandler("create")}
        >
          <svg
            className="footer__icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
          </svg>
        </NavLink>

        <NavLink
          to="/profile"
          className={`footer__link ${
            active === "profile" ? "footer__link--active" : ""
          }`}
          onClick={() => buttonhandler("profile")}
        >
          <svg
            className="footer__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </NavLink>
      </nav>
    </footer>
  );
}
