import { CurrencyDollarIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import { RestaurantCart } from '@store/types';
import { useNavigate } from 'react-router';
import { useCartHandlers } from '@components/Cart/useCartHandlers';

type Props = {
	activeCart: RestaurantCart | null;
};

export function CartControl({ activeCart }: Props) {
	const { clearRestaurantCart } = useCartHandlers();
	const navigate = useNavigate();

	const serviceFee = 5;
	const total = activeCart?.totalAmount ? Number(activeCart?.totalAmount.toFixed(2)) + serviceFee : 0;

	return (
		<footer className="border-t border-gray-100 pt-4 mb-6 flex flex-col gap-3">
			<dl className="flex justify-between mb-2">
				<dt className="text-gray-500">Service</dt>
				<dd className="font-medium text-gray-700 inline-flex items-center gap-1">
					<PlusIcon className={'h-4 w-4'} />
					{serviceFee}
					<CurrencyDollarIcon className={'w-6 h-6'} />
				</dd>
			</dl>

			<dl className="flex justify-between mb-2">
				<dt className="text-gray-500">Total</dt>
				<dd className="font-medium text-gray-700 inline-flex items-center gap-1">
					{total}
					<CurrencyDollarIcon className={'w-6 h-6'} />
				</dd>
			</dl>

			<button
				className="w-full text-white py-2 rounded-md font-medium bg-primary border-2 border-primary hover:bg-main-text hover:text-primary transition-all duration-500 flex gap-4 items-center justify-center cursor-pointer"
				onClick={() => navigate('/checkout')}>
				Checkout
				<ShoppingCartIcon className={'w-6 h-6'} />
			</button>

			{activeCart && (
				<button
					onClick={() => clearRestaurantCart(activeCart.restaurantId)}
					className="w-full py-2 font-medium text-red-500 hover:text-red-700 flex gap-4 items-center justify-center border rounded-md p-1 cursor-pointer">
					Clear Cart
					<TrashIcon className={'w-6 h-6'} />
				</button>
			)}
		</footer>
	);
}
