import type { RestaurantsType } from '../../../pades/Restaurants/restaurantsTypes.ts';

interface Props {
	restaurants: RestaurantsType;
	sortBy: string;
}

export const sortRestaurants = ({ restaurants, sortBy }: Props) => {
	const sorted = [...restaurants];

	switch (sortBy) {
		case 'rating':
			return sorted.sort((a, b) => b.rating - a.rating);
		case 'deliveryTime':
			return sorted.sort((a, b) => a.deliveryTime - b.deliveryTime);
		case 'minOrder':
			return sorted.sort((a, b) => a.minOrder - b.minOrder);
		default:
			return sorted;
	}
};
