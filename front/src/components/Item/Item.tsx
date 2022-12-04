import { useActions } from 'hooks/useActions';
import React from 'react';
import { IItem } from 'utils/interface/item';
import styles from './Item.module.scss';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCircle, BsCheckCircle } from 'react-icons/bs';
import { BiCircle, BiCheckCircle } from 'react-icons/bi';
import { GiCircle } from 'react-icons/gi';

const Item: React.FC<IItem> = ({ name, mark, id, done }) => {
  const { fetchDeleteNote, fetchDoneItem } = useActions();

  return (
    <div className={styles.mainBlock}>
      {/* {mark && (
        <div
          className={`${styles.verticalLine} ${styles[`lineColor${mark}`]}`}
        />
      )} */}
      {done ? (
        <button onClick={() => fetchDoneItem(id, false)}>
          <BiCheckCircle color="#000" size={20} />
        </button>
      ) : (
        <button onClick={() => fetchDoneItem(id, true)}>
          <BiCircle color="#000" size={20} />
        </button>
      )}
      <p className={styles.itemName}>{name}</p>
    </div>
  );
};

export default Item;
