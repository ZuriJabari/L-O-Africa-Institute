// gatsby-ssr.js
import React from 'react';
import { MDXProvider } from "@mdx-js/react";
import Navbar from "./src/components/Navbar";

const components = {
  Navbar,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="favicon"
      rel="icon"
      href="/profile.png"
      type="image/png"
    />,
    <link
      key="favicon-32"
      rel="icon"
      href="/profile.png"
      type="image/png"
      sizes="32x32"
    />,
    <link
      key="favicon-16"
      rel="icon"
      href="/profile.png"
      type="image/png"
      sizes="16x16"
    />,
  ]);
};
