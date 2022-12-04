import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Items, Notes, ShopMap } from '../layout';
import { ROUTES } from './constants';

const useRoutes = () => (
  <Routes>
    <Route path={`${ROUTES.note}/*`} element={<Items />}></Route>
    <Route path={ROUTES.notes} element={<Notes />}></Route>
    <Route path={ROUTES.shopMap} element={<ShopMap />} />
    <Route path="*" element={<Navigate to={ROUTES.notes} replace />} />
  </Routes>
);

export default useRoutes;
