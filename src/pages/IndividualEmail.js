import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

export function IndividualEmail() {
  const { emails } = useContext(DataContext);
  const { emailId } = useParams();

  const selectedEmail = emails.find((email) => email.id === Number(emailId));
  const { id, sender, subject, message, read } = selectedEmail;
  return (
    <>
      <h2>{subject}</h2>
      <p>From: {sender}</p>
      <p>Message: {message}</p>
    </>
  );
}
