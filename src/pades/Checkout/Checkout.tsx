import React, { useState } from 'react';
import { useAppSelector } from '@store/hooks';
import { selectActiveCartIndex, selectCarts } from '@features/cart/cartSlice';
import { Address } from '@components/Address/Address';
import { CheckoutHeader } from '@components/Checkout/CheckoutHeader';
import { PaymentMethod } from '@components/Checkout/config/paymentOptions';
import { useCheckoutSubmit } from '@components/Checkout/useCheckoutHandler';
import { CheckoutSummaryDetails } from '@components/Checkout/CheckoutSummaryDetails';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { CheckoutActiveElement } from '@components/Checkout/CheckoutActiveElement';
import { UserInfo } from '@components/UserInfo';

const serviceCharge = 5.0;
const deliveryFee = 2.5;

export const Checkout = () => {
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
	const carts = useAppSelector(selectCarts);
	const activeCartIndex = useAppSelector(selectActiveCartIndex);

	const { isProcessing, total, handleSubmit } = useCheckoutSubmit({
		paymentMethod,
		serviceCharge,
		deliveryFee,
	});

	const activeCart = activeCartIndex != null ? carts[activeCartIndex] : null;

	const totalAmount = activeCart?.totalAmount ?? 0;

	return (
		<div className="p-2 md:p-4">
			<h1 className="text-2xl font-bold mb-6">Checkout</h1>
			<UserInfo
				name={'Alex'}
				phone={'89261234567'}
			/>
			<div className="grid grid-cols-1 gap-4">
				<CheckoutHeader
					paymentMethod={paymentMethod}
					setPaymentMethod={setPaymentMethod}
				/>
				<Address
					address={{ city: 'Moscow', apartment: '101', street: 'Lenina', building: '1', entrance: '7' }}
					onChange={() => {}}
					className={'bg-white rounded-lg shadow-md p-6 my-2'}
				/>

				<div className="bg-white rounded-lg shadow-md p-6 my-2 flex flex-col gap-2">
					<h2 className="text-xl font-bold mb-4">Order Summary</h2>
					<h3 className="font-medium text-gray-700 mb-2">{activeCart?.restaurantName}</h3>

					<ul className="max-h-60 overflow-y-auto border-b-2 border-primary p-3">
						{activeCart?.items?.map((item) => (
							<CheckoutActiveElement
								key={item.id}
								item={item}
							/>
						))}
					</ul>
					<CheckoutSummaryDetails
						serviceCharge={serviceCharge}
						deliveryFee={deliveryFee}
						totalAmount={totalAmount}
					/>
					<div className="flex justify-between font-bold mb-5">
						<span>Total</span>
						<span className={'flex items-center gap-2'}>
							{total.toFixed(2)} <CurrencyDollarIcon className={'w-6 h-6'} />
						</span>
					</div>

					<button
						onClick={handleSubmit}
						disabled={isProcessing}
						className={`py-3 px-7 rounded-md text-lg font-medium self-end ${
							isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-amber-400'
						}`}>
						{isProcessing ? 'Processing....' : 'Place Order'}
					</button>
				</div>
			</div>
		</div>
	);
};
