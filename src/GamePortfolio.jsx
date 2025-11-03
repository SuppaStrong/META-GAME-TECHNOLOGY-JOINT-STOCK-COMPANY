import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const GamePortfolio = () => {
  const games = [
    {
      title: 'Toy Pusher',
      category: 'Casual Game',
      image: 'https://logiclabslimited.com/wp-content/uploads/2024/12/93096a43-7ac6-4976-a1e3-ed9a9d0d3a31.png',
      rating: 4.8,
      downloads: '5M+',
    },
    {
      title: 'Dark Forest',
      category: 'Adventure RPG',
      image: 'https://logiclabslimited.com/wp-content/uploads/2024/12/0f4a54df-440a-4b5c-b0bf-8b17df0b612b.png',
      rating: 4.9,
      downloads: '3M+',
    },
    {
      title: 'Chain Hero',
      category: 'Puzzle Game',
      image: 'https://logiclabslimited.com/wp-content/uploads/2024/12/5278cbf9-0f98-4e82-990c-99d094331afe.png',
      rating: 4.7,
      downloads: '2M+',
    },
    {
      title: 'Monster Battle',
      category: 'Action Game',
      image: 'https://logiclabslimited.com/wp-content/uploads/2024/12/Items_Game3-copy-1.jpg',
      rating: 4.8,
      downloads: '4M+',
    },
    {
      title: 'Pool Master',
      category: 'Sports Game',
      image: 'https://logiclabslimited.com/wp-content/uploads/2024/12/toyPicker-01-copy-1.jpg',
      rating: 4.6,
      downloads: '1.5M+',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="portfolio">
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
            🎮 Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            Game{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our collection of award-winning games that have captivated millions of players worldwide
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl glass card-hover">
                {/* Game Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold flex items-center space-x-2 border border-white/30"
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Game Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">
                        {game.title}
                      </h3>
                      <p className="text-sm text-gray-400">{game.category}</p>
                    </div>
                    <div className="flex items-center space-x-1 bg-yellow-500/20 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold text-yellow-400">{game.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-400">Live</span>
                    </div>
                    <span className="text-sm font-semibold text-purple-400">{game.downloads} Downloads</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GamePortfolio;