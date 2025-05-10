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
		<div className={'flex h-screen overflow-hidden relative'}>
			<SideBar
				isSideBarOpen={isSideBarOpen}
				setIsSideBar={setIsSideBarOpen}
			/>
			<button
				onClick={() => setIsSideBarOpen(true)}
				className="fixed top-4 left-4 z-50 lg:hidden"
				aria-label="Open sidebar">
				<Bars3Icon className="h-8 w-8 text-gray-700" />
			</button>
			<div className={'flex-1 bg-main-border'}>
				<main className="bg-main-border min-h-full p-3 pt-7 sm:p-4 sm:pt-7 w-full">
					<Header />
					<Outlet />
				</main>
			</div>
			{pathname !== '/checkout' && <RightSideBar />}
		</div>
	);
}
