import type { ComponentType, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface SidebarLinkItem {
	path: string;
	Icon: IconType;
	text: string;
}

export type SidebarItems = SidebarLinkItem[];
