import { useState } from 'react';
import { SideBar } from './sidebar/SideBar';
import { Header } from './Header';
import { Outlet, useLocation } from 'react-router';
import { RightSideBar } from './RightSideBar';
import { Bars3Icon } from '@heroicons/react/24/outline';

export function Layout() {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	const { pathname } = useLocation();
	return (
		<div className={'flex h-screen relative max-w-[1440px] m-auto'}>
			<SideBar
				isSideBarOpen={isSideBarOpen}
				setIsSideBar={setIsSideBarOpen}
			/>
			<button
				onClick={() => setIsSideBarOpen(true)}
				className="fixed top-2 left-2 z-50 lg:hidden border-2 border-main-border rounded-lg p-2 fallback-bg"
				aria-label="Open sidebar">
				<Bars3Icon className="h-8 w-8 text-gray-700" />
			</button>
			<main className="bg-main-border pt-11 px-4 lg:pt-3 h-full w-full overflow-y-auto">
				<Header />
				<Outlet />
			</main>
			{pathname !== '/checkout' && <RightSideBar />}
		</div>
	);
}
