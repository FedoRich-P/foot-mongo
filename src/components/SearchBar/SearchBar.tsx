import { type ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { SearchInput } from './SearchInput';
import type { SearchResult, SearchResultsArray } from './searchTypes';
import { SearchResults } from './SearchResults';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { useClickOutside } from '@shared/lib/hooks/useClickOutside';
import type { SearchOptions } from '@/types';
import { searchAPI } from '@/api/search/search';

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

	const debouncedValue = useDebounce(value, 300);

	const handleSearchChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setValue(e.target.value);
	}, []);

	useEffect(() => {
		if (debouncedValue.length > 2) {
			setIsSearching(true);
			setShowResults(true);
			const searchReq: SearchOptions = { query: value };
			searchAPI(searchReq).then((res) => {
				setResults(res);
				setIsSearching(false);
			});
		} else {
			setResults([]);
		}
	}, [debouncedValue]);

	useClickOutside({ ref: searchRef, callback: () => setShowResults(false) });

	const handleResultClick = (result: SearchResult) => {
		clearSearch();
		console.log(result);
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
