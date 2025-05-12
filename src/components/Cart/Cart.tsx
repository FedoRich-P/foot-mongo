import { useAppSelector } from '@store/hooks';
import { selectActiveCartIndex, selectCarts } from '@features/cart/cartSlice';
import { CartElement } from '@components/Cart/CartElement';
import { CartControl } from '@components/Cart/CartControl';
import { CartHeader } from '@components/Cart/CartHeader';

export function Cart() {
	const carts = useAppSelector(selectCarts);
	const activeCartIndex = useAppSelector(selectActiveCartIndex);

	const activeCart = activeCartIndex !== null ? carts[activeCartIndex] : null;
	return (
		<div className="m-2">
			{carts?.length > 1 && (
				<CartHeader
					carts={carts}
					activeIndex={activeCartIndex}
				/>
			)}
			<>
				<h2 className="text-lg font-bold">{activeCart ? `${activeCart.restaurantName} Cart` : 'Your Cart'}</h2>
				{activeCart?.items.length === 0 ? (
					<p className="text-gray-500">Your cart is empty</p>
				) : (
					<>
						{activeCart?.items?.map((item) => (
							<ul key={item.id}>
								<CartElement
									key={item.id}
									item={item}
									activeCart={activeCart}
								/>
							</ul>
						))}
						{carts?.length !== 0 && activeCart && <CartControl activeCart={activeCart} />}
					</>
				)}
			</>
		</div>
	);
}
