import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import EventsPage from "./pages/EventsPage";
import SingleEventPage from "./pages/SingleEventPage";
import ConferencePage from "./pages/ConferencePage";
import UserDashboard from "./pages/UserDashboard";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogArticlePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<SingleEventPage />} />
        <Route path="/conference" element={<ConferencePage />} />
        <Route path="/profile" element={<UserDashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
