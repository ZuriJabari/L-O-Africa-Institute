import React from 'react';
import Layout from '../components/Layout';  // Import the Layout component
import heroPast from '../assets/images/past-alg-hero.jpg';  // Ensure the hero image is imported
import alpLogo from '../assets/images/alp.png';
import sffLogo from '../assets/images/sff-logo-alt-box.png';
import kasLogo from '../assets/images/KAS_Logo_Original.png';

const RegisterTownHall = () => {
  return (
    <Layout>
      {/* Smaller Hero Section */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(${heroPast})`, height: '66vh' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide leading-tight mb-4">
            Join Us
          </h1>
          
          <p className="text-3xl sm:text-4xl font-bold tracking-wider text-[#0ebabc] mb-4 shadow-lg">
            #ALG2024
          </p>
          
          <p className="sm:text-2xl font-semibold mb-6 max-w-2xl bg-[#0ebabc] text-black p-3 rounded-md shadow-md tracking-wider leading-snug">
            Theme: Bridging the Divides; Building Trust & Responding to Africa's Youths Quest to Lead
          </p>
        </div>
      </section>
      <div className='prefooter'></div>
      {/* Simplified Registration Form Section */}
      <section className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-8 mb-16">
        <div id="mc_embed_signup">
          <form
            action="https://leoafricainstitute.us3.list-manage.com/subscribe/post?u=cecb072ded342121a9e74ffb0&amp;id=82be85988f&amp;f_id=00a835e2f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
          
            <div id="mc_embed_signup_scroll">
              <h2 className="text-2xl font-bold mb-6 text-center">Register for #ALG2024 Town Hall</h2>

              {/* Full Name */}
              <div className="mc-field-group mb-5">
                <label htmlFor="mce-NAME" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="NAME"
                  className="text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                  id="mce-NAME"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Address */}
              <div className="mc-field-group mb-5">
                <label htmlFor="mce-EMAIL" className="block text-sm font-semibold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                  id="mce-EMAIL"
                  required
                  placeholder="Enter your email address"
                />
              </div>

              {/* Country of Residence */}
              <div className="mc-field-group mb-5">
                <label htmlFor="mce-COUNTRY" className="block text-sm font-semibold text-gray-700 mb-1">Country of Residence</label>
                <input
                  type="text"
                  name="COUNTRY"
                  className="text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                  id="mce-COUNTRY"
                  placeholder="Enter your country"
                />
              </div>

              {/* Organization/Occupation */}
              <div className="mc-field-group mb-5">
                <label htmlFor="mce-ORG" className="block text-sm font-semibold text-gray-700 mb-1">Organization/Occupation</label>
                <input
                  type="text"
                  name="ORG"
                  className="text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                  id="mce-ORG"
                  placeholder="Enter your organization or occupation"
                />
              </div>

              {/* Mailchimp Responses */}
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>

              {/* Bot protection */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input
                  type="text"
                  name="b_cecb072ded342121a9e74ffb0_82be85988f"
                  tabIndex="-1"
                  value=""
                />
              </div>

              {/* Custom-styled Submit Button */}
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="w-full bg-[#1d8f92] hover:bg-[#0a4445] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
                  value="Submit"
                />
              </div>
              
            </div>
            <p className='mt-5 text-center'>Registration will close on November 12th, 2024, at Midnight for Virtual Town Hall & Nov 10th for Physical session.</p>
          </form>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mt-8 mb-16 text-center">
        <h3 className="text-xl font-semibold mb-4">The Virtual Town Hall is brought to you in partnership with:</h3>
        <div className="flex justify-center space-x-6">
          {/* Partner Logos with Links */}
          <a href="https://www.africaleadership.net/" target="_blank" rel="noopener noreferrer">
            <img src={alpLogo} alt="Africa Leadership Initiative" className="h-16 w-auto" />
          </a>
          <a href="https://www.segalfamilyfoundation.org/" target="_blank" rel="noopener noreferrer">
            <img src={sffLogo} alt="Segal Family Foundation" className="h-16 w-auto" />
          </a>
          <a href="https://www.kas.de/en/" target="_blank" rel="noopener noreferrer">
            <img src={kasLogo} alt="Konrad Adenauer Stiftung" className="h-16 w-auto" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default RegisterTownHall;
