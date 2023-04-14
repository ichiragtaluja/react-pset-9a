import { useContext } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";

export function Inbox() {
  const { emails, clickHandler } = useContext(DataContext);

  const unreadMails = emails.reduce(
    (acc, email) => (!email.read ? acc + 1 : acc),
    0
  );

  const readMails = emails.reduce(
    (acc, email) => (email.read ? acc + 1 : acc),
    0
  );
  return (
    <>
      <h2>Inbox Page</h2>
      <p>Unread Emails: {unreadMails}</p>
      <p>Read Emails: {readMails}</p>
      <ul>
        {" "}
        {emails?.map((email) => {
          const { id, sender, subject, message, read } = email;
          return (
            <div key={id}>
              <li>
                <Link to={`/inbox/individual-email/${id}`}>{subject}</Link>{" "}
                {!read && (
                  <button onClick={() => clickHandler(id)}>Mark as read</button>
                )}
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}
