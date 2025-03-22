import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/page";
import CreateAccount from "./CreateAccount/page";
import LoginAccount from "./LoginAccount/page";
import Dashboard from "./Dashboard/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/LoginAccount" element={<LoginAccount />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
