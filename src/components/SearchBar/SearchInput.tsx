import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { type ChangeEvent } from 'react';

interface Props {
	value: string;
	placeholder: string;
	handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
	clearSearch: () => void;
}

export function SearchInput({ value, placeholder, handleSearchChange, clearSearch }: Props) {
	return (
		<form className="relative">
			<MagnifyingGlassIcon className="block w-8 h-full text-gray-400 absolute inset-y-0 left-0 pl-3 pointer-events-none" />
			<input
				type="text"
				className="bg-white max-w-80 w-full p-3 pl-10 pr-10 text-sm rounded-lg
             focus:outline-none focus:ring-2 focus:ring-primary"
				value={value}
				onChange={handleSearchChange}
				placeholder={placeholder}
			/>
			{value && (
				<button
					type="button"
					className="absolute inset-y-0 right-0 flex items-center pr-3"
					onClick={clearSearch}>
					<XMarkIcon className="w-5 h-5 text-gray-400" />
				</button>
			)}
		</form>
	);
}
