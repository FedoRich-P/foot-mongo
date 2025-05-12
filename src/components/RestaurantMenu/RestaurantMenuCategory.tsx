import type { MenuCategory } from '../Restaurants/resturantMenuTypes';
import { FoodCard } from '@components/FoodCard/FoodCard';
import { useAppDispatch } from '@store/hooks';
import type { FoodItem } from '@/types';
import { addItem } from '@features/cart/cartSlice';

interface RestaurantMenuCategory extends MenuCategory {
	restaurantId: string;
	restaurantName: string;
}

export const RestaurantMenuCategory = (category: RestaurantMenuCategory) => {
	const dispatch = useAppDispatch();

	function handleSubmit(values: FoodItem) {
		dispatch(
			addItem({
				item: { ...values, id: values.id.toString(), quantity: 1 },
				restaurantId: category.restaurantId,
				restaurantName: category.restaurantName,
			}),
		);
	}

	return (
		<div className="mb-8">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-bold">{category.name}</h2>
			</div>
			<ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
				{category.items?.map((item) => (
					<FoodCard
						key={item.id}
						item={item}
						addItem={handleSubmit}
					/>
				))}
			</ul>
		</div>
	);
};
