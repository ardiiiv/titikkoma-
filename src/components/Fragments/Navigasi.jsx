import { Link } from "react-router-dom";

const Navigasi = ({
  direction = "row",
  text = "lg:text-lg md:text-base text-sm",
  gap = "gap-6",
}) => {
  return (
    <ul
      className={`flex ${
        direction === "row" ? "flex-row" : "flex-row"
      } ${gap} ${text}`}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/MyClass">MyClass</Link>
      </li>
      <li>
        <Link to="/Quiz">Quiz</Link>
      </li>
      <li>
        <Link to="/Event">Event</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Navigasi;
