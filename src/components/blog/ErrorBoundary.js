import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { FiAlertCircle, FiRefreshCcw } from 'react-icons/fi';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to your error reporting service
    console.error('Blog error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <FiAlertCircle className="w-16 h-16 text-[#1e8e92] mx-auto" />
            <h2 className="text-2xl font-bold text-[#1e8e92]">
              Oops! Something went wrong
            </h2>
            <p className="text-[#545454] max-w-md mx-auto">
              We're sorry, but there was an error loading this content. 
              Please try refreshing the page or come back later.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center space-x-2 px-4 py-2 bg-[#1e8e92] text-white rounded-full hover:bg-[#f6911e] transition-colors"
              >
                <FiRefreshCcw />
                <span>Refresh Page</span>
              </button>
              <Link
                to="/blog"
                className="px-4 py-2 border-2 border-[#1e8e92] text-[#1e8e92] rounded-full hover:bg-[#1e8e92] hover:text-white transition-colors"
              >
                Return to Blog
              </Link>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 