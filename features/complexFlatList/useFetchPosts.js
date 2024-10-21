import { useEffect, useState } from 'react';

const useFetchPosts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false); 

  const fetchPosts = async (shouldRefresh = false) => {
    setIsFetching(true);
    
    if (shouldRefresh) {
      setIsRefreshing(true); 
      setData([]); 
      setPage(0); 
    }

    try {
      const response = await fetch(`https://dummyjson.com/carts?limit=10&skip=${(shouldRefresh ? 0 : page) * 10}`);
      const result = await response.json();
      
      setData((prevData) => [...prevData, ...result.carts]); 
      setHasNextPage(result.carts.length > 0); 
      setPage((prevPage) => prevPage + 1); 
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      setIsFetching(false);
      setIsRefreshing(false); 
    }
  };

  useEffect(() => {
    fetchPosts(); 
  }, []); 

  return {
    data,
    error,
    fetchNextPage: () => fetchPosts(), 
    refreshPosts: () => fetchPosts(true), 
    hasNextPage,
    isFetching,
    isRefreshing, 
    status: loading ? 'loading' : error ? 'error' : 'success',
  };
};

export default useFetchPosts;
