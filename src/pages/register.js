import React, { useState } from 'react';
import Layout from '../components/Layout';  // Import the Layout component
import heroPast from '../assets/images/past-alg-hero.jpg';  // Ensure the hero image is imported

const RegisterComponent = () => {
  return (
    <Layout>
      {/* Smaller Hero Section */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(${heroPast})`, height: '66vh' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide leading-tight mb-4">
            Reserve Your Seat
          </h1>
          <p className="sm:text-2xl font-semibold mb-6 max-w-2xl bg-[#0ebabc] text-black p-3 rounded-md shadow-md tracking-wider leading-snug">
            Theme: Harnessing Africa’s Growth Drivers: The Critical Role of Leadership, Institutions and Human Capital
          </p>
          <p className="text-3xl sm:text-4xl font-bold tracking-wider text-[#0ebabc] mb-6 shadow-lg">
            #ALG2024
          </p>
          
        </div>
      </section>
      <div className='prefooter'></div>
      {/* Mailchimp Registration Form Section */}
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
              <h2 className="text-2xl font-bold mb-6 text-center">Register for the #ALG2024</h2>

              {/* Name */}
              <div className="mc-field-group mb-5">
                <label htmlFor="mce-NAME" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="NAME"
                  className="text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                  id="mce-NAME"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
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

              {/* Phone Number */}
              <div className="mc-field-group mb-5">
                <label htmlFor="mce-PHONE" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  name="PHONE"
                  className="text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                  id="mce-PHONE"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Company/Organisation */}
              <div className="mc-field-group mb-5">
                <label htmlFor="mce-COMPANY" className="block text-sm font-semibold text-gray-700 mb-1">Company/Organisation</label>
                <input
                  type="text"
                  name="COMPANY"
                  className="text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                  id="mce-COMPANY"
                  placeholder="Enter your company or organisation"
                />
              </div>

              {/* Role in Company */}
              <div className="mc-field-group mb-5">
                <label htmlFor="mce-ROLE" className="block text-sm font-semibold text-gray-700 mb-1">Role in Company</label>
                <input
                  type="text"
                  name="ROLE"
                  className="text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                  id="mce-ROLE"
                  placeholder="Enter your role in the company"
                />
              </div>

              {/* Country */}
              <div className="mc-field-group mb-5">
                <label htmlFor="mce-COUNTRY" className="block text-sm font-semibold text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  name="COUNTRY"
                  className="text w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                  id="mce-COUNTRY"
                  placeholder="Enter your country"
                />
              </div>

              {/* Attendance Mode - Styled Radio Buttons */}
              <div className="mc-field-group input-group mb-5">
                <strong className="block text-sm font-semibold text-gray-700 mb-2">How will you attend?</strong>
                <ul className="flex flex-col space-y-3">
                  {['Physically', 'Virtually', 'Both'].map((option, index) => (
                    <li key={index} className="flex items-center">
                      <input
                        type="radio"
                        name="MMERGE6"
                        id={`mce-MMERGE6${index}`}
                        value={option}
                        className="h-4 w-4 text-blue-500 border-gray-300 focus:ring focus:ring-blue-200"
                      />
                      <label
                        htmlFor={`mce-MMERGE6${index}`}
                        className="ml-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                      >
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Networks - Styled Radio Buttons */}
              <div className="mc-field-group input-group mb-5">
                <strong className="block text-sm font-semibold text-gray-700 mb-2">Are you a member of any of these networks?</strong>
                <ul className="flex flex-col space-y-3">
                  {[
                    'LéO Africa Institute',
                    'Konrad Adenauer Stiftung',
                    'Ceed Concordia',
                    'Segal Family Foundation',
                    'Invited Guest'
                  ].map((network, index) => (
                    <li key={index} className="flex items-center">
                      <input
                        type="radio"
                        name="MMERGE7"
                        id={`mce-MMERGE7${index}`}
                        value={network}
                        className="h-4 w-4 text-blue-500 border-gray-300 focus:ring focus:ring-blue-200"
                      />
                      <label
                        htmlFor={`mce-MMERGE7${index}`}
                        className="ml-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                      >
                        {network}
                      </label>
                    </li>
                  ))}
                </ul>
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
            <p className='mt-5 text-center'>Registration will close on November 5th, 2024, at Midnight.</p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default RegisterComponent;
