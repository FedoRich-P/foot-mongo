import React from 'react';
import { SummaryDetailsElement } from '@components/Checkout/SummaryDetailsElement';
import { SummaryDetail, summaryDetailsConfig } from '@components/Checkout/config/summaryDetails';

type Props = {
	totalAmount: number;
	serviceCharge: number;
	deliveryFee: number;
};

export function CheckoutSummaryDetails(props: Props) {
	return (
		<ul className="space-y-2 mb-4 border-b-2 border-primary p-2">
			{summaryDetailsConfig.map(({ title, field }: SummaryDetail) => (
				<SummaryDetailsElement
					key={field}
					title={title}
					amount={props[field]}
				/>
			))}
		</ul>
	);
}
