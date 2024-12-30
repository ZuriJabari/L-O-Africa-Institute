import React, { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebaseConfig";

const EmailSubscriptionForm = ({ 
  title = "Subscribe to Our Updates", 
  subtitle = "Stay connected and receive the latest news and insights",
  bgColorFrom = "from-[#2bbecb]",
  bgColorTo = "to-[#f6911e]",
  placeholderText = "Enter your email to subscribe"
}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Determine the collection based on the title
      const collectionName = title.toLowerCase().includes("member") 
        ? "membership_subscribers" 
        : "newsletter_subscribers";

      // Save email to Firestore
      await addDoc(collection(db, collectionName), { 
        email,
        timestamp: new Date(),
        source: title 
      });
      
      setMessage("Thank you for subscribing!");
      setEmail(""); // Clear the input field
    } catch (error) {
      console.error("Error saving email: ", error);
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
            className="w-full px-4 py-3 rounded-full text-gray-800 focus:outline-none shadow-md"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 text-lg font-medium bg-[#515254] text-white rounded-full shadow-md hover:bg-[#2bbecb] transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
        
        {message && (
          <motion.p 
            className="mt-4 text-center text-lg text-yellow-200"
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