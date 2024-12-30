import React from 'react';
import YelpLayout from '../../components/layout/YelpLayout';
import Fellows from '../../components/yelp/Fellows';

const FellowsPage = () => {
  return (
    <YelpLayout>
      <Fellows />
    </YelpLayout>
  );
};

export default FellowsPage;

export const Head = () => (
  <>
    <title>YELP Fellows | LéO Africa Institute</title>
    <meta name="description" content="Meet the exceptional young leaders who are part of our YELP fellowship program, driving innovation and positive change across East Africa." />
  </>
); 