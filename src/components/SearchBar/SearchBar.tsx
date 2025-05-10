import { type ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { SearchInput } from './SearchInput.tsx';
import type { SearchResult, SearchResultsArray } from './searchTypes.ts';
import { SearchResults } from './SearchResults.tsx';

interface Props {
	placeholder?: string;
	className?: string;
}

export const SearchBar = (props: Props) => {
	const { placeholder = 'What do you want eat today...', className } = props;

	const [value, setValue] = useState('');
	const [results, setResults] = useState<SearchResultsArray>([]);
	const [isSearching, setIsSearching] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const searchRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const handleSearchChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const value = e.target.value;
		setValue(value);
		if (value.length > 2) {
			setIsSearching(true);
			setShowResults(true);

			// const searchReq: SearchOptions = { query: value };
			// const searchResults = await searchAPI(searchReq);
			// setResults(searchResults);
			// setIsSearching(false);
		} else {
			setResults([]);
		}
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
				setShowResults(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleResultClick = (result: SearchResult) => {
		clearSearch();
		if (result?.type === 'restaurant') {
			navigate(`/restaurants/${result?.id}`);
		} else if (result.type === 'dish') {
			// display modal or navigate to dish
		}
	};

	const clearSearch = () => {
		setValue('');
		setIsSearching(false);
		setResults([]);
	};

	return (
		<div
			className={`relative ${className}`}
			ref={searchRef}>
			<SearchInput
				value={value}
				placeholder={placeholder}
				handleSearchChange={handleSearchChange}
				clearSearch={clearSearch}
			/>
			{showResults && (
				<SearchResults
					results={results}
					value={value}
					isSearching={isSearching}
					handleResult={handleResultClick}
				/>
			)}
		</div>
	);
};
