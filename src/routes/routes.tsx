import { createBrowserRouter } from 'react-router';
import { Layout } from '@components/Layout/Layout';
import { Dashboard } from '@/pades/Dashboard/Dashboard';
import { PATHS } from './paths';
import { Restaurants } from '@/pades/Restaurants/Restaurants';
import { RestaurantMenu } from '@/pades/RestaurantMenu/RestaurantMenu';
import { Checkout } from '@/pades/Checkout/Checkout';

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
				path: PATHS.RESTAURANTS,
				element: <Restaurants />,
			},
			{
				path: PATHS.RESTAURANTS + '/:id',
				element: <RestaurantMenu />,
			},
			{
				path: PATHS.CHECKOUT,
				element: <Checkout />,
			},
			{
				path: PATHS.ERROR,
				element: <h1>Error...</h1>,
			},
		],
	},
]);
