import { Categories } from '../../components/Categories/Categories.tsx';
import { PopularDish } from '../../components/PopularDish/PopularDish.tsx';

export function Dashboard() {
	return (
		<section className="py-4 md:w-full">
			<h1 className="sr-only">Food delivery service - main page</h1>
			<article className="rounded-lg p-2 mb-8 bg-main-bg flex items-stretch relative overflow-hidden fallback-bg">
				<img
					src={'/images/banner_2.png'}
					alt="Discount offer"
					className="absolute inset-0 w-full h-full object-cover object-right"
				/>
				<div className="relative z-10 p-8 md:max-w-md flex flex-col justify-center">
					<h2 className="text-2xl font-bold text-white mb-2">Get Discount Voucher</h2>
					<h3 className="text-xl font-bold text-white mb-4">Up To 20%</h3>
					<p className="text-white text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<button
						aria-label="Upgrade to get discount"
						className="bg-white font-bold uppercase text-sm py-2 px-4 rounded-md border-2 border-main-border transition duration-500 ease-in hover:bg-transparent hover:text-main-text self-start">
						Upgrade
					</button>
				</div>
			</article>
			<Categories />
			<PopularDish />
		</section>
	);
}
