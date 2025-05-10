import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Address } from '../Address/Address.tsx';
import { Cart } from '../Cart/Cart.tsx';

export const RightSideBar = () => {
	return (
		<aside className="p-4 w-full md:w-[25%] hidden md:block md:mt-0 overflow-auto">
			<div className="flex justify-between items-center">
				<div className="flex flex-wrap gap-2">
					<BellIcon className="h-5 w-5" />
					<Cog6ToothIcon className="h-5 w-5" />
				</div>
				<img
					src="/icons/profile.png"
					alt="profile"
					className="block bg-primary p-1 rounded-lg w-14 h-auto"
				/>
			</div>
			<Address />
			<div className="flex gap-2 mt-4">
				<button className="flex-1 border border-main-border rounded-md py-2 text-sm">Add Details</button>
				<button className="flex-1 border border-main-border rounded-md py-2 text-sm">Add Note</button>
			</div>
			<Cart />
		</aside>
	);
};
