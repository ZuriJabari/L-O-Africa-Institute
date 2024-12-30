// pages/support-us.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SupportUs from "../components/SupportUs";
import { motion } from "framer-motion";

const SupportUsPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <SupportUs />
      </main>
      <Footer />
    </>
  );
};

export default SupportUsPage;

// Move previous code to components/SupportUs.js