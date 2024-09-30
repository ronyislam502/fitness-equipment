import { TProduct } from "../types";

export const getUniqueCategoriesByName = (products: TProduct[]) => {
  const categories = products.map((product) => product.category);
  return [...new Set(categories)];
};