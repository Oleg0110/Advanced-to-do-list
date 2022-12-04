import React, { useEffect, useState } from 'react';
import { useActions } from 'hooks/useActions';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { AddNoteOrItem } from 'components';
import styles from './Notes.module.scss';
import Note from 'components/Note/Note';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/constants';

const Notes: React.FC = () => {
  const { fetchNotes } = useActions();
  const { notes, error, loading } = useTypeSelector((state) => state.note);
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  if (loading) {
    return <h1 className={styles.center}>...Loading</h1>;
  }

  if (error) {
    return <h1 className={styles.center}>{error}</h1>;
  }

  return (
    <>
      {notes[0] ? (
        <div className={styles.mainBlock}>
          <h1 className={styles.title}>Notes</h1>
          <div>
            {notes.map((note) => (
              <Link to={`${ROUTES.note}/${note.name}/${note.id}`} key={note.id}>
                <Note name={note.name} mark={note.mark} id={note.id} />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <AddNoteOrItem
          isModalOpened={isModalOpened}
          setIsModalOpened={setIsModalOpened}
        />
      )}
    </>
  );
};

export default Notes;
