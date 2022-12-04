import React, { useState } from 'react';
import useRoutes from './utils/routes';
import { AddItemOrNoteModal, Navbar, OptionBlock } from './components';
import styles from './App.module.scss';

function App() {
  const routes = useRoutes();
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className={styles.App}>
      <div className={styles.mainContainer}>
        {isModalOpened && (
          <AddItemOrNoteModal
            isModalOpened={isModalOpened}
            setIsModalOpened={setIsModalOpened}
          />
        )}
        <div className={styles.fixedOption}>
          <OptionBlock />
        </div>
        <div className={styles.fixedNavbar}>
          <Navbar
            setIsModalOpened={setIsModalOpened}
            isModalOpened={isModalOpened}
          />
        </div>
        {routes}
      </div>
    </div>
  );
}

export default App;
