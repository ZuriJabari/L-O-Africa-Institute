import React, { useState } from "react";
import { motion } from "framer-motion";
import { submitFormToFirebase, FORM_TYPES } from "../utils/forms";

const EmailSubscriptionForm = ({ 
  title = "Subscribe to Our Updates", 
  subtitle = "Stay connected and receive the latest news and insights",
  bgColorFrom = "from-[#2bbecb]",
  bgColorTo = "to-[#f6911e]",
  placeholderText = "Enter your email to subscribe"
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started');
    
    if (!email) {
      console.log('Email validation failed: empty email');
      setStatus("error");
      setMessage("Please enter your email address");
      return;
    }

    console.log('Attempting to submit email:', email);
    setStatus("loading");
    try {
      const formData = {
        email,
        subscriptionType: title.toLowerCase().includes("member") ? "membership" : "newsletter",
        source: title
      };
      console.log('Form data prepared:', formData);

      const result = await submitFormToFirebase(FORM_TYPES.SUBSCRIPTION, formData);
      console.log('Firebase submission result:', result);
      
      if (result.success) {
        console.log('Submission successful');
        setStatus("success");
        setMessage(result.message);
        setEmail(""); // Clear the input field
      } else {
        console.log('Submission failed:', result.message);
        setStatus("error");
        setMessage(result.message);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setStatus("error");
      setMessage("There was an issue. Please try again.");
    }
  };

  return (
    <section className={`relative py-12 bg-gradient-to-r ${bgColorFrom} ${bgColorTo} text-white`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholderText}
            required
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-full text-gray-800 focus:outline-none shadow-md disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full sm:w-auto px-8 py-3 text-lg font-medium rounded-full shadow-md transition-all duration-300 ${
              status === "loading"
                ? "bg-gray-400 cursor-not-allowed"
                : status === "success"
                ? "bg-green-500 hover:bg-green-600"
                : status === "error"
                ? "bg-red-500 hover:bg-red-600"
                : "bg-[#515254] hover:bg-[#2bbecb]"
            }`}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        
        {message && (
          <motion.p 
            className={`mt-4 text-center text-lg ${
              status === "success" ? "text-yellow-200" : "text-red-200"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {message}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default EmailSubscriptionForm;