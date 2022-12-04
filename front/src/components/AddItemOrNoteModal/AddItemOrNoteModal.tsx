import React, { FormEvent, useState } from 'react';
import { useActions } from 'hooks/useActions';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import styles from './AddItemOrNoteModal.module.scss';
import { getNoteIdAndName, locationCutterFunc } from 'utils/functions';
import { INoteIdAndName } from 'utils/interface/another';

interface IAddItemOrNoteModal {
  isModalOpened: boolean;
  setIsModalOpened: (boolean: boolean) => void;
}

const AddItemOrNoteModal: React.FC<IAddItemOrNoteModal> = ({
  isModalOpened,
  setIsModalOpened,
}) => {
  const { fetchAddNote, fetchAddItem } = useActions();
  const { addLoading } = useTypeSelector((state) => state.note);
  const [isName, setIsName] = useState('');

  const location = useLocation();
  const currentLocation = locationCutterFunc(location.pathname);
  const note: INoteIdAndName = getNoteIdAndName(location.pathname);

  const handleSubmit = (e: FormEvent) => {
    currentLocation
      ? fetchAddNote(isName.trim())
      : fetchAddItem(isName.trim(), note.noteId);
    setIsModalOpened(false);
    e.preventDefault();
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.backFon} ${isModalOpened && styles.opened}`}
        onClick={() => setIsModalOpened(false)}
      />
      <div className={styles.mainBlock}>
        <div className={styles.content}>
          <h3>Note Name</h3>
          <form onSubmit={(e) => handleSubmit(e)} onReset={() => setIsName('')}>
            <div className={styles.inputsBlock}>
              <div className={styles.inputTextBlock}>
                <input
                  className={styles.inputText}
                  type="text"
                  value={isName}
                  onChange={(event) => setIsName(event.target.value)}
                  required
                  placeholder="Name"
                />
                <button type="reset" className={styles.resetButton}>
                  <AiOutlineCloseCircle size={15} />
                </button>
              </div>
              {addLoading ? (
                <h5>Loading</h5>
              ) : (
                <input
                  type="submit"
                  value="Submit"
                  className={styles.submitInput}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItemOrNoteModal;
