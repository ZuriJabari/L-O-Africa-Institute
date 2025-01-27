import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../utils/linkResolver";
import Layout from "../components/Layout";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import { format, parseISO } from "date-fns";

// Custom typography styles for the content
const contentStyles = {
  h2: "text-3xl font-serif font-bold mt-16 mb-6 text-gray-900",
  h3: "text-2xl font-serif font-bold mt-12 mb-4 text-gray-900",
  p: "text-xl leading-relaxed mb-8 font-serif text-gray-800 [&:first-of-type]:text-2xl [&:first-of-type]:leading-relaxed",
  a: "text-[#2bbecb] hover:text-[#1a8f9d] border-b border-[#2bbecb] hover:border-[#1a8f9d] transition-colors",
  blockquote: "border-l-4 border-gray-900 pl-6 py-1 my-12 text-2xl font-serif text-gray-800 italic",
  ul: "list-disc list-outside ml-6 mb-8 space-y-3 text-xl text-gray-800",
  ol: "list-decimal list-outside ml-6 mb-8 space-y-3 text-xl text-gray-800",
  img: "rounded-lg my-12 w-full cursor-zoom-in",
  figure: "my-12",
  figcaption: "mt-2 text-sm text-gray-600 italic",
};

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const shareIconHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

export const query = graphql`
  query BlogPostQuery($uid: String!) {
    prismicBlogPosts(uid: { eq: $uid }) {
      data {
        title
        excerpt
        author
        publish_date
        content {
          html
          text
        }
        featured_image {
          url
          alt
          copyright
        }
        author_picture {
          url
          alt
        }
        categories {
          category
        }
      }
    }
    allPrismicBlogPosts(
      sort: { data: { publish_date: DESC } }
      limit: 3
      filter: { uid: { ne: $uid } }
    ) {
      nodes {
        uid
        data {
          title
          excerpt
          author
          publish_date
          featured_image {
            url
            alt
          }
          categories {
            category
          }
        }
      }
    }
  }
`;

const BlogPage = ({ data }) => {
  const blog = data.prismicBlogPosts.data;
  const relatedPosts = data.allPrismicBlogPosts.nodes;
  
  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Image lightbox state
  const [lightboxImage, setLightboxImage] = useState(null);
  // Comments state
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [reactions, setReactions] = useState({
    '👏': 0,
    '❤️': 0,
    '🔥': 0,
    '💡': 0,
    '🎯': 0
  });
  const [userReaction, setUserReaction] = useState(null);
  const [readCount, setReadCount] = useState(0);

  useEffect(() => {
    // Exit intent detection
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !localStorage.getItem('newsletterShown')) {
        setShowNewsletterPopup(true);
        localStorage.setItem('newsletterShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  useEffect(() => {
    const articleId = data.prismicBlogPosts.uid;
    const storageKey = `article-views-${articleId}`;
    const sessionKey = `article-viewed-${articleId}`;
    
    // Get stored view count
    let viewCount = parseInt(localStorage.getItem(storageKey)) || 100; // Start with base count
    
    // Check if viewed in this session
    if (!sessionStorage.getItem(sessionKey)) {
      viewCount += 1;
      localStorage.setItem(storageKey, viewCount.toString());
      sessionStorage.setItem(sessionKey, 'true');
    }
    
    setReadCount(viewCount);

    // Load reactions from localStorage
    const savedReactions = localStorage.getItem(`article-reactions-${articleId}`);
    if (savedReactions) {
      setReactions(JSON.parse(savedReactions));
    }
    const savedUserReaction = localStorage.getItem(`user-reaction-${articleId}`);
    if (savedUserReaction) {
      setUserReaction(savedUserReaction);
    }
  }, [data.prismicBlogPosts.uid]);

  const handleReaction = (emoji) => {
    if (userReaction === emoji) {
      // Remove reaction
      const newReactions = {
        ...reactions,
        [emoji]: reactions[emoji] - 1
      };
      setReactions(newReactions);
      setUserReaction(null);
      localStorage.removeItem(`user-reaction-${data.prismicBlogPosts.uid}`);
      localStorage.setItem(`article-reactions-${data.prismicBlogPosts.uid}`, JSON.stringify(newReactions));
    } else {
      // Add new reaction and remove old if exists
      const newReactions = {
        ...reactions,
        [emoji]: reactions[emoji] + 1,
        ...(userReaction ? { [userReaction]: reactions[userReaction] - 1 } : {})
      };
      setReactions(newReactions);
      setUserReaction(emoji);
      localStorage.setItem(`user-reaction-${data.prismicBlogPosts.uid}`, emoji);
      localStorage.setItem(`article-reactions-${data.prismicBlogPosts.uid}`, JSON.stringify(newReactions));
    }
  };

  const calculateReadTime = (text) => {
    if (!text) return 0;
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const readTime = calculateReadTime(blog.content?.text);

  return (
    <Layout>
      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.img
              src={lightboxImage}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#2bbecb] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Share Icons */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="text-center mb-2">
          <span className="text-sm font-medium text-gray-500">Share</span>
        </div>
        {[
          { Button: TwitterShareButton, Icon: TwitterIcon, label: 'Twitter', color: '#1DA1F2' },
          { Button: FacebookShareButton, Icon: FacebookIcon, label: 'Facebook', color: '#4267B2' },
          { Button: LinkedinShareButton, Icon: LinkedinIcon, label: 'LinkedIn', color: '#0077b5' },
          { Button: WhatsappShareButton, Icon: WhatsappIcon, label: 'WhatsApp', color: '#25D366' }
        ].map((Share, index) => (
          <motion.div
            key={index}
            whileHover="hover"
            initial="rest"
            variants={shareIconHover}
            className="group relative"
          >
            <Share.Button
              url={typeof window !== 'undefined' ? window.location.href : ''}
              title={blog.title}
              className="block"
            >
              <motion.div
                whileHover={{ y: -2 }}
                className="relative"
              >
                <Share.Icon size={40} round bgStyle={{ fill: Share.color }} />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200"
                />
              </motion.div>
            </Share.Button>
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Share on {Share.label}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 transform rotate-45 w-2 h-2 bg-gray-900" />
            </div>
          </motion.div>
        ))}
        <motion.div 
          className="w-8 h-[1px] bg-gray-200 mx-auto my-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8 }}
        />
        <motion.div 
          className="text-center text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {readCount.toLocaleString()} reads
        </motion.div>
      </motion.div>

      {/* Newsletter Popup */}
      <AnimatePresence>
        {showNewsletterPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setShowNewsletterPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
              <h2 className="text-2xl font-serif font-bold mb-4">
                Don't miss out!
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to get the latest updates and exclusive content.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Handle newsletter signup
                  setShowNewsletterPopup(false);
                }}
                className="space-y-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#2bbecb] text-white rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.article 
        className="max-w-4xl mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        {/* Category Tag */}
        {blog.categories?.[0]?.category && (
          <motion.div 
            className="mb-4 flex justify-between items-center"
            variants={fadeIn}
          >
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              {blog.categories[0].category}
            </span>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span role="img" aria-label="views">👁️</span>
              <span>{readCount.toLocaleString()} reads</span>
            </div>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1 
          className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-gray-900"
          variants={fadeIn}
        >
          {blog.title}
        </motion.h1>

        {/* Summary Section */}
        {blog.excerpt && (
          <motion.div 
            className="relative my-8"
            variants={fadeIn}
          >
            <div className="border-b border-gray-300 py-6">
              <div className="text-xl md:text-2xl font-serif text-gray-700 leading-relaxed max-w-3xl">
                {blog.excerpt}
              </div>
            </div>
          </motion.div>
        )}

        {/* Share and Meta Info */}
        <motion.div 
          className="flex justify-between items-center mb-8"
          variants={fadeIn}
        >
          <div className="flex items-center gap-4">
            <motion.div 
              className="flex gap-4 items-center text-sm text-gray-500"
              variants={fadeIn}
            >
              <span>Words: {blog.content?.text?.split(/\s+/).length || 0}</span>
              <span>·</span>
              <span>Chapters: {blog.content?.text?.split('\n\n').length || 0}</span>
              <span>·</span>
              <span>{readTime} min read</span>
            </motion.div>
          </div>
          <motion.div 
            className="text-gray-600 text-sm"
            variants={fadeIn}
          >
            {format(parseISO(blog.publish_date), 'MMMM d, yyyy')}
          </motion.div>
        </motion.div>

        {/* Featured Image with lightbox */}
        {blog.featured_image?.url && (
          <motion.figure 
            className="mb-12 cursor-pointer -mx-[10%] relative"
            variants={fadeIn}
            onClick={() => setLightboxImage(blog.featured_image.url)}
          >
            <img 
              src={blog.featured_image.url}
              alt={blog.featured_image.alt || blog.title}
              className="w-full h-auto rounded-lg transition-transform hover:scale-[1.02]"
            />
            {(blog.featured_image.alt || blog.featured_image.copyright) && (
              <motion.figcaption 
                className="mt-2 text-sm text-gray-600 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {blog.featured_image.alt} {blog.featured_image.copyright && `(${blog.featured_image.copyright})`}
              </motion.figcaption>
            )}
          </motion.figure>
        )}

        {/* Content */}
        <motion.div 
          className="prose prose-lg max-w-none"
          variants={fadeIn}
        >
          {blog.content?.html && (
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ 
                __html: blog.content.html
                  // Add drop cap to first paragraph
                  .replace(
                    /<p>([^<])/i,
                    (match, firstLetter) => `<p><span style="font-size: 100px; font-family: serif; font-weight: bold; color: #2bbecb; float: left; margin-top: 4px; margin-right: 8px; line-height: 0.8; display: block;">${firstLetter}</span>`
                  )
                  // Add figcaption for images with alt text
                  .replace(
                    /<img([^>]*alt="([^"]*)"[^>]*)>/g,
                    (match, attributes, alt) => {
                      // Extract copyright if it exists in alt text (format: "caption (copyright)")
                      const captionMatch = alt ? alt.match(/^(.*?)(?:\s*\((.*?)\))?$/) : null;
                      const caption = captionMatch ? captionMatch[1] : alt;
                      const copyright = captionMatch ? captionMatch[2] : null;
                      
                      return `<figure class="my-12">
                        <img${attributes} class="w-full h-auto rounded-lg transition-transform hover:scale-[1.02] cursor-pointer mb-1">
                        ${caption ? `
                          <figcaption class="text-sm text-gray-600 italic">
                            ${caption}${copyright ? ` (${copyright})` : ''}
                          </figcaption>
                        ` : ''}
                      </figure>`;
                    }
                  )
              }}
            />
          )}
        </motion.div>

        {/* Reactions */}
        <motion.section 
          className="my-8 py-6 border-t border-b border-gray-200"
          variants={fadeIn}
        >
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-base font-medium text-gray-600">
              What did you think of this article?
            </h3>
            <div className="flex gap-6">
              {Object.entries(reactions).map(([emoji, count]) => (
                <motion.button
                  key={emoji}
                  className={`flex flex-col items-center gap-1 group ${
                    userReaction === emoji ? 'scale-110' : ''
                  }`}
                  onClick={() => handleReaction(emoji)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className={`text-4xl transition-transform group-hover:scale-110 cursor-pointer ${
                    userReaction === emoji ? 'grayscale-0' : 'grayscale'
                  }`}>
                    {emoji}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Author Information - Enhanced */}
        <motion.div 
          className="mt-8"
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
          }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {blog.author_picture?.url ? (
              <motion.img 
                src={blog.author_picture.url}
                alt={`${blog.author}`}
                className="w-12 h-12 rounded-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xl font-serif text-gray-400">
                  {blog.author?.[0] || 'A'}
                </span>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <motion.h3 
                className="font-serif font-bold text-base mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {blog.author}
              </motion.h3>
              <motion.p 
                className="text-sm text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {blog.author_bio || "Contributing Writer at the LéO Africa Institute"}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* End of Article Social Share */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200"
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
          }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex flex-col items-center gap-4"
            variants={staggerChildren}
          >
            <motion.h3 
              className="text-xl font-serif font-medium text-gray-900"
              variants={fadeIn}
            >
              Share this article
            </motion.h3>
            <motion.div 
              className="flex gap-4"
              variants={staggerChildren}
            >
              {[
                { Button: TwitterShareButton, Icon: TwitterIcon },
                { Button: FacebookShareButton, Icon: FacebookIcon },
                { Button: LinkedinShareButton, Icon: LinkedinIcon },
                { Button: WhatsappShareButton, Icon: WhatsappIcon }
              ].map((Share, index) => (
                <motion.div
                  key={index}
                  whileHover="hover"
                  initial="rest"
                  variants={shareIconHover}
                >
                  <Share.Button
                    url={typeof window !== 'undefined' ? window.location.href : ''}
                    title={blog.title}
                  >
                    <Share.Icon size={40} round />
                  </Share.Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Next/Previous Articles */}
        <motion.div 
          className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-200"
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
          }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
        >
          {relatedPosts[0] && (
            <Link 
              to={`/blog/${relatedPosts[0].uid}`}
              className="group"
            >
              <span className="text-sm text-gray-500">← Previous</span>
              <h3 className="font-serif font-bold group-hover:text-[#2bbecb] transition-colors">
                {relatedPosts[0].data.title}
              </h3>
            </Link>
          )}
          {relatedPosts[1] && (
            <Link 
              to={`/blog/${relatedPosts[1].uid}`}
              className="group text-right ml-auto"
            >
              <span className="text-sm text-gray-500">Next →</span>
              <h3 className="font-serif font-bold group-hover:text-[#2bbecb] transition-colors">
                {relatedPosts[1].data.title}
              </h3>
            </Link>
          )}
        </motion.div>

        {/* Tags */}
        {blog.categories?.length > 0 && (
          <motion.div 
            className="mt-12 pt-6 border-t border-gray-200"
            variants={fadeIn}
          >
            <div className="flex gap-2">
              {blog.categories.map((cat, index) => (
                <span 
                  key={index}
                  className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                >
                  {cat.category}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section 
            className="mt-16 pt-8 border-t border-gray-200"
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl font-serif font-bold mb-8"
              variants={fadeIn}
            >
              Latest
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerChildren}
            >
              {relatedPosts.map((post, index) => (
                <motion.div
                  key={post.uid}
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={`/blog/${post.uid}`}
                    className="group block"
                  >
                    {post.data.featured_image?.url && (
                      <motion.img 
                        src={post.data.featured_image.url}
                        alt={post.data.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    <motion.h3 
                      className="font-serif font-bold text-xl mb-2 group-hover:text-[#2bbecb]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {post.data.title}
                    </motion.h3>
                    <motion.div 
                      className="text-sm text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 * index }}
                    >
                      {format(parseISO(post.data.publish_date), 'MMMM d, yyyy')}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Newsletter Signup */}
        <motion.section 
          className="bg-gray-50 py-12 mt-16"
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="max-w-4xl mx-auto px-4 text-center"
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-2xl font-serif font-bold mb-4"
              variants={fadeIn}
            >
              Sign up to our newsletter
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-6"
              variants={fadeIn}
            >
              Will be used in accordance with our Privacy Policy
            </motion.p>
            <motion.form 
              className="flex gap-4 max-w-md mx-auto"
              variants={fadeIn}
            >
              <motion.input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2bbecb]"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button 
                type="submit"
                className="px-6 py-2 bg-[#2bbecb] text-white rounded-lg hover:bg-[#1a8f9d] focus:outline-none focus:ring-2 focus:ring-[#2bbecb]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.section>
      </motion.article>
    </Layout>
  );
};

export default BlogPage;
