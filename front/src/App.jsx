import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Plan from "./pages/Plan";
import Schedule from "./pages/Schedule";
import TopCourse from "./pages/TopCourse";
import Trainer from "./pages/Trainer";
import WeOffer from "./pages/WeOffer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weoffer" element={<WeOffer />} />
        <Route path="/topcourse" element={<TopCourse />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
