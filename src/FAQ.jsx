import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What game development services do you offer?',
      answer: 'We offer comprehensive game development services including concept design, 3D modeling, programming, UI/UX design, quality assurance, and post-launch support for mobile, desktop, console, and VR/AR platforms.',
    },
    {
      question: 'How long does it take to develop a game?',
      answer: 'Development time varies based on complexity and scope. A simple mobile game may take 3-6 months, while a complex AAA title can take 1-3 years. We provide detailed timelines during the initial consultation phase.',
    },
    {
      question: 'What is your development process?',
      answer: 'Our process includes: 1) Discovery & Planning, 2) Concept & Design, 3) Development & Testing, 4) Launch & Deployment, 5) Post-launch Support. We maintain transparent communication throughout each phase.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes! We offer comprehensive post-launch support including bug fixes, performance optimization, content updates, and feature additions to ensure your game continues to succeed in the market.',
    },
    {
      question: 'What platforms do you develop for?',
      answer: 'We develop for all major platforms including iOS, Android, Windows, Mac, PlayStation, Xbox, Nintendo Switch, and VR/AR devices like Oculus Quest and HTC Vive.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-semibold border border-purple-500/30">
              ❓ FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Have questions? We've got answers. If you can't find what you're looking for, feel free to contact our team.
            </p>

            {/* Decorative Element */}
            <div className="relative">
              <div className="glass p-6 rounded-2xl inline-block">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <HelpCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Still have questions?</div>
                    <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                      Contact Support →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - FAQ List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-start justify-between space-x-4"
                >
                  <span className="text-lg font-semibold pr-8">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {activeIndex === index ? (
                      <Minus className="w-6 h-6 text-purple-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;