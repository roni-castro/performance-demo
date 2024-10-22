import { fetchPostsService } from "@/data/services/carts";
import { Cart } from "@/data/types/Cart";
import { useCallback, useEffect, useRef, useState } from "react";

type Status = "idle" | "loading" | "error" | "success" | "refreshing";

const useFetchCartsProducts = () => {
  const [data, setData] = useState<Cart[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<Error | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const isFetching = status === "loading";
  const isRefreshing = status === "refreshing";
  const pageRef = useRef(0);

  const fetchCartsProducts = useCallback(async (shouldRefresh = false) => {
    setStatus("loading");

    if (shouldRefresh) {
      setStatus("refreshing");
      setData([]);
      pageRef.current = 0;
    }

    try {
      const result = await fetchPostsService(pageRef.current);
      setData((prevData) => [...prevData, ...result.carts]);
      setHasNextPage(result.carts.length > 0);

      if (result.carts.length > 0) {
        pageRef.current += 1;
      } else {
        setHasNextPage(false);
      }
      setStatus("success");
    } catch (err: any) {
      setError(err);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    fetchCartsProducts();
  }, [fetchCartsProducts]);

  return {
    data,
    error,
    fetchNextPage: () => {
      if (hasNextPage && !isFetching) {
        fetchCartsProducts();
      }
    },
    refreshPosts: () => fetchCartsProducts(true),
    hasNextPage,
    isFetching,
    isRefreshing,
    status,
  };
};

export default useFetchCartsProducts;
