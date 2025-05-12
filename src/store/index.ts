import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, cartSlice } from '@features/cart/cartSlice';
import { localStorageMiddleware } from '@features/cart/lib/localStorageMiddleware';

export const store = configureStore({
	reducer: {
		[cartSlice.name]: cartReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
