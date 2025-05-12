import type { CartState } from '@store/types';

const STORAGE_KEY = 'cartState';

export const saveCartToLocalStorage = (state: CartState) => {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	} catch (error) {
		console.error('Ошибка при сохранении корзины:', error);
	}
};

export const loadCartFromLocalStorage = (): CartState | undefined => {
	try {
		const data = localStorage.getItem(STORAGE_KEY);
		if (data) {
			return JSON.parse(data) as CartState;
		}
	} catch (error) {
		console.error('Ошибка при загрузке корзины:', error);
	}
	return undefined;
};
