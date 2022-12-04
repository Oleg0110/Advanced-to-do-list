import Item from 'components/Item/Item';
import { useActions } from 'hooks/useActions';
import { useTypeSelector } from 'hooks/useTypeSelector';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getNoteIdAndName } from 'utils/functions';
import { INoteIdAndName } from 'utils/interface/another';
import styles from './Items.module.scss';

const Items: React.FC = () => {
  const { fetchItems } = useActions();
  const { items, error, loading } = useTypeSelector((state) => state.item);

  const location = useLocation();
  const note: INoteIdAndName = getNoteIdAndName(location.pathname);

  useEffect(() => {
    fetchItems(note.noteId);
  }, []);

  if (loading) {
    return <h1 className={styles.center}>...Loading</h1>;
  }

  if (error) {
    return <h1 className={styles.center}>{error}</h1>;
  }

  return (
    <>
      <div className={styles.mainBlock}>
        <h1 className={styles.title}>{note.noteName}</h1>
        <div>
          {items.map((item) => (
            <Item
              key={item.id}
              done={item.done}
              id={item.id}
              name={item.name}
              mark={item.mark}
              noteId={item.noteId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Items;
