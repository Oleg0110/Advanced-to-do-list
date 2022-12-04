import React from 'react';
import Tippy from '@tippyjs/react';
import useMedia from 'hooks/useMedia';
import { NavLink } from 'react-router-dom';
import { buttons } from '../../utils/constants';

import styles from './Navbar.module.scss';
import 'tippy.js/dist/tippy.css';

interface INavbar {
  isModalOpened: boolean;
  setIsModalOpened: (boolean: boolean) => void;
}

const Navbar: React.FC<INavbar> = ({ setIsModalOpened, isModalOpened }) => {
  const media = useMedia();

  return (
    <header className={styles.navBar}>
      {buttons.map((button) =>
        button.link ? (
          <Tippy key={button.id} className="button-tip" content={button.name}>
            <NavLink className="nav-link" to={button.link}>
              <button.iconElement size={30} className={styles.navIcon} />
            </NavLink>
          </Tippy>
        ) : (
          <Tippy key={button.id} content={button.name}>
            <button
              className={styles.iconPlus}
              onClick={() => setIsModalOpened(!isModalOpened)}
            >
              <button.iconElement size={30} />
            </button>
          </Tippy>
        )
      )}
    </header>
  );
};

export default Navbar;
