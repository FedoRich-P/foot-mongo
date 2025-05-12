import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { RatingStars } from '@components/common/Rating';
import type { MenuCategories } from '@components/Restaurants/resturantMenuTypes';
import type { Restaurant } from '@components/Restaurants/restaurantsTypes';
import { getMenuForRestaurant, getRestaurantById } from '@/data/utils';
import { RestaurantMenuCategory } from '@components/RestaurantMenu/RestaurantMenuCategory';
import { RestaurantInfo } from '@components/RestaurantMenu/RestaurantInfo';
import { ButtonGoBack } from '@components/ButtonGoBack';

export const RestaurantMenu = () => {
	const { id } = useParams();

	const [restaurant, setRestaurant] = useState<Restaurant>();
	const [menuCategories, setMenuCategories] = useState<MenuCategories>([]);

	useEffect(() => {
		const data = getRestaurantById(Number(id));
		if (data) {
			setRestaurant(data);
			const menuData = getMenuForRestaurant(Number(id));
			setMenuCategories(menuData);
		}
	}, [id]);

	return (
		<section className="pb-8">
			{restaurant && (
				<>
					<div className="h-64 w-full rounded-lg overflow-hidden mb-6 relative">
						<img
							src={restaurant?.image}
							alt={restaurant?.name}
							className="w-full h-full object-cover"
						/>
						<div className="absolute flex bottom-5 p-4 gap-1 flex-col">
							<h1 className="text-3xl text-white font-bold mb-2">{restaurant?.name}</h1>
							<div className="flex items-center gap-2 mb-2">
								<div className="flex">
									<RatingStars rating={restaurant?.rating} />
								</div>
								<span className="text-white">
									{restaurant.rating} ({restaurant.ratingCount} reviews)
								</span>
							</div>
							<div className="flex items-center gap-4">
								<span className="text-white">{restaurant.cuisineType}</span>
								<span className="text-white">•</span>
								<span className="text-white">{restaurant.priceRange}</span>
							</div>
						</div>
					</div>
					<RestaurantInfo {...restaurant} />
					<ButtonGoBack />
					{menuCategories?.map((category) => (
						<RestaurantMenuCategory
							restaurantId={String(restaurant.id)}
							restaurantName={restaurant.name}
							{...category}
							key={category.id}
						/>
					))}
				</>
			)}
		</section>
	);
};
