import type { SearchOptions } from '../../types';
import { smartSearch } from '../../data/dimmy.ts';

export const searchAPI = async (query: SearchOptions) => {
	const res = smartSearch(query);
	return Promise.resolve(res);
};
