export type MenuItem = {
	id: number;
	name: string;
	description?: string;
	price: number;
	image: string;
	rating: number;
	discount?: number;
	favorite?: boolean;
};

export type MenuItems = MenuItem[];

export type MenuCategory = {
	id: number;
	name: string;
	items: MenuItems;
};

export type MenuCategories = MenuCategory[];
