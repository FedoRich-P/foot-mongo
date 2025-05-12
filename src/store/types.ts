export type CartItem = {
	id: string;
	name: string;
	price: number;
	quantity: number;
	image?: string;
};

export type RestaurantCart = {
	restaurantId: string;
	restaurantName: string;
	items: CartItem[];
	totalAmount: number;
};

export type CartState = {
	carts: RestaurantCart[];
	activeCartIndex: number | null;
};
