"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Where do your products come from?",
    answer:
      "All our produce is sourced directly from trusted local farms. We ensure everything is naturally grown, fresh, and responsibly handled.",
  },
  {
    question: "Do you use chemicals or pesticides?",
    answer:
      "No! We only partner with farms that follow natural farming practices. All our products are free from harmful chemicals and pesticides.",
  },
  {
    question: "How do you deliver fresh produce?",
    answer:
      "We handle every order with care, packing and shipping products quickly to maintain freshness, directly from farm to your doorstep.",
  },
  {
    question: "What is your delivery timeframe?",
    answer:
      "Orders are usually processed within 24 hours and delivered within 2–5 business days depending on your location.",
  },
  {
    question: "Can I return or exchange produce?",
    answer:
      "Yes! If there is an issue with the quality of your order, you can contact us within 24 hours of delivery for a replacement or refund.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-16 lg:px-32 py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Everything you need to know before ordering fresh farm produce.
        </p>
      </div>

      {/* FAQ items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border rounded-xl bg-white "
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 font-medium text-left text-black"
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition"
        >
          Still have questions? Contact us
        </a>
      </div>
    </section>
  );
}
