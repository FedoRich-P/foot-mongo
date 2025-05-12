import { formatPhoneRu } from '@shared/lib/formatPhoneRu';

type Props = {
	name: string;
	phone: string;
	email?: string;
	src?: string;
	className?: string;
};

export function UserInfo({ name, phone, email, className, src }: Props) {
	return (
		<aside className={`flex gap-4 items-start p-4 bg-white rounded-lg shadow-sm ${className}`}>
			<img
				src={`${src ? src : '/icons/profile.png'}`}
				alt={`${name}'s avatar`}
				className="w-14 h-14 rounded-lg bg-primary p-1 object-cover"
			/>
			<dl className="space-y-1">
				<div className="flex">
					<dt className="font-semibold mr-1">Name: </dt>
					<dd>{name}</dd>
				</div>
				<div className="flex">
					<dt className="font-semibold mr-1">Phone: </dt>
					<dd>
						<a
							href={`tel:${phone}`}
							className="text-primary hover:underline line-clamp-1">
							{formatPhoneRu(phone)}
						</a>
					</dd>
				</div>
				{email && (
					<div className="flex">
						<dt className="font-semibold mr-1">Email: </dt>
						<dd>
							<a
								href={`mailto:${email}`}
								className="text-primary hover:underline">
								{email}
							</a>
						</dd>
					</div>
				)}
			</dl>
		</aside>
	);
}
