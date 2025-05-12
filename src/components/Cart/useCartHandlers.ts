import { useAppDispatch } from '@store/hooks';
import { addItem, removeItem, removeItems, clearCart } from '@features/cart/cartSlice';
import { RestaurantCart } from '@store/types';

export const useCartHandlers = () => {
	const dispatch = useAppDispatch();

	const increase = (activeCart: RestaurantCart | null, id: string) => {
		if (!activeCart) return;

		const item = activeCart.items.find((item) => item.id === id);
		if (item) {
			dispatch(
				addItem({
					item: { ...item },
					restaurantId: activeCart.restaurantId,
					restaurantName: activeCart.restaurantName,
				}),
			);
		}
	};

	const decrease = (activeCart: RestaurantCart | null, id: string) => {
		if (!activeCart) return;

		dispatch(
			removeItem({
				itemId: id,
				restaurantId: activeCart.restaurantId,
			}),
		);
	};

	const removeAll = (activeCart: RestaurantCart | null, id: string) => {
		if (!activeCart) return;

		dispatch(
			removeItems({
				itemId: id,
				restaurantId: activeCart.restaurantId,
			}),
		);
	};

	const clearRestaurantCart = (restaurantId: string) => {
		dispatch(clearCart(restaurantId));
	};

	return {
		increase,
		decrease,
		removeAll,
		clearRestaurantCart,
	};
};
