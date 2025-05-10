import { BanknotesIcon, ChatBubbleLeftIcon, ClockIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/solid';
import { PATHS } from '../../../routes/paths.ts';
import type { SidebarItems } from './sidebarTypes.ts';

export const SIDEBAR_ITEMS: SidebarItems = [
	{ path: PATHS.HOME, Icon: HomeIcon, text: 'Dashboard' },
	{ path: PATHS.RESTAURANTS, Icon: BanknotesIcon, text: 'Restaurants' },
	{ path: PATHS.MESSAGES, Icon: ChatBubbleLeftIcon, text: 'Message' },
	{ path: PATHS.HISTORY, Icon: ClockIcon, text: 'Order History' },
	{ path: PATHS.BILLS, Icon: BanknotesIcon, text: 'Bills' },
	{ path: PATHS.SETTINGS, Icon: Cog6ToothIcon, text: 'Setting' },
];
