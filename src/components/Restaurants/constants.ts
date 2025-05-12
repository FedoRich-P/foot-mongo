import type { RestaurantsType } from './restaurantsTypes';

export const restaurantData: RestaurantsType = [
	{
		id: 1,
		name: 'Tasty Delights',
		image:
			'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
		rating: 5,
		ratingCount: 243,
		cuisineType: 'Italian',
		priceRange: '20$-100$',
		address: '123 Main Street, Anytown',
		distance: 2.5,
		deliveryTime: 25,
		minOrder: 15,
	},
	{
		id: 2,
		name: 'Burger Palace',
		image:
			'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
		rating: 4.5,
		ratingCount: 187,
		cuisineType: 'American',
		priceRange: '20$-100$',
		address: '456 Oak Avenue, Somewhere',
		distance: 1.8,
		deliveryTime: 20,
		minOrder: 10,
	},
	{
		id: 3,
		name: 'Sushi Express',
		image:
			'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
		rating: 4.7,
		ratingCount: 156,
		cuisineType: 'Japanese',
		priceRange: '50$-700$',
		address: '789 Pine Road, Elsewhere',
		distance: 3.2,
		deliveryTime: 35,
		minOrder: 20,
	},
	{
		id: 4,
		name: 'Taco Fiesta',
		image:
			'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
		rating: 4.3,
		ratingCount: 112,
		cuisineType: 'Mexican',
		priceRange: '50$-700$',
		address: '321 Maple Street, Nowhere',
		distance: 1.5,
		deliveryTime: 18,
		minOrder: 12,
	},
	{
		id: 5,
		name: 'Curry House',
		image:
			'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80',
		rating: 4.6,
		ratingCount: 203,
		cuisineType: 'Indian',
		priceRange: '50$-400$',
		address: '567 Cedar Lane, Somewhere Else',
		distance: 2.7,
		deliveryTime: 30,
		minOrder: 18,
	},
	{
		id: 6,
		name: 'Pizza Paradise',
		image:
			'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
		rating: 4.4,
		ratingCount: 178,
		cuisineType: 'Italian',
		priceRange: '20$-100$',
		address: '890 Birch Boulevard, Anywhere',
		distance: 2.0,
		deliveryTime: 22,
		minOrder: 15,
	},
];

export const cuisineData = [
	{ id: 1, name: 'All' },
	{ id: 2, name: 'Indian' },
	{ id: 3, name: 'American' },
	{ id: 4, name: 'Japanese' },
	{ id: 5, name: 'Mexican' },
	{
		id: 6,
		name: 'Italian',
	},
];

export const sortOptions = [
	{ id: 'rating', name: 'Rating (High to Low)' },
	{ id: 'deliveryTime', name: 'Delivery Time (Low to High)' },
	{ id: 'minOrder', name: 'Minimum Order (Low to High)' },
];

export type SelectTypes = 'rating' | 'deliveryTime' | 'minOrder';
