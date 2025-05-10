import { createBrowserRouter } from 'react-router';
import { Layout } from '../components/Layout/Layout.tsx';
import { Dashboard } from '../pades/Dashboard/Dashboard.tsx';
import { PATHS } from './paths.ts';

export const router = createBrowserRouter([
	{
		path: PATHS.HOME,
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: PATHS.ERROR,
				element: <h1>Error...</h1>,
			},
		],
	},
]);

// export const PATHS = {
// 	HOME: '/',
// 	RESTAURANTS: '/restaurants',
// 	MESSAGES: '/messages',
// 	HISTORY: '/history',
// 	BILLS: '/bills',
// 	SETTINGS: '/settings',
// ERROR: '*',
// } as const;
