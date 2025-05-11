import { SearchBar } from '../SearchBar/SearchBar.tsx';

const userName = 'Pradeep';

export function Header() {
	return (
		<header className="flex justify-between md:items-center py-4 px-3 md:flex-row flex-col gap-4">
			<h2 className="text-xl font-bold">Hello, {userName}</h2>
			<SearchBar />
		</header>
	);
}
