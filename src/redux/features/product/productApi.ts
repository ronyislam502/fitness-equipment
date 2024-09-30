import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ category, searchTerm, sort, categories }) => {
        const params = new URLSearchParams();
        if (category) {
          params.append("category", category);
        }
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        if (sort) {
          params.append("sort", sort.sort);
        }
        if (categories && categories.length > 0) {
          params.append("category", categories);
        }
        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
    }),
    getSpecificProduct: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, product }) => {
        return {
          url: `/products/${id}`,
          method: "PATCH",
          body: product,
        };
      },
      invalidatesTags: ["product"],
    }),
    createProduct: builder.mutation({
      query: (product) => {
        return {
          url: "/products",
          method: "POST",
          body: product,
        };
      },
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSpecificProductQuery,
  useUpdateProductMutation,
  useCreateProductMutation,
  useDeleteProductMutation,
} = productApi;