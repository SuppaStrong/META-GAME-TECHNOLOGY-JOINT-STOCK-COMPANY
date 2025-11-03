import { motion } from 'framer-motion';
import { Zap, Users2, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: 'Pixel-Wise',
      description: 'Every pixel is crafted with precision and attention to detail, ensuring stunning visuals that bring your game to life.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users2,
      title: 'Multiple Team',
      description: 'Our diverse teams of specialists work in perfect harmony to deliver comprehensive gaming solutions from concept to launch.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'High Standards',
      description: 'We maintain the highest quality standards through rigorous testing, ensuring bug-free, polished gaming experiences.',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            We deliver excellence through innovation, collaboration, and unwavering commitment to quality
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 card-hover">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow Indicator */}
                <div className="mt-6 flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;