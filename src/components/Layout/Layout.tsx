import { useState } from 'react';
import { SideBar } from './sidebar/SideBar.tsx';
import { Header } from './Header.tsx';
import { Outlet, useLocation } from 'react-router';
import { RightSideBar } from './RightSideBar.tsx';
import { Bars3Icon } from '@heroicons/react/24/outline';

export function Layout() {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	const { pathname } = useLocation();
	return (
		<div className={'flex h-screen relative'}>
			<SideBar
				isSideBarOpen={isSideBarOpen}
				setIsSideBar={setIsSideBarOpen}
			/>
			<button
				onClick={() => setIsSideBarOpen(true)}
				className="fixed top-4 left-4 z-50 lg:hidden border-2 border-main-border rounded-lg p-2 fallback-bg"
				aria-label="Open sidebar">
				<Bars3Icon className="h-8 w-8 text-gray-700" />
			</button>
			<main className="bg-main-border pt-11 lg:pt-3 h-full w-full overflow-y-auto p-2">
				<Header />
				<Outlet />
			</main>
			{pathname !== '/checkout' && <RightSideBar />}
		</div>
	);
}
