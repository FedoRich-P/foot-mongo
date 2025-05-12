import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { ComponentType, SVGProps } from 'react';

type Props = {
	title: string;
	amount: number;
	Icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export function SummaryDetailsElement({ title, amount, Icon = CurrencyDollarIcon }: Props) {
	return (
		<li className="flex justify-between text-gray-600">
			<h5 className="font-medium">{title}</h5>
			<span className="flex items-center gap-2">
				{amount.toFixed(2)}
				<Icon
					className="w-6 h-6"
					aria-hidden="true"
				/>
			</span>
		</li>
	);
}
