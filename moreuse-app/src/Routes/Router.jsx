import React, { Suspense } from 'react';
import {createBrowserRouter} from 'react-router-dom';
import { LazyLoading } from '../Components/LazyLoading';

//Carga perezosa lazy load
const Home = React.lazy(() => import('../Pages/Home'));
const WearDetail = React.lazy(() => import('../Pages/WearDetail'));
const Login = React.lazy(() => import('../Pages/Login').then((module) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(module);
    }, 1000)
  })
}));
const Signup = React.lazy(() => import('../Pages/Signup'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <Home />
      </Suspense>
      )
  },
  {
    path: "/wear-detail/:id",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <WearDetail />
      </Suspense>
      )
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <Login />
      </Suspense>
    )
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <Signup />
      </Suspense>
    )
  }
]);
