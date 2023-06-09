import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <nav>
        <h1>My Mail Box</h1>
        <ul>
          <li>
            <NavLink to="/inbox">Inbox</NavLink>
          </li>
          <li>
            <NavLink to="/sent">Sent</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
