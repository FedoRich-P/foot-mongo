import { StarIcon } from '@heroicons/react/24/solid';

type Props = {
	rating: number;
	className?: string;
};

export const RatingStars = ({ rating, className }: Props) => {
	return (
		<ul className={`flex items-center ${className}`}>
			{[...Array(5)].map((_, index) => {
				const filledPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;

				return (
					<li
						key={index}
						className="relative w-5 h-5">
						<StarIcon className="w-5 h-5 text-gray-300" />
						<span
							className="absolute top-0 left-0 overflow-hidden"
							style={{ width: `${filledPercentage}%` }}>
							<StarIcon className="w-5 h-5 text-yellow-400" />
						</span>
					</li>
				);
			})}
		</ul>
	);
};
