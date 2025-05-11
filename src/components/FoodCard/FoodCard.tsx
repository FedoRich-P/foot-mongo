import { HeartIcon, PlusIcon } from '@heroicons/react/24/solid';
import { RatingStars } from '../common/Rating.tsx';
import { Link } from 'react-router';
import type { FoodItem } from '../../types';

type Props = {
	item: FoodItem;
};

export function FoodCard({ item }: Props) {
	return (
		<li
			key={item.id}
			className={`flex flex-col bg-white rounded-lg relative hover:shadow-lg transition-all duration-300 ${item.description ? 'max-h-97' : 'max-h-75'}`}>
			{item.discount && (
				<span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-50">
					{item.discount}% off
				</span>
			)}
			<button
				className={`absolute top-2 right-2 text-gray-400 hover:text-red-500 z-50 ${item.favorite ? ' text-red-500' : ''}`}
				onClick={(e) => {
					e.stopPropagation();
					// Add item to favourites
				}}>
				<HeartIcon className="h-7 w-7 " />
			</button>
			<div className="h-[50%] flex justify-center mb-5 rounded-t-lg overflow-hidden fallback-bg">
				<img
					src={item.image}
					alt={item.name}
					loading="lazy"
					className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
				/>
			</div>
			<div className={'p-2 flex flex-col flex-1'}>
				<RatingStars
					rating={item.rating}
					className={'mb-2'}
				/>
				<Link to={'#'}>
					<h3 className="font-medium mb-4">{item.name}</h3>
				</Link>
				{item.description && <p className="text-gray-500 text-sm mb-3 text-center line-clamp-2">{item.description}</p>}
				<div className="flex justify-between items-center mt-auto">
					<span className="font-bold text-primary">${item.price?.toFixed(2)}</span>
					<button className="btn-popular-cart">
						buy now
						<PlusIcon className="h-6 w-6" />
					</button>
				</div>
			</div>
		</li>
	);
}
