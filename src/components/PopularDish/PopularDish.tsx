import { useState } from 'react';
import type { FoodItem, FoodItems } from '@/types';
import { foodItems } from './foodItemsDB';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { FoodCard } from '../FoodCard/FoodCard';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { MenuItem } from '@components/Restaurants/resturantMenuTypes';
import { addItem, selectCarts } from '@features/cart/cartSlice';

export const PopularDish = () => {
	const [popularItems, setPopularItems] = useState<Omit<MenuItem, 'description'>[]>(foodItems);

	const carts = useAppSelector(selectCarts);

	const dispatch = useAppDispatch();

	function handleSubmit(values: FoodItem) {
		dispatch(
			addItem({
				item: { ...values, id: values.id.toString(), quantity: 1 },
				restaurantId: 'Popular Dishes',
				restaurantName: 'Popular Dishes',
			}),
		);
	}

	return (
		<section className="mb-8 border-b-1 border-primary pb-8">
			<SectionHeader
				label="Popular Dishes"
				onClick={() => {}}
			/>
			<ul className="grid xl:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-6 grid-auto-rows: 1fr">
				{popularItems?.map((item) => (
					<FoodCard
						key={item.id}
						item={item}
						addItem={handleSubmit}
					/>
				))}
			</ul>
		</section>
	);
};
