import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Details from "../routes/Details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  );
};

export default App;
