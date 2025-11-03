import { motion } from 'framer-motion';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';

const TrustedDeveloper = () => {
  const features = [
    {
      icon: Shield,
      title: 'Fully Reviewed',
      description: 'Quality-assured through rigorous testing',
    },
    {
      icon: Award,
      title: 'Top Developer',
      description: 'Industry-leading expertise',
    },
    {
      icon: Users,
      title: 'Team of 50+',
      description: 'Experienced professionals',
    },
    {
      icon: TrendingUp,
      title: '100+ Projects',
      description: 'Successfully delivered worldwide',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
              
              {/* Image Placeholder */}
              <div className="relative glass rounded-3xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-cyan-900/30 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-24 h-24 mx-auto text-purple-400 opacity-50 mb-4" />
                    <p className="text-gray-400">Game Screenshot / Demo Video Here</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass px-6 py-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.9/5</div>
                    <div className="text-sm text-gray-400">Client Rating</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-semibold border border-purple-500/30">
                ✨ Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
                The Most Trusted{' '}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Developer In Gaming
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We combine cutting-edge technology with creative storytelling to deliver 
                exceptional gaming experiences that captivate millions of players worldwide.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 card-hover"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedDeveloper;