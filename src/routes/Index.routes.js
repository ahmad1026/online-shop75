import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomerRoutes from './CustomerRoutes'
import {
  Home,
  Dashboard,
  ManageProducts,
  ManegeOrders,
  Login,
  NotFound,
  Product,
  Products,
  Cart,
  CheckOut
} from '../pages'
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerRoutes />}>
          <Route path='/' element={<Home/>}/>
          <Route path='products/:category' element={<Products />} />
          <Route path='product/:productId' element={<Product />} />
          <Route path='cart' element={<Cart />} />
          <Route path='cart/checkout' element={<CheckOut />} />
          <Route path='payment-result' />
        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='products' element={<ManageProducts />} />
          <Route path='quantity' element={<ManageProducts />} />
          <Route path='orders' element={<ManegeOrders />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
