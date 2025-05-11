import { useState } from 'react';
import type { FoodItems } from '../../types';
import { foodItems } from './foodItemsDB.ts';
import { SectionHeader } from '../SectionHeader/SectionHeader.tsx';
import { FoodCard } from '../FoodCard/FoodCard.tsx';

export const PopularDish = () => {
	const [popularItems, setPopularItems] = useState<FoodItems>(foodItems);

	// const handleDiskClick = (item: FoodItem) => {};

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
					/>
				))}
			</ul>
		</section>
	);
};
