import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { loadCartFromLocalStorage } from './lib/cartStorage';
import { CartItem, CartState, RestaurantCart } from '@store/types';

const initialState: CartState = loadCartFromLocalStorage() || {
	carts: [],
	activeCartIndex: null,
};

const calculateTotalAmount = (items: CartItem[]) =>
	items.reduce((total, item) => item && total + item.price * item.quantity, 0);

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (
			state,
			action: PayloadAction<{
				item: CartItem;
				restaurantId: string;
				restaurantName: string;
			}>,
		) => {
			const { item, restaurantId, restaurantName } = action.payload;
			const cartIndex = state.carts.findIndex((cart) => cart.restaurantId === restaurantId);

			if (cartIndex >= 0) {
				const itemIndex = state.carts[cartIndex].items.findIndex((cartItem) => cartItem.id === item.id);
				if (itemIndex >= 0) {
					state.carts[cartIndex].items[itemIndex].quantity++;
				} else {
					state.carts[cartIndex].items.push({ ...item, quantity: 1 });
				}
				state.carts[cartIndex].totalAmount = calculateTotalAmount(state.carts[cartIndex].items);
				state.activeCartIndex = cartIndex;
			} else {
				const newCart: RestaurantCart = {
					restaurantId,
					restaurantName,
					items: [{ ...item, quantity: 1 }],
					totalAmount: item.price,
				};
				state.carts.push(newCart);
				state.activeCartIndex = state.carts.length - 1;
			}
		},

		removeItem: (state, action: PayloadAction<{ itemId: string; restaurantId: string }>) => {
			const { itemId, restaurantId } = action.payload;
			const cartIndex = state.carts.findIndex((cart) => cart.restaurantId === restaurantId);

			if (cartIndex >= 0) {
				const itemIndex = state.carts[cartIndex].items.findIndex((item) => item.id === itemId);

				if (itemIndex >= 0) {
					const item = state.carts[cartIndex].items[itemIndex];

					if (item.quantity > 1) {
						item.quantity--;
					} else {
						state.carts[cartIndex].items.splice(itemIndex, 1);
					}

					state.carts[cartIndex].totalAmount = calculateTotalAmount(state.carts[cartIndex].items);

					if (state.carts[cartIndex].items.length === 0) {
						state.carts.splice(cartIndex, 1);
						state.activeCartIndex = state.carts.length > 0 ? 0 : null;
					}
				}
			}
		},

		removeItems: (state, action: PayloadAction<{ itemId: string; restaurantId: string }>) => {
			const { itemId, restaurantId } = action.payload;
			const cartIndex = state.carts.findIndex((cart) => cart.restaurantId === restaurantId);
			if (cartIndex >= 0) {
				const itemIndex = state.carts[cartIndex].items.findIndex((item) => item.id === itemId);
				state.carts[cartIndex].items.splice(itemIndex, 1);
			}
		},

		setActiveCart: (state, action: PayloadAction<number>) => {
			if (action.payload >= 0 && action.payload < state.carts.length) {
				state.activeCartIndex = action.payload;
			}
		},

		clearCart: (state, action: PayloadAction<string>) => {
			const restaurantId = action.payload;
			const cartIndex = state.carts.findIndex((cart) => cart.restaurantId === restaurantId);

			if (cartIndex >= 0) {
				state.carts.splice(cartIndex, 1);

				if (state.activeCartIndex === cartIndex) {
					state.activeCartIndex = state.carts.length > 0 ? 0 : null;
				}
			}
		},

		clearAllCarts: (state) => {
			state.carts = [];
			state.activeCartIndex = null;
		},
	},
});

export const { addItem, removeItem, setActiveCart, clearCart, clearAllCarts, removeItems } = cartSlice.actions;

export const selectCarts = (state: RootState) => state.cart.carts;
// export const selectRestaurantId = (state: RootState) => state.cart.carts;
// export const selectRestaurantName = (state: RootState) => state.cart.carts;
export const selectActiveCartIndex = (state: RootState) => state.cart.activeCartIndex;

export const cartReducer = cartSlice.reducer;
