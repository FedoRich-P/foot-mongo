import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { CartItem } from '@store/types';

type Props = {
	item: CartItem;
};

export function CheckoutActiveElement({ item }: Props) {
	return (
		<li
			key={item.id}
			className="py-2 border-b-2 border-main-border last:border-b-0 flex justify-between">
			<div>
				<span className="font-medium">{item.quantity} x </span>
				<span>{item.name}</span>
			</div>
			<span className="font-medium flex items-center gap-2">
				{(item.price * item.quantity).toFixed(2)}
				<CurrencyDollarIcon className={'w-6 h-6'} />
			</span>
		</li>
	);
}
