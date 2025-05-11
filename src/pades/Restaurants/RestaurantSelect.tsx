import { type SelectTypes, sortOptions } from './constants.ts';
import type { ChangeEvent } from 'react';

interface Props {
	activeSort: SelectTypes;
	setActiveSort: (sort: SelectTypes) => void;
}

export function RestaurantSelect({ setActiveSort, activeSort }: Props) {
	function handleSetActiveSort(e: ChangeEvent<HTMLSelectElement>) {
		setActiveSort(e.target.value as SelectTypes);
	}

	return (
		<select
			className="bg-white border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
			value={activeSort}
			onChange={handleSetActiveSort}>
			{sortOptions?.map((option) => (
				<option
					key={option.id}
					value={option.id}>
					{option.name}
				</option>
			))}
		</select>
	);
}
