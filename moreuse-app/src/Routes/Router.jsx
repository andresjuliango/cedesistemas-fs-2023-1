import React, { Suspense } from 'react';
import {createBrowserRouter} from 'react-router-dom';

//Carga perezosa lazy load
const Home = React.lazy(() => import('../Pages/Home'));
const WearDetail = React.lazy(() => import('../Pages/WearDetail'))

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
      )
  },
  {
    path: "/wear-detail",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <WearDetail />
      </Suspense>
      )
  }
]);
