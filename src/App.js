import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Inbox } from "./pages/Inbox";
import { Sent } from "./pages/Sent";
import { IndividualEmail } from "./pages/IndividualEmail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="inbox/individual-email" element={<IndividualEmail />} />
      </Routes>
    </div>
  );
}

export default App;
