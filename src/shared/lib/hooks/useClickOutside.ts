import { type RefObject, useEffect, useRef } from 'react';

type Props = {
	ref: RefObject<HTMLElement | null>;
	callback: () => void;
};

export const useClickOutside = ({ ref, callback }: Props) => {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const handleClick = (e: MouseEvent | TouchEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				callbackRef.current();
			}
		};
		document.addEventListener('mousedown', handleClick);
		document.addEventListener('touchstart', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
			document.removeEventListener('touchstart', handleClick);
		};
	}, [ref]);
};
