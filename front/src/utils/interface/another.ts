import { IconType } from 'react-icons';

export interface IButtonProps {
  id: string;
  name: string;
  link?: string;
  iconElement: IconType;
}

export interface INoteIdAndName {
  noteId: string;
  noteName: string;
}
