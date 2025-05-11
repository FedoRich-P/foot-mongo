export const renderStars = (rating: number) => {
	return (
		<ul className="flex flex-wrap">
			{Array.from({ length: 5 }, (_, index) => (
				<li
					key={index}
					className={`${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
					★
				</li>
			))}
		</ul>
	);
};
