
import { useState } from 'react';
import { motion } from 'framer-motion';
import {FaSuitcase, FaUserTie, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { StickyBanner } from "@/components/ui/sticky-banner";
import Image from 'next/image';
import BookYourSlot from '../components/BookYourSlot';


import OrderWithDuggalJi from '../components/OrderWithDuggalJi';

const LandingPage = () => {
  const [showPersonalised, setShowPersonalised] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const handlePersonalised = () => {
    setShowPersonalised(true);
    setShowOrder(false);
  };
  const handleOrder = () => {
    setShowOrder(true);
    setShowPersonalised(false);
  };

  const handleBackToLanding = () => {
    setShowPersonalised(false);
    setShowOrder(false);
  };

  if (showPersonalised) {
    return <BookYourSlot onPay={() => window.open('https://buy.stripe.com/test_1234567890', '_blank')} onBack={handleBackToLanding} />;
  }
  if (showOrder) {
    return <OrderWithDuggalJi onPay={() => window.open('https://buy.stripe.com/test_1234567890', '_blank')} onBack={handleBackToLanding} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#14213d] via-[#1a2240] to-[#232b3e] flex flex-col">
      {/* Sticky Banner */}
      <StickyBanner className="bg-gradient-to-r from-[#e9c46a] via-yellow-300 to-yellow-400 shadow-lg border-b border-yellow-200">
        <p className="mx-0 max-w-[90%] text-[#232b3e] font-semibold text-base md:text-lg drop-shadow-md text-center">
          <span className="font-bold">Due to the huge number of DMs asking for style suggestions and custom orders, I’ve created this space to make things easier for both of us.
</span> 
        </p>
      </StickyBanner>
      {/* Top Nav */}
      <nav className="w-full flex justify-between items-center px-8 pt-8 pb-2">
                  <div className="flex gap-6">
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" tabIndex={0} className="text-gray-100 hover:text-yellow-300 focus:text-yellow-300 text-2xl transition-colors outline-none focus:ring-2 focus:ring-yellow-300 rounded">
                      <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" tabIndex={0} className="text-gray-100 hover:text-yellow-300 focus:text-yellow-300 text-2xl transition-colors outline-none focus:ring-2 focus:ring-yellow-300 rounded">
                      <FaLinkedin />
                    </a>
                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" tabIndex={0} className="text-gray-100 hover:text-yellow-300 focus:text-yellow-300 text-2xl transition-colors outline-none focus:ring-2 focus:ring-yellow-300 rounded">
                      <FaYoutube />
                    </a>
                  </div>
                </nav>
                {/* Hero Section */}
                <header className="w-full flex flex-col items-center pt-10 pb-8">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#e9c46a] shadow-2xl mb-6 bg-[#1a2240]">
                      <Image
                        src="/duggal.jpg"
                        alt="Fashion Consultant"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-6xl font-serif font-extrabold text-white text-center tracking-wider drop-shadow-[0_4px_24px_rgba(255,255,255,0.12)] mb-2"
                  >
                    MEN’S FASHION<br />CONSULTING
                  </motion.h1>
                </header>
                {/* Main Features Section */}
                <main className="flex-1 flex flex-col items-center justify-center px-4">
                  <motion.section
                    className="w-full max-w-4xl mx-auto flex flex-col gap-12 py-12 px-2 md:px-0"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    aria-label="Main Features"
                  >
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
                      {/* Order from Fashion with Duggal Ji Card */}
                      <div
                        role="button"
                        tabIndex={0}
                        aria-label="Order from Fashion with Duggal Ji"
                        onClick={handleOrder}
                        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleOrder()}
                        className="flex-1 max-w-md min-h-[420px] flex flex-col items-center justify-between bg-white/80 backdrop-blur-md border-2 border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 cursor-pointer px-8 py-10 gap-6 focus:ring-2 focus:ring-blue-300 outline-none"
                      >
                        <div className="flex flex-col items-center w-full">
                          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 border border-blue-200 mb-6">
                            <FaSuitcase className="text-blue-700 text-3xl" aria-hidden="true" />
                          </div>
                          <h2 className="font-bold text-2xl md:text-3xl text-blue-900 mb-2 text-center">Order from Fashion with Duggal Ji</h2>
                          <p className="text-blue-700 text-base md:text-lg mb-4 leading-relaxed text-center">
                            From <span className="font-semibold text-blue-900">bell bottoms</span> to <span className="font-semibold text-blue-900">Italian suits</span>, get the best fit and fabric, guided by our in-house experts.<br className="hidden md:block" />
                            <span className="text-blue-500 font-medium">Premium brands</span>, <span className="text-blue-500 font-medium">honest pricing</span>, and <span className="text-blue-500 font-medium">worldwide shipping</span>.
                          </p>
                        </div>
                        <button
                          className="w-full py-3 px-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 text-lg border border-blue-200 mt-2"
                          aria-label="Order from Fashion with Duggal Ji"
                          tabIndex={0}
                          type="button"
                        >
                          Order from Fashion with Duggal Ji
                        </button>
                      </div>
                      {/* 1-on-1 Personalised Style Suggestions Card */}
                      <div
                        role="button"
                        tabIndex={0}
                        aria-label="1-on-1 Personalised Style Suggestions"
                        onClick={handlePersonalised}
                        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handlePersonalised()}
                        className="flex-1 max-w-md min-h-[420px] flex flex-col items-center justify-between bg-white/80 backdrop-blur-md border-2 border-yellow-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 cursor-pointer px-8 py-10 gap-6 focus:ring-2 focus:ring-yellow-300 outline-none"
                      >
                        <div className="flex flex-col items-center w-full">
                          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-50 border border-yellow-200 mb-6">
                            <FaUserTie className="text-yellow-500 text-3xl" aria-hidden="true" />
                          </div>
                          <h2 className="font-bold text-2xl md:text-3xl text-yellow-900 mb-2 text-center">1-on-1 Personalised Style Suggestions</h2>
                          <p className="text-yellow-800 text-base md:text-lg mb-4 leading-relaxed text-center">
                            Get direct, expert advice tailored to your <span className="font-semibold">personality</span>, <span className="font-semibold">occasion</span>, and <span className="font-semibold">preferences</span>.<br className="hidden md:block" />
                            <span className="text-yellow-700">No more guesswork—just genuine, personal style guidance.</span>
                          </p>
                        </div>
                        <button
                          className="w-full py-3 px-6 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-xl shadow transition focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 text-lg border border-yellow-200 mt-2"
                          aria-label="1-on-1 Personalised Style Suggestions"
                          tabIndex={0}
                          type="button"
                        >
                          1-on-1 Personalised Style Suggestions
                        </button>
                      </div>
                    </div>
                  </motion.section>
                </main>
              </div>
            );
      }

export default LandingPage;