import type { MenuItem } from '@components/Restaurants/resturantMenuTypes';

export type SearchOptions = {
	query: string;
};

export type FoodItem = {
	description?: string;
	restaurantId?: string;
	restaurantName?: string;
} & MenuItem;

export type FoodItems = FoodItem[];
