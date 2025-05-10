export interface SearchResult {
	id?: string | number;
	name?: string;
	type?: 'dish' | 'restaurant';
	image?: string;
}

export type SearchResultsArray = SearchResult[];
