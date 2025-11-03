import { motion } from 'framer-motion';
import { Smartphone, Monitor, Tv, Gamepad2 } from 'lucide-react';

const Platforms = () => {
  const platforms = [
    {
      icon: Smartphone,
      name: 'Mobile',
      description: 'iOS & Android',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Monitor,
      name: 'Desktop',
      description: 'Windows & Mac',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Tv,
      name: 'Console',
      description: 'PlayStation & Xbox',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Gamepad2,
      name: 'VR/AR',
      description: 'Virtual Reality',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We Build Games For{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              This Platform
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cross-platform expertise to reach your audience wherever they play
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative glass p-8 rounded-3xl text-center hover:bg-white/10 transition-all duration-300">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`}></div>

                {/* Icon */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`w-24 h-24 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    <platform.icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                <p className="text-gray-400">{platform.description}</p>

                {/* Check Icon */}
                <div className="mt-6 flex justify-center">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300">Supporting 15+ platforms and counting</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Platforms;