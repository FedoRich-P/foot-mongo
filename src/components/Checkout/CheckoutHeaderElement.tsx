import { type ComponentType, SVGProps } from 'react';
import { PaymentMethod } from '@components/Checkout/config/paymentOptions';

type Props = {
	value: PaymentMethod;
	selected: PaymentMethod;
	onSelect: (value: PaymentMethod) => void;
	label: string;
	Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export function CheckoutHeaderElement({ value, selected, onSelect, label, Icon }: Props) {
	const isActive = value === selected;

	return (
		<li
			className={`flex-1 border rounded-lg p-4 cursor-pointer ${
				isActive ? 'border-primary bg-amber-50' : 'border-gray-200'
			}`}
			onClick={() => onSelect(value)}>
			<div className="flex items-center gap-3">
				<div
					className={`rounded-full w-5 h-5 border-2 flex items-center justify-center ${isActive ? 'border-amber-500' : ''}`}>
					{isActive && <div className="w-3 h-3 rounded-full bg-amber-500" />}
				</div>
				<Icon
					className="w-5 h-5 text-primary"
					aria-hidden="true"
				/>
				<span className="font-medium">{label}</span>
			</div>
		</li>
	);
}
