import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, GameCorp',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'META GAME TECHNOLOGY JOINT STOCK COMPANY transformed our vision into an incredible gaming experience. Their attention to detail and technical expertise is unmatched.',
      country: 'USA',
    },
    {
      name: 'Maria Garcia',
      role: 'Product Manager, PlayTech',
      image: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      text: 'Working with META GAME TECHNOLOGY JOINT STOCK COMPANY was seamless. They delivered beyond expectations and maintained excellent communication throughout.',
      country: 'Spain',
    },
    {
      name: 'Wei Chen',
      role: 'Founder, Dragon Games',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: 'The quality of work and dedication from META GAME TECHNOLOGY JOINT STOCK COMPANY is exceptional. Our game reached 5 million downloads in just 3 months!',
      country: 'China',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-cyan-900/5"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-semibold border border-purple-500/30">
            🌍 Global Reach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            Our Clients{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Around The World
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by companies worldwide to deliver exceptional gaming experiences
          </p>
        </motion.div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <div className="glass rounded-3xl p-8 md:p-12">
            {/* Simplified World Map with Points */}
            <div className="relative aspect-[2/1] flex items-center justify-center">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 800 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  {/* Simplified world continents */}
                  <path
                    d="M 50 100 Q 100 80, 150 100 T 250 100 Q 300 120, 350 100 L 350 150 Q 300 170, 250 150 T 150 150 Q 100 130, 50 150 Z"
                    fill="url(#mapGradient)"
                    opacity="0.3"
                  />
                  <path
                    d="M 400 120 Q 450 100, 500 120 T 600 120 L 600 180 Q 550 200, 500 180 T 400 180 Z"
                    fill="url(#mapGradient)"
                    opacity="0.3"
                  />
                  <path
                    d="M 650 140 Q 700 120, 750 140 L 750 200 Q 700 220, 650 200 Z"
                    fill="url(#mapGradient)"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* Client Location Points */}
              <div className="absolute inset-0">
                {[
                  { left: '20%', top: '40%' },
                  { left: '45%', top: '35%' },
                  { left: '75%', top: '45%' },
                  { left: '65%', top: '55%' },
                  { left: '30%', top: '60%' },
                ].map((pos, index) => (
                  <motion.div
                    key={index}
                    style={{ left: pos.left, top: pos.top }}
                    className="absolute"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="relative">
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Overlay */}
              <div className="relative grid grid-cols-3 gap-8 text-center">
                {[
                  { number: '50+', label: 'Countries' },
                  { number: '200+', label: 'Clients' },
                  { number: '10M+', label: 'Players' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 card-hover h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-purple-400 mb-4" />

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-purple-500/50"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-purple-400 mt-1">📍 {testimonial.country}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;