import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/buttons">Buttons</Link>
          </li>
          <li>
            <Link to="/navbars">Navbars</Link>
          </li>
          <li>
            <Link to="/backgrounds">Backgrounds</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
          <li>
            <Link to="/forms">Forms</Link>
          </li>
          <li>
            <Link to="/footer">Footer</Link>
          </li>
          <li>
            <Link to="/lang-toggle">Lang Toggle</Link>
          </li>
          <li>
            <Link to="/nav-link">Nav Link</Link>
          </li>
          <li>
            <Link to="/side-menu">Side Menu</Link>
          </li>
          <li>
            <Link to="/spinner">Spinner</Link>
          </li>
          <li>
            <Link to="/switch">Switch</Link>
          </li>
          <li>
            <Link to="/theme-toggle">Theme Toggle</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
