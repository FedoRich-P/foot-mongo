interface FoodCategoryItem {
	id: number;
	name: string;
	iconPath: string;
}

export type FoodCategoryItems = FoodCategoryItem[];

export const foodCategoryItems: FoodCategoryItem[] = [
	{ id: 1, name: 'Bakery', iconPath: 'baked.png' },
	{ id: 2, name: 'Burger', iconPath: 'burger.png' },
	{ id: 3, name: 'Beverage', iconPath: 'coffee.png' },
	{ id: 4, name: 'Chicken', iconPath: 'chicken.png' },
	{ id: 5, name: 'Pizza', iconPath: 'fast.png' },
	{ id: 6, name: 'Seafood', iconPath: 'fish.png' },
];
