import type { CuisineFilter, CuisineFilters } from './restaurantsTypes';

type Props = {
	buttons: CuisineFilters;
	activeId: number;
	setActiveCuisine: (filter: CuisineFilter) => void;
};

export function RestaurantsFiltersButtons({ buttons, activeId, setActiveCuisine }: Props) {
	return (
		<ul className="flex flex-nowrap gap-2 w-full overflow-y-auto pb-2">
			{buttons.map((filter) => (
				<li key={filter.id}>
					<button
						className={`btn-filters ${activeId === filter.id ? 'bg-primary text-white' : 'bg-white'}`}
						onClick={() => setActiveCuisine(filter)}>
						{filter.name}
					</button>
				</li>
			))}
		</ul>
	);
}
