import { useState, useCallback, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useNavigate } from 'react-router';
import { clearCart, selectActiveCartIndex, selectCarts } from '@features/cart/cartSlice';
import type { PaymentMethod } from './config/paymentOptions';

type UseCheckoutSubmitParams = {
	paymentMethod: PaymentMethod;
	serviceCharge: number;
	deliveryFee: number;
};

export const useCheckoutSubmit = (props: UseCheckoutSubmitParams) => {
	const { paymentMethod, serviceCharge, deliveryFee } = props;
	const [isProcessing, setIsProcessing] = useState(false);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const carts = useAppSelector(selectCarts);
	const activeCartIndex = useAppSelector(selectActiveCartIndex);
	const activeCart = activeCartIndex != null ? carts[activeCartIndex] : null;

	const total = (activeCart?.totalAmount ?? 0) + serviceCharge + deliveryFee;

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault();
			if (!activeCart) return;

			setIsProcessing(true);

			setTimeout(() => {
				setIsProcessing(false);

				const order = {
					...activeCart,
					id: `order-${Date.now()}`,
					paymentMethod,
					status: 'PENDING',
					timestamp: new Date().toISOString(),
					estimatedDelivery: new Date(Date.now() + 30 * 60000).toISOString(),
					total,
				};

				const existing = JSON.parse(localStorage.getItem('orders') || '[]');
				localStorage.setItem('orders', JSON.stringify([...existing, order]));

				dispatch(clearCart(activeCart.restaurantId));
				navigate(`/order-track/${order.id}`);
			}, 2000);
		},
		[activeCart, dispatch, navigate, paymentMethod, total],
	);

	return { isProcessing, total, handleSubmit };
};
