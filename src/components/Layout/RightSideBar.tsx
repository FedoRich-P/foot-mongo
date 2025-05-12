import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Address } from '@components/Address/Address';
import { Cart } from '@components/Cart/Cart';

export const RightSideBar = () => {
	return (
		<aside className="py-4 px-2 w-[50%] hidden md:block h-screen sticky top-0 overflow-y-auto lg:w-[40%] xl:w-[33%]">
			<div className="flex justify-between items-center border-b border-primary pb-5">
				<ul className="flex flex-wrap gap-2">
					<li>
						<button
							className={
								'relative p-2 cursor-pointer border-1 border-transparent h-full hover:border-primary transition-all duration-500 rounded-lg'
							}>
							<BellIcon className="h-6 w-6" />
							<span
								className={
									'absolute top-0 right-0 w-5 h-5 rounded-full bg-primary flex justify-center items-center p-1 text-xs'
								}>
								2
							</span>
						</button>
					</li>
					<li>
						<button
							className={
								'p-2 cursor-pointer border-1 border-transparent h-full hover:border-primary transition-all duration-500 rounded-lg'
							}>
							<Cog6ToothIcon className="h-6 w-6" />
						</button>
					</li>
				</ul>
				<img
					src="/icons/profile.png"
					alt="profile"
					className="block bg-primary p-1 rounded-lg w-14 h-auto"
				/>
			</div>
			<Address
				city={'Moscow'}
				apartment={'101'}
				entrance={'7'}
				street={'Lenina'}
				building={'1'}
				onChange={() => {}}
			/>
			<div className="flex gap-2 mt-4">
				<button className="flex-1 border border-main-border rounded-md py-2 text-sm">Add Details</button>
				<button className="flex-1 border border-main-border rounded-md py-2 text-sm">Add Note</button>
			</div>
			<Cart />
		</aside>
	);
};
