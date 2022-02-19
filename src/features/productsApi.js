 import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 
 
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://safe-woodland-39719.herokuapp.com/' }),
  endpoints: (builder) => ({
   getAllProducts: builder.query({
      query: () => `trimmers`,
    }),
  }),
}) 
 
export const { useGetAllProductsQuery } = productsApi