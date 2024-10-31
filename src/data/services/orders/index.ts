import orders from "./orders.json";
import { delay } from "../helpers";

export const fetchOrdersService = async (page: number, limit: number = 10) => {
  try {
    const start = page * limit;
    const end = start + limit;
    const result = orders.slice(start, end);
    await delay(200);
    return {
      orders: result,
      total: orders.length,
      skip: start,
      limit,
    };
  } catch (error: any) {
    throw new Error(`Failed to fetch orders: ${error.message}`);
  }
};
