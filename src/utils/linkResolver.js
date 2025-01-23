// Handles the mapping of Prismic documents to URLs
export const linkResolver = (doc) => {
  // Handle null or undefined doc
  if (!doc) return '/';

  // Handle doc._meta structure (used in newer Prismic versions)
  if (doc._meta) {
    return `/blog/${doc._meta.uid}`;
  }

  // Handle doc.type structure (traditional Prismic structure)
  if (doc.type === 'blog_posts') {
    return `/blog/${doc.uid}`;
  }
  if (doc.type === 'publications') {
    return `/publications/${doc.uid}`;
  }

  // Handle doc.node structure (from GraphQL queries)
  if (doc.node) {
    return `/blog/${doc.node.uid}`;
  }

  // Default fallback
  return '/';
}; 