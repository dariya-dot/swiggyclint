import React from "react";

import "./App.css";
import Landingpage from "./swiggyclint/pages/Landingpage";
import { HashRouter as Route, Routes, Router } from "react-router-dom";
import Products from "./swiggyclint/compnents/Products";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/product/:firmId/:firmName" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
