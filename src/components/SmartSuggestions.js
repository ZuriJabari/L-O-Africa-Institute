import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiMail, FiMapPin } from 'react-icons/fi';

const rules = [
  {
    test: (p) => p.startsWith('/about/team'),
    title: 'Continue exploring',
    cards: [
      {
        type: 'about',
        title: 'Our Mission',
        description: 'Building ethical leadership for Africa\'s transformation through innovative programs and community engagement.',
        link: '/about/history-and-mission',
        linkText: 'Learn More'
      },
      {
        type: 'event',
        title: 'Upcoming Event',
        subtitle: 'Annual Leaders Gathering 2025',
        date: 'Coming Soon',
        link: '/events',
        linkText: 'View Events'
      },
      {
        type: 'contact',
        title: 'Get in Touch',
        description: 'Have questions or want to collaborate?',
        link: '/contact',
        linkText: 'Contact Us'
      }
    ]
  },
  {
    test: (p) => p.startsWith('/events'),
    title: 'Continue exploring',
    cards: [
      {
        type: 'program',
        title: 'YELP Fellowship',
        description: 'Young and Emerging Leaders Project - Empowering the next generation of African leaders.',
        link: '/yelp',
        linkText: 'Explore Program'
      },
      {
        type: 'article',
        title: 'Latest Insights',
        description: 'Read our latest stories on leadership, innovation, and social change in Africa.',
        link: '/news',
        linkText: 'Read Stories'
      },
      {
        type: 'contact',
        title: 'Join Our Community',
        description: 'Stay connected with updates on programs and events.',
        link: '/join/individuals',
        linkText: 'Join Now'
      }
    ]
  },
  {
    test: (p) => p.startsWith('/join'),
    title: 'Continue exploring',
    cards: [
      {
        type: 'about',
        title: 'About LéO Africa Institute',
        description: 'Learn about our vision to build ethical leadership and drive sustainable development across Africa.',
        link: '/about',
        linkText: 'Our Story'
      },
      {
        type: 'program',
        title: 'Griots Fellowship',
        description: 'Join Africa\'s next generation of storytellers and thought leaders shaping the continent\'s narrative.',
        link: '/griots-cohort-2025',
        linkText: 'Learn More'
      },
      {
        type: 'contact',
        title: 'Contact Us',
        description: 'Questions about membership or partnerships? We\'re here to help.',
        link: '/contact',
        linkText: 'Get in Touch'
      }
    ]
  },
  {
    test: (p) => p.startsWith('/initiatives') || p.startsWith('/yelp') || p.startsWith('/huduma'),
    title: 'Continue exploring',
    cards: [
      {
        type: 'event',
        title: 'Annual Leaders Gathering',
        subtitle: 'Connect with Visionaries',
        description: 'Join influential leaders shaping Africa\'s future through thought-provoking discussions.',
        link: 'https://alg.leoafricainstitute.org',
        linkText: 'Learn More'
      },
      {
        type: 'article',
        title: 'Stories & Insights',
        description: 'Explore thought leadership articles and success stories from our community.',
        link: '/news',
        linkText: 'Read More'
      },
      {
        type: 'contact',
        title: 'Partner With Us',
        description: 'Collaborate on innovative projects building change agents in our communities.',
        link: '/partner-with-us',
        linkText: 'Become a Partner'
      }
    ]
  },
  {
    test: (p) => p.startsWith('/blog') || p.startsWith('/news'),
    title: 'Continue exploring',
    cards: [
      {
        type: 'program',
        title: 'Our Initiatives',
        description: 'Discover our flagship programs designed to cultivate ethical leadership across Africa.',
        link: '/initiatives',
        linkText: 'View Initiatives'
      },
      {
        type: 'event',
        title: 'Upcoming Events',
        subtitle: 'Join the Conversation',
        description: 'Engage with thought leaders and changemakers at our events.',
        link: '/events',
        linkText: 'See Events'
      },
      {
        type: 'contact',
        title: 'Stay Connected',
        description: 'Subscribe to our newsletter for updates and exclusive content.',
        link: '/join/individuals',
        linkText: 'Subscribe'
      }
    ]
  },
  {
    test: (p) => p === '/' || p.startsWith('/about'),
    title: 'Continue exploring',
    cards: [
      {
        type: 'program',
        title: 'Our Initiatives',
        description: 'Explore our transformative programs designed to build Africa\'s next generation of leaders.',
        link: '/initiatives',
        linkText: 'View Initiatives'
      },
      {
        type: 'event',
        title: 'Events & Gatherings',
        subtitle: 'Connect & Learn',
        description: 'Join our community at conferences, talks, and workshops.',
        link: '/events',
        linkText: 'Explore Events'
      },
      {
        type: 'contact',
        title: 'Get Involved',
        description: 'Partner, donate, or join our community to make an impact.',
        link: '/join/individuals',
        linkText: 'Join Us'
      }
    ]
  }
];

const getSuggestions = (pathname) => {
  for (const r of rules) {
    if (r.test(pathname)) return r;
  }
  return {
    title: 'Continue exploring',
    cards: [
      {
        type: 'about',
        title: 'About Us',
        description: 'Learn about our mission to build ethical leadership across Africa.',
        link: '/about',
        linkText: 'Our Story'
      },
      {
        type: 'event',
        title: 'Events',
        subtitle: 'Join the Conversation',
        description: 'Discover upcoming events and gatherings.',
        link: '/events',
        linkText: 'View Events'
      },
      {
        type: 'contact',
        title: 'Contact',
        description: 'Get in touch with our team.',
        link: '/contact',
        linkText: 'Reach Out'
      }
    ]
  };
};

const CardIcon = ({ type }) => {
  const iconClass = "w-5 h-5";
  switch (type) {
    case 'event':
      return <FiCalendar className={iconClass} />;
    case 'contact':
      return <FiMail className={iconClass} />;
    case 'article':
      return <FiArrowRight className={iconClass} />;
    default:
      return <FiMapPin className={iconClass} />;
  }
};

const SmartSuggestions = () => {
  let pathname = '/';
  if (typeof window !== 'undefined') {
    pathname = window.location.pathname || '/';
  }
  
  // Don't show on homepage
  if (pathname === '/') {
    return null;
  }
  
  const suggestion = getSuggestions(pathname);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-light text-gray-900">
              {suggestion.title}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {suggestion.cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  to={card.link}
                  className="group block h-full bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg border border-gray-100 hover:border-[#0B9A9E]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0B9A9E]/10 flex items-center justify-center text-[#0B9A9E] group-hover:bg-[#0B9A9E] group-hover:text-white transition-all duration-300">
                      <CardIcon type={card.type} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#0B9A9E] transition-colors">
                        {card.title}
                      </h4>
                      {card.subtitle && (
                        <p className="text-sm text-[#F6911E] font-medium mb-2">{card.subtitle}</p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#0B9A9E] text-sm font-medium group-hover:gap-3 transition-all">
                    {card.linkText}
                    <FiArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartSuggestions;
