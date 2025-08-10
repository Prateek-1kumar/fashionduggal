
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaTshirt, FaSuitcase, FaUserTie } from 'react-icons/fa';
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
  <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col justify-between">
      {/* Hero Section */}
      <header className="w-full flex flex-col items-center pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={() => window.open('https://www.instagram.com/fashionwithduggalji/', '_blank')}
            className="focus:outline-none"
            aria-label="Visit Duggal Ji Instagram"
            type="button"
            tabIndex={0}
            style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
          >
            <Image
              src="/duggal.jpg"
              alt="Duggal Ji"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover shadow-lg"
              priority
            />
          </button>
          <h1 className="text-5xl font-extrabold text-center text-gray-900 tracking-tight drop-shadow-lg">
            Fashion with Duggal Ji
          </h1>
          <p className="text-xl text-white-700 text-center max-w-2xl mt-2">
            Personalised menswear, expert guidance, and custom tailoring from a family with 20+ years of experience.
            <span className="block text-base text-gray-500 mt-2">Your style, our legacy.</span>
          </p>
        </motion.div>
      </header>

      {/* Main Features Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <motion.section
          className="w-full max-w-3xl mx-auto bg-[#14213d]/95 rounded-3xl shadow-2xl flex flex-col gap-12 py-12 px-6 md:px-12 border border-blue-900/30"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          aria-label="Main Features"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
            {/* Order from Fashion with Duggal Ji Card */}
            <div className="flex-1 flex flex-col items-center text-center gap-5 p-8 bg-[#1a2240] rounded-3xl shadow-xl border border-blue-900/20 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#3a5ca8] mb-2 shadow-lg group-hover:scale-105 transition-transform">
                <FaSuitcase className="text-white text-3xl" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-blue-100 mb-1 tracking-tight">Order from Fashion with Duggal Ji</h2>
              <p className="text-blue-200 text-base mb-2 leading-relaxed">From <span className="font-semibold text-blue-100">bell bottoms</span> to <span className="font-semibold text-blue-100">Italian suits</span>, get the best fit and fabric, guided by our in-house experts.<br className="hidden md:block" /> <span className="text-blue-300 font-medium">Premium brands</span>, <span className="text-blue-300 font-medium">honest pricing</span>, and <span className="text-blue-300 font-medium">worldwide shipping</span>.</p>
              <button
                className="w-full py-3 px-6 bg-[#3a5ca8] hover:bg-[#4b6cb7] text-white font-semibold rounded-xl shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 flex items-center justify-center gap-2 text-lg tracking-wide border border-blue-900/30 mt-2"
                aria-label="Order from Fashion with Duggal Ji"
                tabIndex={0}
                onClick={handleOrder}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleOrder()}
                type="button"
              >
                Order from Fashion with Duggal Ji
              </button>
            </div>
            {/* 1-on-1 Personalised Style Suggestions Card */}
            <div className="flex-1 flex flex-col items-center text-center gap-5 p-8 bg-[#1a2240] rounded-3xl shadow-xl border border-blue-900/20 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#3a5ca8] mb-2 shadow-lg group-hover:scale-105 transition-transform">
                <FaUserTie className="text-white text-3xl" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-extrabold text-blue-100 mb-1 tracking-tight">1-on-1 Personalised Style Suggestions</h2>
              <p className="text-blue-200 text-base mb-2 leading-relaxed">Get direct, expert advice tailored to your <span className="font-semibold text-blue-100">personality</span>, <span className="font-semibold text-blue-100">occasion</span>, and <span className="font-semibold text-blue-100">preferences</span>. <br className="hidden md:block" /> No more guesswork—just <span className="text-blue-300 font-medium">genuine, personal style guidance</span>.</p>
              <button
                className="w-full py-3 px-6 bg-[#3a5ca8] hover:bg-[#4b6cb7] text-white font-semibold rounded-xl shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 flex items-center justify-center gap-2 text-lg tracking-wide border border-blue-900/30 mt-2"
                aria-label="1-on-1 Personalised Style Suggestions"
                tabIndex={0}
                onClick={handlePersonalised}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handlePersonalised()}
                type="button"
              >
                1-on-1 Personalised Style Suggestions <FaArrowRight className="ml-1" aria-hidden="true" />
              </button>
            </div>
          </div>
          <hr className="my-2 border-gray-200" />
          <div className="text-center text-blue-200 text-base max-w-2xl mx-auto">
            <span className="font-medium">⚡ Only 40 slots available. Bookings close when full.</span>
          </div>
        </motion.section>
       
      </main>
    </div>
  );
};

export default LandingPage;
