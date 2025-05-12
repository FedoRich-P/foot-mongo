import { addressFields, AddressProps } from '@components/Address/addressFields';

type Props = {
	address: AddressProps;
	onChange: () => void;
	className?: string;
};

export const Address = (props: Props) => {
	const { address, onChange, className } = props;

	return (
		<section className={`mb-6 flex flex-col gap-3 py-3 ${className}`}>
			<h2 className="text-xl font-semibold">Your Address</h2>

			<dl className="space-y-2 pн-1">
				{addressFields.map(({ Icon, label, field }) => (
					<div
						key={field}
						className="flex justify-between items-center border-b border-main-border p-1">
						<dt className="flex items-center gap-2 font-medium">
							<Icon
								aria-hidden="true"
								className="h-5 w-5 text-primary"
							/>
							{label}:
						</dt>
						<dd className="ml-4 text-lg">{address[field] ?? '-'}</dd>
					</div>
				))}
			</dl>

			<button
				onClick={onChange}
				className="btn-secondary self-end mt-2">
				Change Address
			</button>
		</section>
	);
};
