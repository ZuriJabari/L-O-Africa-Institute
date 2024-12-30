import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

const BlogCard = ({ blog }) => {
  const image = getImage(blog.featuredImage?.localFile);
  const authorImage = getImage(blog.author?.photo?.localFile);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Featured Image */}
      {image && (
        <Link to={`/blog/${blog.slug}`} className="block relative">
          <GatsbyImage
            image={image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          {/* Categories Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {blog.categories.map(category => (
              <span 
                key={category.slug}
                className="text-xs px-3 py-1 bg-[#1e8e92] text-white rounded-full"
              >
                {category.name}
              </span>
            ))}
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h2 className="text-xl font-bold">
          <Link 
            to={`/blog/${blog.slug}`}
            className="text-[#1e8e92] hover:text-[#f6911e] transition-colors"
          >
            {blog.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-[#545454] text-sm line-clamp-3">
          {blog.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-sm text-[#545454]">
          <div className="flex items-center gap-2">
            <FiCalendar className="text-[#1e8e92]" />
            {new Date(blog.publishDate).toLocaleDateString()}
          </div>
          {blog.readingTime && (
            <div className="flex items-center gap-2">
              <FiClock className="text-[#1e8e92]" />
              {blog.readingTime} min read
            </div>
          )}
        </div>

        {/* Author */}
        <div className="flex items-center space-x-3 pt-4 border-t">
          {authorImage ? (
            <GatsbyImage
              image={authorImage}
              alt={blog.author.name}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#e5f7f9] flex items-center justify-center">
              <FiUser className="text-[#1e8e92]" />
            </div>
          )}
          <div>
            <p className="font-medium text-[#1e8e92]">{blog.author.name}</p>
            <p className="text-sm text-[#545454]">{blog.author.title}</p>
          </div>
        </div>

        {/* Tags */}
        {blog.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4">
            {blog.tags.map(tag => (
              <span 
                key={tag.slug}
                className="text-xs px-2 py-1 bg-[#e5f7f9] text-[#1e8e92] rounded-full"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default BlogCard; 