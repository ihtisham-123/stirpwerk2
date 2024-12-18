import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Success from "./components/Success";
import ProtectedPage from "./components/ProtectedPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
