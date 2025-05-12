import { setActiveCart } from '@features/cart/cartSlice';
import { useAppDispatch } from '@store/hooks';
import { RestaurantCart } from '@store/types';

type Props = {
	carts: RestaurantCart[];
	activeIndex: number | null;
};

export function CartHeader({ carts, activeIndex }: Props) {
	const dispatch = useAppDispatch();
	return (
		<header className="mb-4">
			<h2 className="text-lg font-bold mb-2">Your Restaurant Carts</h2>
			<div className="flex flex-wrap gap-2">
				{carts.map((cart, index) => (
					<button
						key={cart.restaurantId}
						onClick={() => dispatch(setActiveCart(index))}
						className={`px-3 py-2 text-sm rounded-lg ${
							activeIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
						}`}>
						{cart.restaurantName}
					</button>
				))}
			</div>
		</header>
	);
}
