import React, { Suspense, useEffect } from 'react';
import {createBrowserRouter, useLocation} from 'react-router-dom';
import { LazyLoading } from '../Components/LazyLoading';

//Carga perezosa lazy load
const Home = React.lazy(() => import('../Pages/Home'));
const WearDetail = React.lazy(() => import('../Pages/WearDetail'));
const Signup = React.lazy(() => import('../Pages/Signup'));
const Profile = React.lazy(() => import('../Pages/Profile'));
const MyClothes = React.lazy(() => import('../Pages/MyClothes'));
const AddClothing = React.lazy(() => import('../Pages/AddClothing'));
const Logout = React.lazy(() => import('../Pages/Logout'));

// Se hizo de esta forma para poner timeout y ver la imagen de carga
const Login = React.lazy(() => import('../Pages/Login').then((module) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(module);
    }, 1000)
  })
}));

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
    path: "/logout",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <Logout />
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
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <Profile />
      </Suspense>
    )
  },
  {
    path: "/my-clothes",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <MyClothes />
      </Suspense>
    )
  },
  {
    path: "/add-clothing",
    element: (
      <Suspense fallback={<LazyLoading />}>
        <AddClothing />
      </Suspense>
    )
  }
]);
