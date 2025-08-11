import { motion } from 'framer-motion';
import { FaCheckCircle, FaRupeeSign, FaArrowRight } from 'react-icons/fa';
import React from 'react';
import OrderWithDuggalJiPayment from './OrderWithDuggalJiPayment';

const priceList = [
  { label: 'Shirt', price: '₹800 – ₹2500' },
  { label: 'Pant', price: '₹1200 – ₹2500' },
  { label: '2-piece Bandhgala', price: '₹6000 – ₹12,000' },
  { label: '2-piece Suit', price: '₹6000 – ₹10,000' },
  { label: '3-piece Suit', price: '₹8000 – ₹13,000' },
  { label: 'Indo-Western', price: '₹7000 – ₹20,000' },
  { label: 'Sherwani Set (with Pagdi, Jutti & Stole)', price: '₹10,000 – ₹30,000' },
];

type OrderWithDuggalJiProps = {
  onNext?: () => void;
  onBack?: () => void;
  onPay?: () => void;
};

const OrderWithDuggalJi: React.FC<OrderWithDuggalJiProps> = ({ onNext, onBack, onPay }) => {
  const [step, setStep] = React.useState(0);

  const handleNext = (e: React.MouseEvent | React.KeyboardEvent) => {
    if ('key' in e && e.key !== 'Enter' && e.key !== ' ') return;
    setStep(1);
    if (onNext) onNext();
  };
  const handleBack = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e && 'key' in e && e.key !== 'Enter' && e.key !== ' ') return;
    if (step === 1) {
      setStep(0);
    } else if (onBack) {
      onBack();
    }
  };
  const handlePay = (e: React.MouseEvent | React.KeyboardEvent) => {
    if ('key' in e && e.key !== 'Enter' && e.key !== ' ') return;
    if (onPay) onPay();
  };

  if (step === 1) {
    return <OrderWithDuggalJiPayment onBack={handleBack} onPay={onPay} />;
  }

  return (
    <motion.section
      className="w-full max-w-2xl mx-auto p-0 md:p-0 bg-[#14213d]/95 rounded-3xl shadow-2xl flex flex-col gap-10 border border-blue-900/30 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-label="How to Order from Fashion with Duggal Ji"
    >
      <div className="flex flex-col items-center justify-center bg-[#1a2240] py-8 px-6 md:px-12 border-b border-blue-900/20">
        <div className="bg-[#3a5ca8] rounded-full shadow-lg p-3 mb-2">
          <FaRupeeSign className="text-white text-3xl" aria-hidden="true" />
        </div>
        <h2 className="text-4xl font-extrabold text-center text-white mb-2 tracking-tight drop-shadow">How to Order from Fashion with Duggal Ji ✨</h2>
        <p className="text-lg text-blue-100 text-center max-w-xl">I’m currently taking only 20 orders — from bell bottoms and bootcut pants to kurta-pajamas, sherwanis, Indo-Westerns, Italian suits, double-breasted jackets, bandhgalas, 2-piece, and 3-piece suits — we’ve got you fully covered.</p>
      </div>
      {/* <h2 className="text-3xl font-bold text-center text-blue-100 mb-2 mt-6">How to Order from Fashion with Duggal Ji ✨</h2>
      <p className="text-blue-200 text-center">
        I’m currently taking only 20 orders — from bell bottoms and bootcut pants to kurta-pajamas, sherwanis, Indo-Westerns, Italian suits, double-breasted jackets, bandhgalas, 2-piece, and 3-piece suits — we’ve got you fully covered.
      </p> */}
      <div className="flex flex-col gap-8 px-6 md:px-12 py-8">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-blue-100 mb-2 text-center">Why Choose Us?</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 bg-blue-900/20 rounded-xl p-4 shadow-sm border border-blue-900/10"><span className="font-bold text-lg text-blue-200">•</span> <span className="text-blue-100">My family owns two stores in town with in-house tailoring teams and all the required machinery.</span></li>
            <li className="flex items-start gap-3 bg-blue-900/20 rounded-xl p-4 shadow-sm border border-blue-900/10"><span className="font-bold text-lg text-blue-200">•</span> <span className="text-blue-100">We work with the best quality fabrics for the perfect fit.</span></li>
            <li className="flex items-start gap-3 bg-blue-900/20 rounded-xl p-4 shadow-sm border border-blue-900/10"><span className="font-bold text-lg text-blue-200">•</span> <span className="text-blue-100">We also deal in branded fabrics like Blackberrys, Raymond, Van Heusen, and many more — at stitching rates lower than their brand showrooms because we don’t charge brand value markup.</span></li>
            <li className="flex items-start gap-3 bg-blue-900/20 rounded-xl p-4 shadow-sm border border-blue-900/10"><span className="font-bold text-lg text-blue-200">•</span> <span className="text-blue-100">Our ultimate goal is to give you the best experience with your outfit — from fit to finish.</span></li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 mt-4">
          <h3 className="text-2xl font-semibold text-blue-100 mb-2 text-center">Another Advantage — Online Measurements & Fabric Finalising</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 bg-blue-900/20 rounded-xl p-4 shadow-sm border border-blue-900/10"><span className="font-bold text-lg text-blue-200">•</span> <span className="text-blue-100">I will personally guide you with measurements.</span></li>
            <li className="flex items-start gap-3 bg-blue-900/20 rounded-xl p-4 shadow-sm border border-blue-900/10"><span className="font-bold text-lg text-blue-200">•</span> <span className="text-blue-100">If required, we’ll video call you to ensure precision.</span></li>
            <li className="flex items-start gap-3 bg-blue-900/20 rounded-xl p-4 shadow-sm border border-blue-900/10"><span className="font-bold text-lg text-blue-200">•</span> <span className="text-blue-100">We’ll share catalogues and fabric details over WhatsApp so you can choose from the comfort of your home.</span></li>
            <li className="flex items-start gap-3 bg-blue-900/20 rounded-xl p-4 shadow-sm border border-blue-900/10"><span className="font-bold text-lg text-blue-200">•</span> <span className="text-blue-100">Don’t worry — all the stress is on us so you can just look forward to wearing your perfect outfit.</span></li>
          </ul>
        </div>
      </div>
      <div className="bg-[#e9ecf5] border-l-4 border-blue-200 p-4 rounded text-blue-900 font-medium">
        If you’re interested, click Next to get started.
      </div>
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
          aria-label="Next"
          tabIndex={0}
          onClick={handleNext}
          onKeyDown={handleNext}
          type="button"
        >
          <FaArrowRight className="mr-2" aria-hidden="true" /> Next
        </button>
      </div>
    </motion.section>
  );
};

export default OrderWithDuggalJi;
