import { createContext, useEffect } from "react";
import { fakeFetch } from "../data/fakeFetch";
import { useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [emails, setEmails] = useState([]);
  const [sentEmails, setSentEmails] = useState([]);

  const clickHandler = (id) => {
    const selectedMail = emails.find((email) => email.id === id);
    selectedMail.read = !selectedMail.read;
    setEmails((emails) => [...emails]);
  };

  const getEmails = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/allemails");
      if (response.status === 200) {
        setEmails(response.data.emails);
        setSentEmails(response.data.sentEmails);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getEmails();
  }, []);

  return (
    <DataContext.Provider value={{ emails, clickHandler, sentEmails }}>
      {children}
    </DataContext.Provider>
  );
}
