import { MapPinIcon, BuildingOffice2Icon, HomeIcon, KeyIcon, HashtagIcon } from '@heroicons/react/24/outline';
import type { ComponentType, SVGProps } from 'react';

export type AddressFieldKey = 'street' | 'city' | 'building' | 'entrance' | 'apartment';

export type AddressField = {
	Icon: ComponentType<SVGProps<SVGSVGElement>>;
	label: string;
	field: AddressFieldKey;
};

export const addressFields: AddressField[] = [
	{ Icon: MapPinIcon, label: 'Street', field: 'street' },
	{ Icon: BuildingOffice2Icon, label: 'City', field: 'city' },
	{ Icon: HomeIcon, label: 'Building', field: 'building' },
	{ Icon: KeyIcon, label: 'Entrance', field: 'entrance' },
	{ Icon: HashtagIcon, label: 'Apt. No.', field: 'apartment' },
];
