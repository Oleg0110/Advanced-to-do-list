import { useActions } from 'hooks/useActions';
import React from 'react';
import { INote } from 'utils/interface/note';
import styles from './Note.module.scss';

const Note: React.FC<INote> = ({ name, mark, id }) => {
  const { fetchDeleteNote } = useActions();
  return (
    <div className={styles.mainBlock}>
      {mark && (
        <div
          className={`${styles.verticalLine} ${styles[`lineColor${mark}`]}`}
        />
      )}
      <p className={styles.noteName}>{name}</p>
    </div>
  );
};

export default Note;
