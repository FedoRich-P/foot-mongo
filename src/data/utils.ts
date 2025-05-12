import type { Restaurant } from '@components/Restaurants/restaurantsTypes';
import { restaurantData } from '@components/Restaurants/constants';
import type { MenuCategories } from '@components/Restaurants/resturantMenuTypes';
import { menuCategories } from '@components/RestaurantMenu/constants';

export const getRestaurantById = (id: number): Restaurant | undefined => {
	return restaurantData.find((restaurant) => restaurant.id === id);
};

export const getMenuForRestaurant = (id: number): MenuCategories => {
	return menuCategories[id] || [];
};
