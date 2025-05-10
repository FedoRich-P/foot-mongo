import { XMarkIcon } from '@heroicons/react/24/outline';
import type { Dispatch, SetStateAction } from 'react';
import { SIDEBAR_ITEMS } from './sidebarItems.ts';
import { SidebarItem } from './SidebarItem.tsx';

interface SideBarProps {
	isSideBarOpen: boolean;
	setIsSideBar: Dispatch<SetStateAction<boolean>>;
}

export const SideBar = ({ isSideBarOpen, setIsSideBar }: SideBarProps) => {
	return (
		<aside
			className={`h-screen bg-white flex
     	flex-col justify-between fixed md:static z-60 transition-all
      duration-300 ease-in-out w-full md:w-64 w-[60%]
        ${isSideBarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
			<button
				onClick={() => setIsSideBar(false)}
				className="absolute top-4 right-4 md:hidden"
				aria-label="Close sidebar">
				<XMarkIcon className="h-8 w-8 text-gray-500" />
			</button>

			<div className="flex flex-col items-center h-full overflow-y-auto">
				<div className="flex bg-primary w-full justify-center py-5">
					<h1 className="text-2xl font-bold">
						Freshly <span className="text-main-text text-4xl">.</span>
					</h1>
				</div>

				<nav className="w-full">
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
					<button className="bg-white-bg text-sm font-bold uppercase py-2 px-4 rounded-md border-2 border-white-bg hover:bg-transparent hover:text-main-text transition-all duration-500">
						Upgrade
					</button>
				</div>
			</div>
		</aside>
	);
};
