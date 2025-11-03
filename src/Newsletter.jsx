import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wIDhoLTJ2LTJoMnYyem00IDBoLTJ2LTJoMnYyem00LTRoLTJ2LTJoMnYyem00LTRoLTJ2LTJoMnYyem00LTRoLTJ2LTJoMnYyem00IDRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>

            {/* Content */}
            <div className="relative glass rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10">
              <div className="text-center mb-8">
                {/* Icon */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block mb-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Join Our{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Newsletter
                  </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Get the latest updates, exclusive content, and special offers delivered straight to your inbox
                </p>
              </div>

              {/* Subscription Form */}
              <form className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                  >
                    <span>Subscribe</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Privacy Notice */}
                <p className="text-center text-sm text-gray-500 mt-4">
                  🔒 We respect your privacy. Unsubscribe at any time.
                </p>
              </form>

              {/* Features */}
              <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                {[
                  { icon: '📧', text: 'Weekly Updates' },
                  { icon: '🎮', text: 'Game Insights' },
                  { icon: '🎁', text: 'Exclusive Offers' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <div className="text-gray-300 font-medium">{feature.text}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;