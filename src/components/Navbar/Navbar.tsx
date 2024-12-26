import "./Navbar.scss";
import { BsChevronDown } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Kanban</h1>
      <ul className="list">
        <li>
          <button type="button" className="dropdown-button">
            Workspaces <BsChevronDown />
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-button">
            Recent <BsChevronDown />
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-button">
            Starred <BsChevronDown />
          </button>
        </li>
        <li>
          <a href="/create">
            <button type="button" className="create">
              Create
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
