import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";

export function Sent() {
  const { sentEmails } = useContext(DataContext);
  return (
    <>
      <h2>Sent Page</h2>
      <ul>
        {sentEmails.map(({ id, to, subject, message }) => (
          <li>
            <Link to={`/sent/individual-email/${id}`}>{subject}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
