import { Link } from 'react-router';
import type { SidebarLinkItem } from './sidebarTypes.ts';

export function SidebarItem({ path, Icon, text }: SidebarLinkItem) {
	return (
		<li className={'w-full'}>
			<Link
				to={path}
				className={'sidebar-link'}>
				<Icon className={'h-8 w-8 lg:h-6 lg:w-6 self-end'} />
				<span>{text}</span>
			</Link>
		</li>
	);
}
