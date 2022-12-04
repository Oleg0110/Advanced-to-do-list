import React from 'react';
import { HiPlus } from 'react-icons/hi';
import styles from './AddNoteOrItem.module.scss';

interface IAddNoteOrItem {
  isModalOpened: boolean;
  setIsModalOpened: (boolean: boolean) => void;
}

const AddNoteOrItem: React.FC<IAddNoteOrItem> = ({
  isModalOpened,
  setIsModalOpened,
}) => {
  const day = new Date().toLocaleString('en-US', { weekday: 'long' });
  const date = new Date().getDate();
  const month = new Date()
    .toLocaleString('en-US', { month: 'long' })
    .slice(0, 3);
  const year = new Date().getFullYear();

  return (
    <div className={styles.mainBLock}>
      <div className={styles.contentBlock}>
        <div>
          <h2 className={styles.todoTitle}>todo</h2>
          <div>
            <span className={styles.dateStyle}>{day}</span>
            <span className={styles.dateStyle}>{date}</span>
            <span className={styles.dateStyle}>{month}</span>
            <span className={styles.dateStyle}>{year}</span>
          </div>
        </div>
        <div className={styles.addItemBlock}>
          <button
            type="button"
            className={styles.addItemButton}
            onClick={() => setIsModalOpened(!isModalOpened)}
          >
            <div className={styles.buttonContent}>
              <HiPlus className={styles.iconPlus} />
              <span className={styles.addItemTitle}>Add item</span>
            </div>
          </button>
        </div>
        <p className={styles.textQuestions}>
          What do you want to do today? Start adding items to your to do list
        </p>
      </div>
    </div>
  );
};

export default AddNoteOrItem;
