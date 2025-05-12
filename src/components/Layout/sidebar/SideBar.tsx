import { XMarkIcon } from '@heroicons/react/24/outline';
import type { Dispatch, SetStateAction } from 'react';
import { SIDEBAR_ITEMS } from './sidebarItems';
import { SidebarItem } from './SidebarItem';

interface SideBarProps {
	isSideBarOpen: boolean;
	setIsSideBar: Dispatch<SetStateAction<boolean>>;
}

export const SideBar = ({ isSideBarOpen, setIsSideBar }: SideBarProps) => {
	return (
		<aside className={`sidebar ${isSideBarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
			<div className="relative flex flex-col items-center h-full w-full lg:w-full sm:w-[50%] overflow-y-auto">
				<button
					onClick={() => setIsSideBar(false)}
					className="absolute top-5 right-5 lg:hidden border-2 border-main-border rounded-lg p-1 cursor-pointer"
					aria-label="Close sidebar">
					<XMarkIcon className="h-8 w-8 text-gray-500" />
				</button>
				<h1 className="p-5 text-2xl font-bold bg-primary rounded-bl-md w-full">
					Freshly <span className="text-main-text text-4xl">.</span>
				</h1>

				<nav className="h-full w-full mb-4 bg-white">
					<ul className="space-y-3 p-2 pr-0">
						{SIDEBAR_ITEMS.map((item, index) => (
							<SidebarItem
								key={item.path + index}
								{...item}
							/>
						))}
					</ul>
				</nav>

				<div className="flex flex-col mt-auto gap-3 w-full bg-primary p-4 rounded-tl-md">
					<h3 className="text-sm text-main-text font-semibold">Upgrade your Account to Get Free Voucher</h3>
					<button className="btn-main">Upgrade</button>
				</div>
			</div>
		</aside>
	);
};
