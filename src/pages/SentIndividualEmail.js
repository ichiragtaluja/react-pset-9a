import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

export function SentIndividualEmail() {
  const { sentEmails } = useContext(DataContext);
  const { sentEmailId } = useParams();

  const selectedEmail = sentEmails.find(
    (email) => email.id === Number(sentEmailId)
  );
  const { id, to, subject, message } = selectedEmail;
  return (
    <>
      <h2>{subject}</h2>
      <p>To: {to}</p>
      <p>Message: {message}</p>
    </>
  );
}
