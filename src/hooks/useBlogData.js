import { useState, useEffect } from 'react';

const useBlogData = (initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (filters = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Filter and process data
      let filteredData = [...initialData];
      
      // Apply filters
      if (filters.search) {
        filteredData = filteredData.filter(item => 
          item.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(filters.search.toLowerCase())
        );
      }

      if (filters.categories?.length) {
        filteredData = filteredData.filter(item =>
          item.categories.some(cat => 
            filters.categories.includes(cat.slug)
          )
        );
      }

      if (filters.tags?.length) {
        filteredData = filteredData.filter(item =>
          item.tags.some(tag => 
            filters.tags.includes(tag.slug)
          )
        );
      }

      setData(filteredData);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    fetchData,
  };
};

export default useBlogData; 