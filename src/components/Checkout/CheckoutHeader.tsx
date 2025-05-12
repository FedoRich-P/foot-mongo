import { CheckoutHeaderElement } from '@components/Checkout/CheckoutHeaderElement';
import { PaymentMethod, paymentOptions } from '@components/Checkout/config/paymentOptions';

type Props = {
	paymentMethod: PaymentMethod;
	setPaymentMethod: (paymentMethod: PaymentMethod) => void;
};

export function CheckoutHeader({ paymentMethod, setPaymentMethod }: Props) {
	return (
		<header className="bg-white rounded-lg shadow-md p-6 my-2">
			<h2 className="text-xl font-bold mb-4">Payment Method</h2>
			<ul className="flex flex-wrap gap-4 mb-6">
				{paymentOptions.map((option) => (
					<CheckoutHeaderElement
						key={option.value}
						{...option}
						selected={paymentMethod}
						onSelect={setPaymentMethod}
					/>
				))}
			</ul>
			{paymentMethod === 'card' && <h2>Card </h2>}

			{paymentMethod === 'paypal' && (
				<div className="p-6 text-center">
					<p className="text-gray-600 mb-4">You will be redirected to PayPal to complete your payment.</p>
					<img
						src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
						alt="PayPal"
						className="mx-auto h-12"
					/>
				</div>
			)}

			{paymentMethod === 'cash' && (
				<div className="p-6 text-center">
					<p className="text-gray-600">Pay when your order is delivered. Please have the exact amount ready.</p>
				</div>
			)}
		</header>
	);
}
