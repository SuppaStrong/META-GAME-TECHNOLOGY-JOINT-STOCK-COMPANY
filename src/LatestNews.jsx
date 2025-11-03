import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Most Popular Arcade Ready Game',
      excerpt: 'Praesent vestibulum ipsum lorem, in convallis enim pellentesque in. Pellentesque dictum ex nec ultrices pretium. Etiam vestibulum.',
      image: 'https://logiclabslimited.com/wp-content/uploads/2024/12/93096a43-7ac6-4976-a1e3-ed9a9d0d3a31.png',
      date: 'October 18, 2024',
      readTime: '5 min read',
      category: 'Gaming News',
    },
    {
      title: "Let's Talk Tiles Expert Guideline",
      excerpt: 'Praesent vestibulum ipsum lorem, in convallis enim pellentesque in. Pellentesque dictum ex nec ultrices pretium. Etiam vestibulum.',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop',
      date: 'October 15, 2024',
      readTime: '7 min read',
      category: 'Development',
    },
    {
      title: 'Roblox Coming Ps5',
      excerpt: 'Praesent vestibulum ipsum lorem, in convallis enim pellentesque in. Pellentesque dictum ex nec ultrices pretium. Etiam vestibulum.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
      date: 'October 12, 2024',
      readTime: '6 min read',
      category: 'Platform News',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
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
            📰 Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            Latest{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              News & Insights
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and stories from the gaming industry
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-3xl overflow-hidden card-hover h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                      {post.category}
                    </span>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <button className="flex items-center space-x-2 text-purple-400 font-semibold group-hover:space-x-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>
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
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;