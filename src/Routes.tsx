import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import AboutUsPage from "./pages/AboutUsPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/about-us" element={<AboutUsPage />} />
      {/* <Route path="/services" element={<ServicesPage />} /> */}
      {/* <Route path="/contact" element={<ContactPage />} /> */}
      {/* <Route path="/blog" element={<BlogPage />} /> */}
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
};

export default AppRoutes;
