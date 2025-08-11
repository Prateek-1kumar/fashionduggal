import { motion } from 'framer-motion';
import { FaCheckCircle, FaRupeeSign } from 'react-icons/fa';
import React from 'react';

const priceList = [
  { label: 'Shirt', price: '₹800 – ₹2500' },
  { label: 'Pant', price: '₹1200 – ₹2500' },
  { label: '2-piece Bandhgala', price: '₹6000 – ₹12,000' },
  { label: '2-piece Suit', price: '₹6000 – ₹10,000' },
  { label: '3-piece Suit', price: '₹8000 – ₹13,000' },
  { label: 'Indo-Western', price: '₹7000 – ₹20,000' },
  { label: 'Sherwani Set (with Pagdi, Jutti & Stole)', price: '₹10,000 – ₹30,000' },
];

type OrderWithDuggalJiPaymentProps = {
  onBack?: () => void;
  onPay?: () => void;
};

const OrderWithDuggalJiPayment: React.FC<OrderWithDuggalJiPaymentProps> = ({ onBack, onPay }) => {
  const handleBack = () => {
    if (onBack) onBack();
  };
  return (
    <motion.section
      className="w-full max-w-2xl mx-auto p-0 md:p-0 bg-[#14213d]/95 rounded-3xl shadow-2xl flex flex-col gap-10 border border-blue-900/30 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-label="Booking Fee and Payment"
    >
      <div className="flex flex-col items-center justify-center bg-[#1a2240] py-8 px-6 md:px-12 border-b border-blue-900/20">
        <div className="bg-[#3a5ca8] rounded-full shadow-lg p-3 mb-2">
          <FaRupeeSign className="text-white text-3xl" aria-hidden="true" />
        </div>
        <h2 className="text-3xl font-extrabold text-center text-white mb-2 tracking-tight drop-shadow">Booking Fee & Payment</h2>
      </div>
      <motion.div
        className="bg-[#e9ecf5] border-l-4 border-blue-200 p-6 rounded-2xl flex flex-col gap-3 mx-4 md:mx-12 mt-8 mb-4 shadow border border-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-2">
          <FaRupeeSign className="text-blue-500 text-xl" aria-hidden="true" />
          <span className="font-bold text-blue-800 text-lg">Easy Booking – ₹999 (Adjusted in Final Bill)</span>
        </div>
        <p className="text-blue-900 text-sm">
          To filter out non-serious entries, booking your slot requires a <span className="font-semibold">₹999 advance</span>, which will be fully adjusted in your final bill if you place an order.<br />
          Once you book, we will contact you within 24 hours.<br />
          When you order, your outfit will be shipped within 7–10 days.<br />
          <span className="font-semibold">🌍 Worldwide shipping available.</span>
        </p>
        <p className="text-blue-900 text-sm font-semibold">💸 Price Transparency – Premium Quality Only</p>
        <p className="text-blue-900 text-sm">We don’t do “cheapest.” We do worth it. Every piece is stitched with love, premium fabrics, and a perfect fit tailored to you.</p>
        <div className="flex flex-col gap-1 mt-2">
          <span className="font-semibold text-blue-800">Average Price Ranges:</span>
          <ul className="list-none pl-0 text-blue-900 text-sm">
            {priceList.map((item, idx) => (
              <li key={idx} className="flex justify-between border-b border-blue-100 py-1">
                <span>{item.label}:</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-blue-900 text-xs mt-2">💡 Prices vary depending on fabrics — from pure linen to Japanese suiting fabrics to Italian luxury textiles, we’ve got everything covered.</p>
        <p className="text-blue-900 text-sm mt-2">So don’t hesitate — trust your guy and enjoy an outfit that speaks style, class, and comfort.</p>
      </motion.div>
      <div className="flex flex-col sm:flex-row gap-4 mt-2 px-6 md:px-12 pb-8">
        <button
          className="flex-1 py-3 px-6 bg-blue-100/80 hover:bg-blue-200/90 text-[#14213d] font-semibold rounded-xl shadow transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 flex items-center justify-center gap-2 text-lg"
          aria-label="Back"
          tabIndex={0}
          onClick={handleBack}
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

export default OrderWithDuggalJiPayment;
