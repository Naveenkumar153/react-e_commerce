import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import Loader from '../Components/loader/loader';
import RouteGuard from './guard/authguard';
const Home        = lazy(() => import('../Pages/Home'));
const Register    = lazy(() => import('../Pages/Register'));
const Login       = lazy(() => import('../Pages/Login'));
const Cart        = lazy(() => import('../Pages/Cart'));
const Product     = lazy(() => import('../Pages/Product'));
const ProductList = lazy(() => import('../Pages/ProductList'));
const NotFound    = lazy(() => import('../Components/NotFound'));

export default function RoutePath() {

  return (
    <Suspense fallback={ <Loader/> }>
      <Routes>
          <Route path='/' element={ <Home/> }> </Route>
          <Route path='/signup' element={ <Register/> }> </Route>
          <Route path='/signin' element={ <Login/> }> </Route>
          <Route path='/cart' element={ <Cart/> }> </Route>
          <Route path='/product/:id' element={ <Product/> }> </Route>
          {/* <RouteGuard>
          </RouteGuard> */}
           {/* Use the RouteGuard component to protect these routes */}
          {/* <RouteGuard path='/product/:id'>
            <Product />
          </RouteGuard> */}
          <Route path='/products' element={ <ProductList/> }> </Route>
          <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </Suspense>
  )
}
