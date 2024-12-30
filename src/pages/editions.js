import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import photo2023 from '../assets/images/alg-2023.png'; // Replace with actual paths
import photo2022 from '../assets/images/alg-2022.jpg';
import photo2021 from '../assets/images/alg-2021.jpg';
import photo2020 from '../assets/images/alg-2020.jpg';
import heroPast from '../assets/images/past-alg-hero.jpg'; // Replace with actual paths

const Editions = () => {
  const eventDate = new Date('2024-11-14T00:00:00'); // Event date (Nov 14, 2024)

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = eventDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  const editionsData = [
    {
      year: '2023',
      title: '2023 Annual Leaders Gathering',
      description:
        'The 2023 gathering brought together innovative leaders to deliberate on key issues facing Africa’s future. This event emphasized collaboration and cross-sector leadership.',
      date: 'November 14-16, 2023',
      image: photo2023,
      link: '/#',
    },
    {
      year: '2022',
      title: '2022 Annual Leaders Gathering',
      description:
        'In 2022, we focused on the theme of driving inclusive growth through leadership. It was an inspiring event attended by African change-makers across industries.',
      date: 'November 12-14, 2022',
      image: photo2022,
      link: '/#',
    },
    {
      year: '2021',
      title: '2021 Annual Leaders Gathering',
      description:
        'The 2021 gathering centered on leadership resilience in post-pandemic Africa, with a focus on recovery and fostering innovation in African economies.',
      date: 'November 10-12, 2021',
      image: photo2021,
      link: '/#',
    },
    {
      year: '2020',
      title: '2020 Annual Leaders Gathering',
      description:
        'In 2020, amidst the pandemic, the ALG went virtual, but continued to engage African leaders in meaningful conversations about crisis management and recovery.',
      date: 'November 8-10, 2020',
      image: photo2020,
      link: '/#',
    },
  ];

  return (
    <Layout>
      {/* Hero Section with Countdown Timer */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${heroPast})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Past Editions</h1>
          <p className="text-lg sm:text-xl mb-4">Discover key moments from the past ALG editions</p>
          
          {/* Countdown Timer */}
          <div className="bg-[#1d8f92] text-white py-4 px-8 rounded-lg mt-4">
            <h2 className="text-xl font-semibold mb-2">#ALG2024 Countdown</h2>
            <div className="text-2xl font-bold">
              {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
            </div>
          </div>
        </div>
      </section>
      <div className='prefooter'></div>
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {editionsData.map((edition) => (
            <div key={edition.year} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img src={edition.image} alt={edition.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{edition.title}</h2>
                <p className="text-gray-600 mb-4">{edition.date}</p>
                <p className="text-gray-800 mb-4">{edition.description}</p>
                <a href={edition.link} className="text-blue-600 hover:underline font-medium">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Editions;
