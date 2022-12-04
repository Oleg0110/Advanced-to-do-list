import React from 'react';
import { useTypeSelector } from 'hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import styles from './ShopMap.module.scss';

const ShopMap: React.FC = () => {
  const dispatch = useDispatch();
  const { notes } = useTypeSelector((state) => state.note);

  const add = (num: number) => {
    dispatch({ type: 'ADD_CASH', payload: num });
  };

  const min = (num: number) => {
    dispatch({ type: 'GET_CASH', payload: num });
  };

  return (
    <div>
      <input type="text" />
      {/* <h1>{notes.map()}</h1> */}
      <button onClick={() => add(1)}>add</button>
      <br />
      <button onClick={() => min(1)}>min</button>
    </div>
  );
};

export default ShopMap;
