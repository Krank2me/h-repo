import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./components/welcome/Welcome";
import { FullName } from "./components/fullName/FullName";
import { Address } from "./components/address/Address";
import { Plan } from "./components/plan/Plan";
import { Subscribe } from "./components/subscribe/Subscribe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/fullName" element={<FullName />} />
        <Route path="/address" element={<Address />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
