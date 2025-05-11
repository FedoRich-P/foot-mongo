import type { FoodItems } from '../../types';

export const foodItems: FoodItems = [
	{
		id: 1,
		name: 'Burger',
		price: 8.59,
		image: 'https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900',
		rating: 3,
		discount: 25,
		favorite: true,
	},
	{
		id: 2,
		name: 'Double Patty Burger',
		price: 5.59,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvBSYpdrmjC6s63P5oWgTiU4gPl36dkdVfQ&s',
		rating: 5,
		discount: 5,
		favorite: true,
	},
	{
		id: 3,
		name: 'Cheese Burger',
		price: 7.59,
		image: 'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger.jpg',
		rating: 4,
		discount: 15,
	},
];
