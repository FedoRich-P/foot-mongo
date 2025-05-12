export type SummaryDetail = {
	title: string;
	field: 'totalAmount' | 'serviceCharge' | 'deliveryFee';
};

export const summaryDetailsConfig: SummaryDetail[] = [
	{ title: 'Subtotal', field: 'totalAmount' },
	{ title: 'Service Fee', field: 'serviceCharge' },
	{ title: 'Delivery Fee', field: 'deliveryFee' },
];
