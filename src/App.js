import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Inbox } from "./pages/Inbox";
import { Sent } from "./pages/Sent";
import { IndividualEmail } from "./pages/IndividualEmail";
import { SentIndividualEmail } from "./pages/SentIndividualEmail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={""} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/sent" element={<Sent />} />
        <Route
          path="/inbox/individual-email/:emailId"
          element={<IndividualEmail />}
        />
        <Route
          path="/sent/individual-email/:sentEmailId"
          element={<SentIndividualEmail />}
        />
      </Routes>
    </div>
  );
}

export default App;
