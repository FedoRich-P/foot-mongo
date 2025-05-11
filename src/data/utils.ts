import type { Restaurant } from '../pades/Restaurants/restaurantsTypes.ts';
import { restaurantData } from '../pades/Restaurants/constants.ts';
import type { MenuCategories } from '../pades/RestaurantMenu/resturantMenuTypes.ts';
import { menuCategories } from '../pades/RestaurantMenu/constants.ts';

export const getRestaurantById = (id: number): Restaurant | undefined => {
	return restaurantData.find((restaurant) => restaurant.id === id);
};

export const getMenuForRestaurant = (id: number): MenuCategories => {
	return menuCategories[id] || [];
};
