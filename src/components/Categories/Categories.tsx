import { useState } from 'react';
import { foodCategoryItems, type FoodCategoryItems } from './categoryItemsDB';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { Link } from 'react-router';

export const Categories = () => {
	const [categories, setCategories] = useState<FoodCategoryItems>(foodCategoryItems);
	return (
		<section className="mb-8 border-b-1 border-primary pb-8">
			<SectionHeader
				label="Category"
				onClick={() => {}}
			/>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
				{categories?.map((category) => (
					<li
						key={category.id}
						className="bg-white rounded-lg">
						<Link
							to={'#'}
							className={'flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow'}>
							<img
								className="block h-8 w-8 test-3xl mb-2"
								src={`/images/${category.iconPath}`}
								alt={category.name}
								loading="lazy"
							/>
							<span className="text-sm">{category.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};
