// gatsby-browser.js
import React from 'react';
import './src/styles/global.css';
import { MDXProvider } from "@mdx-js/react";
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import HeroSection from './src/components/Herosection';
import SubscriptionForm from './src/components/SubscriptionForm';

// Define the components you want available in MDX files
const components = {
  Navbar,
  Footer,
  SubscriptionForm,
  HeroSection,
};

// Wrap the root element with MDXProvider for custom MDX components
export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  );
};

// Handle route updates
export const onRouteUpdate = ({ location }) => {
  // Scroll to top on route change
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
};

// Handle client entry
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
  }
};

