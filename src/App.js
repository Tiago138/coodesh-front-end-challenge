import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HeaderBar from "./components/HeaderBar";

import Home from "./Pages/Home";
import User from "./Pages/User";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <HeaderBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userid" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
