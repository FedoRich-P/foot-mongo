import type { MenuItem } from '../pades/RestaurantMenu/resturantMenuTypes.ts';

export type SearchOptions = {
	query: string;
};

export type FoodItem = {
	description: string;
	restaurantId?: string;
	restaurantName?: string;
} & MenuItem;

export type FoodItems = FoodItem[];
