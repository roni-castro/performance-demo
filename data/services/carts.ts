import { CartsResponse } from "../types/Cart";

export const fetchPostsService = async (
  page: number,
): Promise<CartsResponse> => {
  try {
    const response = await fetch(
      `https://dummyjson.com/carts?limit=10&skip=${page * 10}`,
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    throw new Error(`Failed to fetch posts ${error.message}`);
  }
};
