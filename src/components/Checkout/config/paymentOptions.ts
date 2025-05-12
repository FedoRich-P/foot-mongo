import { BanknotesIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { ComponentType, SVGProps } from 'react';

export type PaymentOption = {
	value: PaymentMethod;
	label: string;
	Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const paymentOptions: PaymentOption[] = [
	{
		value: 'card',
		label: 'Credit/Debit Card',
		Icon: CreditCardIcon,
	},
	{
		value: 'paypal',
		label: 'PayPal',
		Icon: BanknotesIcon,
	},
	{
		value: 'cash',
		label: 'Cash on Delivery',
		Icon: BanknotesIcon,
	},
];

export type PaymentMethod = 'card' | 'paypal' | 'cash';
