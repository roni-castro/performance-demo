import { fetchOrdersService } from "@/data/services/orders";
import { Order } from "@/data/types/Order";
import { useCallback, useEffect, useRef, useState } from "react";

type Status = "idle" | "loading" | "error" | "success" | "refreshing";

const useFetchOrdersProducts = () => {
  const [data, setData] = useState<Order[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<Error | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const isFetching = status === "loading";
  const isRefreshing = status === "refreshing";
  const pageRef = useRef(0);

  const fetchOrdersProducts = useCallback(async (shouldRefresh = false) => {
    setStatus("loading");

    if (shouldRefresh) {
      setStatus("refreshing");
      setData([]);
      pageRef.current = 0;
    }

    try {
      const result = await fetchOrdersService(pageRef.current);
      setData((prevData) => [...prevData, ...result.orders]);
      setHasNextPage(result.orders.length > 0);

      if (result.orders.length > 0) {
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
    fetchOrdersProducts();
  }, [fetchOrdersProducts]);

  return {
    data,
    error,
    fetchNextPage: () => {
      if (hasNextPage && !isFetching) {
        fetchOrdersProducts();
      }
    },
    refreshPosts: () => fetchOrdersProducts(true),
    hasNextPage,
    isFetching,
    isRefreshing,
    status,
  };
};

export default useFetchOrdersProducts;
