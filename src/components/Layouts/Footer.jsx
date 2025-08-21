import Navigasi from "../Fragments/Navigasi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-gray-700 p-14">
      <div className="w-11/12 mx-auto flex justify-between text-base text-white">
        <div>
          <h1 className="font-bold font-FiraCode text-lg text-orange-500">
            TitikKoma;
          </h1>
        </div>
        <div>
          <ul className="flex gap-4">
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
        </div>
        <div>
          <p>© 2025 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
