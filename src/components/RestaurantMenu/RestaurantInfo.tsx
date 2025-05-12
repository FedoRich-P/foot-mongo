import { ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import type { Restaurant } from '../Restaurants/restaurantsTypes';

export const RestaurantInfo = (restaurant: Restaurant) => {
	return (
		<article className="bg-white rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6">
			<img
				src={restaurant.image}
				alt={restaurant.name}
				className="block object-cover w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
			/>
			<ul className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start flex-1">
				<li className="flex items-start gap-2">
					<MapPinIcon className="h-5 w-5 text-gray-500" />
					<div>
						<p className="text-sm text-gray-500">Address</p>
						<p className="font-medium">{restaurant.address}</p>
					</div>
				</li>
				<li className="flex items-start gap-2">
					<ClockIcon className="h-5 w-5 text-gray-500" />
					<div>
						<p className="text-sm text-gray-500">Delivery Time</p>
						<p className="font-medium">{restaurant.deliveryTime} min</p>
					</div>
				</li>
				<li className="flex items-center gap-2">
					<PhoneIcon className="h-5 w-5 text-gray-500" />
					<div>
						<p className="text-sm text-gray-500">Contact</p>
						<p className="font-medium">{restaurant?.phone}</p>
					</div>
				</li>
			</ul>
		</article>
	);
};
