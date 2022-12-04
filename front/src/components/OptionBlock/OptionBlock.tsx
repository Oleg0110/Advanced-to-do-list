import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import { BsCloudRain } from 'react-icons/bs';
import { MdOutlineLightMode } from 'react-icons/md';
import { HiOutlineMoon } from 'react-icons/hi';
import styles from './OptionBlock.module.scss';
import 'tippy.js/dist/tippy.css';

const OptionBlock: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <BsCloudRain size={20} />
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${styles.toggleButtonBlock} ${
            isOpen
              ? styles.toggleButtonBlockDark
              : styles.toggleButtonBlockLight
          }`}
        >
          <div
            className={`${styles.toggleButton} ${
              isOpen ? styles.toggleButtonDark : styles.toggleButtonLight
            }`}
          >
            {isOpen ? (
              <HiOutlineMoon size={11} className={styles.iconDark} />
            ) : (
              <MdOutlineLightMode size={9} className={styles.iconLight} />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default OptionBlock;
