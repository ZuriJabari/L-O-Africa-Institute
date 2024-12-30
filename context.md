📁 Project Structure
src/
├── components/
│   ├── layout/
│   │   ├── YelpLayout.js          # Yelp-specific layout
│   │   └── HudumaLayout.js        # Huduma-specific layout
│   │
│   ├── yelp/
│   │   ├── About.js              # Yelp about page component
│   │   └── Fellows.js            # Yelp fellows page component
│   │
│   └── huduma/
│       ├── About.js              # Huduma about page component
│       └── Champions.js          # Huduma champions page component
│
├── pages/
│   ├── yelp/
│   │   ├── about.js             # /yelp/about route
│   │   └── fellows.js           # /yelp/fellows route
│   │
│   └── huduma/
│       ├── about.js             # /huduma/about route
│       └── champions.js         # /huduma/champions route
│
└── styles/
    └── themes/
        ├── yelp.js              # Yelp theme config
        └── huduma.js            # Huduma theme config

// gatsby-node.js
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/^\/yelp/)) {
    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        layout: 'yelp-layout'
      }
    });
  }

  if (page.path.match(/^\/huduma/)) {
    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        layout: 'huduma-layout'
      }
    });
  }
};

// src/pages/yelp/about.js
import React from 'react';
import YelpAbout from '../../components/yelp/About';

const YelpAboutPage = () => {
  return <YelpAbout />;
};

export default YelpAboutPage;

// src/pages/huduma/champions.js
import React from 'react';
import HudumaChampions from '../../components/huduma/Champions';

const HudumaChampionsPage = () => {
  return <HudumaChampions />;
};

export default HudumaChampionsPage;

// src/components/layout/YelpLayout.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { yelpTheme } from '../../styles/themes/yelp';

const YelpLayout = ({ children }) => {
  return (
    <ThemeProvider theme={yelpTheme}>
      <div className="yelp-root">
        <header className="yelp-header">
          {/* Yelp-specific navigation */}
        </header>
        <main>{children}</main>
        <footer className="yelp-footer">
          {/* Yelp-specific footer */}
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default YelpLayout;