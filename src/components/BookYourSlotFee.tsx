import { motion } from 'framer-motion';
import { FaCheckCircle, FaRupeeSign } from 'react-icons/fa';
import React from 'react';

type BookYourSlotFeeProps = {
  onBack?: () => void;
  onPay?: () => void;
};

const BookYourSlotFee: React.FC<BookYourSlotFeeProps> = ({ onBack, onPay }) => {
  const handleBack = (e: React.MouseEvent | React.KeyboardEvent) => {
    if ('key' in e && e.key !== 'Enter' && e.key !== ' ') return;
    if (onBack) onBack();
  };
  return (
    <motion.section
      className="w-full max-w-2xl mx-auto p-0 md:p-0 bg-[#14213d]/95 rounded-3xl shadow-2xl flex flex-col gap-10 border border-blue-900/30 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-label="Consulting Fee Information"
    >
      <div className="flex flex-col items-center justify-center bg-[#1a2240] py-8 px-6 md:px-12 border-b border-blue-900/20">
        <div className="bg-[#3a5ca8] rounded-full shadow-lg p-3 mb-2">
          <FaRupeeSign className="text-white text-3xl" aria-hidden="true" />
        </div>
        <h2 className="text-3xl font-extrabold text-center text-white mb-2 tracking-tight drop-shadow">Consulting Fee & Payment</h2>
      </div>
      <motion.div
        className="bg-[#e9ecf5] border-l-4 border-blue-200 p-6 rounded-2xl flex flex-col gap-3 mx-4 md:mx-12 mt-8 mb-4 shadow border border-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-2">
          <FaRupeeSign className="text-blue-500 text-xl" aria-hidden="true" />
          <span className="font-bold text-blue-800 text-lg">Consulting Fee: ₹1599/-</span>
        </div>
        <p className="text-blue-900 text-sm">
          To cut off non-serious inquiries and to give fair value to my time & effort, the consulting cost for personally connecting with me is <span className="font-semibold">₹1599/-</span>.<br />
          I’ve kept it very reasonable considering the depth of effort I’ll put in.<br />
          <span className="font-semibold">There is no session limit</span> — I’ll be connected with you for 15–20 days (daily or on alternate days) until you and I are both 100% satisfied with the results.
        </p>
        <p className="text-blue-900 text-sm">
          Your satisfaction matters the most to me. I genuinely want to help, and I’ll always push my limits to make sure you get the best possible outcome.<br />
          So don’t hesitate — trust me, it will be worth it.
        </p>
        <ul className="flex flex-col gap-1 mt-2">
          <li className="flex items-center gap-2 text-blue-800">
            <FaCheckCircle className="text-blue-500" aria-hidden="true" />
            Once you make the payment, I will personally connect with you within 12 hours.
          </li>
          <li className="flex items-center gap-2 text-blue-800">
            <FaCheckCircle className="text-blue-500" aria-hidden="true" />
            Please drop your WhatsApp number and calling number after payment.
          </li>
        </ul>
      </motion.div>
      <div className="flex flex-col sm:flex-row gap-4 mt-2 px-6 md:px-12 pb-8">
        <button
          className="flex-1 py-3 px-6 bg-blue-100/80 hover:bg-blue-200/90 text-[#14213d] font-semibold rounded-xl shadow transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 flex items-center justify-center gap-2 text-lg"
          aria-label="Back"
          tabIndex={0}
          onClick={handleBack}
          onKeyDown={handleBack}
          type="button"
        >
          Back
        </button>
        <button
          className="flex-1 py-3 px-6 bg-[#3a5ca8] hover:bg-[#4b6cb7] text-white font-semibold rounded-xl shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 flex items-center justify-center gap-2 text-lg"
          aria-label="Pay Now"
          tabIndex={0}
          type="button"
          disabled
        >
          <FaCheckCircle className="mr-2" aria-hidden="true" /> Pay Now
        </button>
      </div>
    </motion.section>
  );
};

export default BookYourSlotFee;
