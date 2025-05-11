type Props = {
	src?: string;
	title?: string;
	subtitle?: string;
	text?: string;
};

export function RestaurantBanner(props: Props) {
	const { src = '/images/restaurants.avif', title, subtitle, text } = props;

	return (
		<article className="rounded-lg mb-8 flex items-center justify-between overflow-hidden relative">
			<img
				src={src}
				alt={`${title} banner`}
				className="h-48 w-full object-cover"
				loading="lazy"
			/>
			<div className="absolute p-8">
				<div className="max-w-md">
					<h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
					<h3 className="text-xl font-bold text-white mb-4">{subtitle}</h3>
					<p className="text-white text-sm mb-4">{text}</p>
				</div>
			</div>
		</article>
	);
}
