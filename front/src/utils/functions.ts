import { INoteIdAndName } from './interface/another';

export const locationCutterFunc = (pathname: string): boolean => {
  return pathname.includes('notes');
};

export const getNoteIdAndName = (pathname: string): INoteIdAndName => {
  const arr = pathname.split('/');
  return { noteId: arr[arr.length - 1], noteName: arr[arr.length - 2] };
};
