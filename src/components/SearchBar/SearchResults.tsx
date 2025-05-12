import type { SearchResult, SearchResultsArray } from './searchTypes';

interface Props {
	value: string;
	isSearching: boolean;
	results: SearchResultsArray;
	handleResult: (result: SearchResult) => void;
}

export function SearchResults({ value, isSearching, results, handleResult }: Props) {
	return (
		<article className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
			{isSearching ? (
				<div className="p-4 text-center text-gray-500">Searching..</div>
			) : results?.length > 0 ? (
				<ul className="py-2">
					{results.map((result) => (
						<li
							key={`${result.type}-${result.id}`}
							className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
							onClick={() => handleResult(result)}>
							<div>
								<p className="font-medium">{result.name}</p>
								<p className="text-xs text-gray-500 capitalize">{result.type}</p>
							</div>
						</li>
					))}
				</ul>
			) : value.length > 2 ? (
				<div className="p-4 text-center text-gray-500">No results found for "{value}"</div>
			) : null}
		</article>
	);
}
