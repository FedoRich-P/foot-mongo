import type { Middleware } from '@reduxjs/toolkit';
import { saveCartToLocalStorage } from './cartStorage';
import type { CartState } from '@store/types';
import { cartSlice } from '@features/cart/cartSlice';

type LocalStorageState = {
	[key in typeof cartSlice.name]: CartState;
};

export const localStorageMiddleware: Middleware<{}, LocalStorageState> = (storeAPI) => (next) => (action) => {
	const result = next(action);
	const state = storeAPI.getState();
	saveCartToLocalStorage(state[cartSlice.name]);
	return result;
};
