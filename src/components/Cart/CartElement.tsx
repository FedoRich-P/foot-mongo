import { XMarkIcon } from '@heroicons/react/24/outline';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useCartHandlers } from '@components/Cart/useCartHandlers';
import { CartItem, RestaurantCart } from '@store/types';

type Props = {
	item: CartItem;
	activeCart: RestaurantCart | null;
};

export function CartElement({ item, activeCart }: Props) {
	const { increase, decrease, removeAll } = useCartHandlers();

	return (
		<li
			key={item.id}
			className="flex gap-4 border-b border-main-border py-4">
			<img
				src={item.image}
				alt={item.name}
				className="min-h-full w-[90px] object-cover object-center rounded-lg"
			/>
			<div className="flex-1 flex flex-col">
				<button
					className={
						'self-end text-red-800 p-1 border border-red-500 rounded-md flex justify-center items-center cursor-pointer transition-all duration-500 hover:bg-red-700 hover:text-main-text'
					}
					onClick={() => removeAll(activeCart, item.id)}>
					<XMarkIcon className={'w-4 h-4'} />
				</button>
				<h3 className="font-medium text-lg line-clamp-1">{item.name}</h3>
				<div className="flex items-center w-full justify-around">
					<button
						onClick={() => decrease(activeCart, item.id)}
						className="p-1 flex justify-center items-center bg-gray-200 text-gray-600 rounded-md hover:text-main-text hover:bg-gray-400 cursor-pointer transition-all duration-500">
						<MinusIcon className={'w-6 h-6'} />
					</button>
					<span className="mx-2 p-2">{item.quantity}</span>
					<button
						onClick={() => increase(activeCart, item.id)}
						className="p-1 flex justify-center items-center bg-primary border border-primary text-main-text rounded-md hover:bg-main-text hover:text-primary cursor-pointer transition-all duration-500">
						<PlusIcon className={'w-6 h-6'} />
					</button>
				</div>
			</div>
		</li>
	);
}
