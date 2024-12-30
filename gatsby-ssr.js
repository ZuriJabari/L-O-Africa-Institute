// gatsby-ssr.js
import React from 'react';
import { MDXProvider } from "@mdx-js/react";
import Navbar   from "./src/components/Navbar";

const components = {
  Navbar,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
