import { CartsResponse } from '../types/Cart';

export const fetchPostsService = async (page: number, shouldRefresh: boolean): Promise<CartsResponse> => {
  try {
    const response = await fetch(`https://dummyjson.com/carts?limit=10&skip=${(shouldRefresh ? 0 : page) * 10}`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};