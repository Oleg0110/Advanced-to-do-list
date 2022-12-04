import { HiMenu, HiPlus } from 'react-icons/hi';
import { BiMap } from 'react-icons/bi';
import { IButtonProps } from './interface/another';

export const ROUTES = {
  home: '/',
  notes: '/notes',
  note: '/note',
  shopMap: '/shop-map',
};

export const buttons: IButtonProps[] = [
  {
    id: '0',
    name: 'Notes',
    link: ROUTES.notes,
    iconElement: HiMenu,
  },
  {
    id: '1',
    name: 'Plus',
    iconElement: HiPlus,
  },
  {
    id: '3',
    name: 'Shops Map',
    link: ROUTES.shopMap,
    iconElement: BiMap,
  },
];

export const RESPONSIVE_SIZES: string[] = [
  '(max-width: 426px)',
  '(max-width: 600px)',
  '(max-width: 900px)',
  '(max-width: 1200px)',
  '(max-width: 1920px)',
];
export const RESPONSIVE_VALUE: string[] = ['XS', 'SM', 'MD', 'LG', 'XL'];
export const RESPONSIVE_WITHOUT_VALUE = 'Another';
