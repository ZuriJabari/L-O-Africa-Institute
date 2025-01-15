import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { FaUniversity, FaCreditCard, FaMobileAlt, FaCcVisa, FaCcMastercard } from 'react-icons/fa'
import { SiAmericanexpress } from 'react-icons/si'

const DonatePage = () => {
  const paymentMethods = [
    {
      icon: <FaUniversity className="w-8 h-8" />,
      title: "Bank Transfer",
      details: [
        { label: "Account Name", value: "LéO Africa Institute" },
        { label: "Account No.", value: "9030012386396" },
        { label: "Bank", value: "Stanbic Bank" },
        { label: "Currency", value: "Uganda Shillings" },
        { label: "Branch", value: "Freedom City" },
        { label: "Swift Code", value: "SBICUGKX" },
      ]
    },
    {
      icon: <div className="flex space-x-2">
        <FaCcVisa className="w-8 h-8" />
        <FaCcMastercard className="w-8 h-8" />
        <SiAmericanexpress className="w-8 h-8" />
      </div>,
      title: "Card Payment",
      subtitle: "Visa, Mastercard, American Express",
      details: [
        { 
          label: "Secure Payment via Flutterwave", 
          value: "https://flutterwave.com/pay/alg2024",
          isLink: true,
          buttonStyle: "inline-flex items-center gap-2 px-6 py-3 bg-[#0B9A9E] text-white rounded-lg hover:bg-[#0B9A9E]/90 transition-colors"
        }
      ]
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "MTN Mobile Money",
      details: [
        { label: "Name", value: "LéO Africa Institute" },
        { label: "Number", value: "0776891933" },
        { label: "Momo Code", value: "656105" },
      ]
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Airtel Money",
      details: [
        { label: "Name", value: "LéO Africa Institute" },
        { label: "Number", value: "0709746417" },
        { label: "Momo Code", value: "4375341" },
      ]
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#0B9A9E]/90 to-gray-900 py-24">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F6911E]/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Support Our Mission
              </h1>
              <div className="w-24 h-1 bg-[#F6911E] mx-auto mb-8"></div>
              <p className="text-xl text-white/80 leading-relaxed">
                The LéO Africa Institute is a non-profit organization that depends on contributions from generous patrons like yourself.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We invite you to make your annual donation to support our mission to build the Africa We Want. Join the community of Friends, Fellows & Champions in contributing to building the Africa We Want.
              </p>
            </motion.div>

            {/* Payment Methods */}
            <div className="grid md:grid-cols-2 gap-8">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  {method.title === "Card Payment" ? (
                    <>
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{method.subtitle}</p>
                        <div className="flex items-center gap-4 bg-white rounded-lg p-4">
                          <FaCcVisa className="w-10 h-10 text-[#1A1F71]" />
                          <FaCcMastercard className="w-10 h-10 text-[#EB001B]" />
                          <SiAmericanexpress className="w-10 h-10 text-[#006FCF]" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        {method.details.map((detail) => (
                          <div key={detail.label} className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-2">{detail.label}</span>
                            {detail.isLink && (
                              <a
                                href={detail.value}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={detail.buttonStyle}
                              >
                                Make Payment
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-16 h-16 bg-[#0B9A9E]/10 rounded-full text-[#0B9A9E]">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{method.title}</h3>
                          {method.subtitle && (
                            <p className="text-gray-600 text-sm mt-1">{method.subtitle}</p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-3">
                        {method.details.map((detail) => (
                          <div key={detail.label} className="flex flex-col">
                            <span className="text-sm text-gray-500">{detail.label}</span>
                            <span className="font-medium text-gray-900">{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DonatePage
