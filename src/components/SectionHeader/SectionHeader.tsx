import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';

interface Props {
	label: string;
	onClick: () => void;
}

export const SectionHeader = ({ label, onClick }: Props) => {
	return (
		<div className="flex justify-between items-center mb-4">
			<h2 className="text-xl font-bold">{label}</h2>
			<button
				onClick={onClick}
				className="section-header"
				aria-label="View all sections">
				View all
				<ArrowRightCircleIcon className="h-7 w-7 ml-1 group-hover:text-primary" />
			</button>
		</div>
	);
};
