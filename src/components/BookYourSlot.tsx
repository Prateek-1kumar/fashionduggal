import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { MdLooksOne, MdLooksTwo, MdLooks3 } from 'react-icons/md';
import React from 'react';
import BookYourSlotFee from './BookYourSlotFee';


type BookYourSlotProps = {
  onNext?: () => void;
  onPay?: () => void;
  onBack?: () => void;
};

const valuePoints = [
  {
    icon: <MdLooksOne className="text-primary-600 text-2xl mr-2" aria-hidden="true" />,
    title: 'Customised Wedding & Occasion Wear',
    description:
      'Whether it’s your wedding, reception, or any special occasion — formal, semi-formal, or casual — I’ll guide you on the right fit, colour combinations, and everything you need to look your absolute best.',
  },
  {
    icon: <MdLooksTwo className="text-primary-600 text-2xl mr-2" aria-hidden="true" />,
    title: 'Everyday Outfit Suggestions',
    description:
      'I’ll help you choose the right brands, fabrics, and fits based on your budget and body type. From where to buy, what to buy, and what will suit you (and what won’t) — I’ll make it simple and clear.',
  },
  {
    icon: <MdLooks3 className="text-primary-600 text-2xl mr-2" aria-hidden="true" />,
    title: 'Formal Wear Guidance',
    description:
      'From Sherwanis to Indo-Westerns, coat-pant suits to fully customised looks — I’ll help you choose what perfectly matches your body type, occasion, and personal style.',
  },
];

const BookYourSlot: React.FC<BookYourSlotProps> = ({ onNext, onPay, onBack }) => {
  const [step, setStep] = React.useState(0);

  const handleNext = (e: React.MouseEvent | React.KeyboardEvent) => {
    if ('key' in e && e.key !== 'Enter' && e.key !== ' ') return;
    setStep(1);
  };
  const handleBack = (e: React.MouseEvent | React.KeyboardEvent) => {
    if ('key' in e && e.key !== 'Enter' && e.key !== ' ') return;
    if (step === 1) {
      setStep(0);
    } else if (onBack) {
      onBack();
    }
  };

  if (step === 1) {
  return <BookYourSlotFee onBack={() => handleBack({ key: 'Enter' } as React.KeyboardEvent)} onPay={onPay} />;
  }

  return (
    <motion.section
      className="w-full max-w-2xl mx-auto p-0 md:p-0 bg-[#14213d]/95 rounded-3xl shadow-2xl flex flex-col gap-10 border border-blue-900/30 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-label="Book Your Slot"
    >
      <div className="flex flex-col items-center justify-center bg-[#1a2240] py-8 px-6 md:px-12 border-b border-blue-900/20">
        <div className="bg-[#3a5ca8] rounded-full shadow-lg p-3 mb-2">
          <FaCheckCircle className="text-white text-3xl" aria-hidden="true" />
        </div>
        <h2 className="text-4xl font-extrabold text-center text-white mb-2 tracking-tight drop-shadow">1-on-1 Personalised Style Suggestions</h2>
        <p className="text-lg text-blue-100 text-center max-w-xl">My family has been in the men’s fashion business for over 20 years — from retail clothing stores to customised designing studios. I’ve been learning from them every single day and combining that knowledge with everything I study from the best resources available.</p>
      </div>
      <div className="flex flex-col gap-8 px-6 md:px-12 py-8">
        <h3 className="text-2xl font-semibold text-blue-100 mb-2 text-center">Here’s how I can add value to your style journey:</h3>
        <ul className="flex flex-col gap-6">
          {valuePoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 bg-blue-900/20 rounded-xl p-4 shadow-sm border border-blue-900/10">
              <span className="text-blue-200">{point.icon}</span>
              <div>
                <span className="font-semibold text-white text-lg">{point.title}</span>
                <p className="text-blue-100 text-base mt-1">{point.description}</p>
              </div>
            </li>
          ))}
        </ul>
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

export default BookYourSlot;
