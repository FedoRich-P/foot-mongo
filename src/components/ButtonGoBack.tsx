import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router';

type Props = {
	title?: string;
};

export function ButtonGoBack({ title = 'Go Back' }: Props) {
	const navigate = useNavigate();

	const handleGoBack = () => {
		if (window.history.length > 1) {
			navigate(-1);
		} else {
			navigate('/', { replace: true });
		}
	};
	return (
		<button
			onClick={handleGoBack}
			className={'btn-secondary'}>
			<ArrowLeftCircleIcon className={'w-9 h-9 text-inherit'} />
			{title}
		</button>
	);
}
