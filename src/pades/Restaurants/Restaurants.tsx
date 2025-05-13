import { useEffect, useState } from 'react';
import { cuisineData, restaurantData, type SelectTypes } from '@components/Restaurants/constants';
import type { CuisineFilter, CuisineFilters, RestaurantsType } from '@components/Restaurants/restaurantsTypes';
import { RestaurantCard } from '@components/Restaurants/RestaurantCard';
import { RestaurantBanner } from '@components/Restaurants/RestaurantBanner';
import { sortRestaurants } from '@shared/lib/sort/sortRestaurants';
import { RestaurantsFiltersButtons } from '@components/Restaurants/RestaurantsFiltersButtons';
import { RestaurantSelect } from '@components/Restaurants/RestaurantSelect';

export const Restaurants = () => {
	const [restaurants, setRestaurants] = useState<RestaurantsType>(restaurantData);
	const [cuisineFilters, setCuisineFilters] = useState<CuisineFilters>(cuisineData);
	const [activeCuisine, setActiveCuisine] = useState<CuisineFilter>(cuisineFilters[0]);
	const [activeSort, setActiveSort] = useState<SelectTypes>('rating');
	const [filteredRestaurants, setFilteredRestaurants] = useState<RestaurantsType>(restaurants);

	useEffect(() => {
		let results = [...restaurants];

		if (activeCuisine.id !== 1) {
			results = results.filter((restaurant) => restaurant.cuisineType === activeCuisine.name);
		}
		setFilteredRestaurants(sortRestaurants({ restaurants: results, sortBy: activeSort }));
	}, [restaurants, activeCuisine, activeSort]);

	return (
		<div className="pb-8">
			<RestaurantBanner
				title={'Discover Restaurants'}
				subtitle={'Find Your Favorite Food'}
				text={'Explore the best restaurants in your area with fast delivery and amazing food.'}
			/>

			<div className="mb-4 flex items-end justify-center flex-col xl:flex-row xl:items-center gap-4">
				<RestaurantsFiltersButtons
					buttons={cuisineFilters}
					setActiveCuisine={setActiveCuisine}
					activeId={activeCuisine.id}
				/>
				<RestaurantSelect
					activeSort={activeSort}
					setActiveSort={setActiveSort}
				/>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
				{filteredRestaurants?.map((restaurant) => (
					<RestaurantCard
						{...restaurant}
						key={restaurant.id}
					/>
				))}
			</div>
			{filteredRestaurants.length === 0 && (
				<div className="bg-white rounded-lg p-8 text-center">
					<h3 className="text-lg font-medium mb-2">No restaurants found</h3>
					<p className="text-gray-500">Try changing your filters or check back later for new restaurants.</p>
				</div>
			)}
		</div>
	);
};
