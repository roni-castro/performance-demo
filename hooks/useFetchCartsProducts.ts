import { fetchPostsService } from '@/data/services/carts';
import { Cart } from '@/data/types/Cart';
import { useEffect, useState } from 'react';

const useFetchCartsProducts = () => {
  const [data, setData] = useState<Cart[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false); 

  const fetchCartsProducts = async (shouldRefresh = false) => {
    setIsFetching(true);
    
    if (shouldRefresh) {
      setIsRefreshing(true); 
      setData([]); 
      setPage(0); 
    }

    try {
      const result = await fetchPostsService(page, shouldRefresh);
      setData((prevData) => [...prevData, ...result.carts]); 
      setHasNextPage(result.carts.length > 0); 
      setPage((prevPage) => prevPage + 1); 
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
      setIsFetching(false);
      setIsRefreshing(false); 
    }
  };

  useEffect(() => {
    fetchCartsProducts(); 
  }, []); 

  return {
    data,
    error,
    fetchNextPage: () => fetchCartsProducts(), 
    refreshPosts: () => fetchCartsProducts(true), 
    hasNextPage,
    isFetching,
    isRefreshing, 
    status: loading ? 'loading' : error ? 'error' : 'success',
  };
};

export default useFetchCartsProducts;
