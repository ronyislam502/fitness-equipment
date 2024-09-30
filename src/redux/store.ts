import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import categoryReducer from "./features/category/categorySlice";
import filterReducer from "./features/filter/filterSlice";
import cartReducer from "./features/cart/cartSlice"
import productReduce from './features/product/productSlice'
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "cart",
  storage,
};

const persistedItemsReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    category: categoryReducer,
    filters: filterReducer,
    cart: persistedItemsReducer,
    product: productReduce,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);