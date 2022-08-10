import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomerRoutes from './CustomerRoutes'
import DashboardRoutes from './DashboardRoutes'
import {
  Home,
  Dashboard,
  ManageProducts,
  ManegeOrders,
  QuantityProducts,
  Login,
  NotFound,
  Product,
  Products,
  Cart,
  CheckOut
} from '../pages'
export default function AppRoutes({theme,toogleTheme}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerRoutes theme={theme} toogleTheme={toogleTheme} />}>
          <Route path='/' element={<Home/>}/>
          <Route path='products/:category' element={<Products />} />
          <Route path='product/:productId' element={<Product />} />
          <Route path='cart' element={<Cart />} />
          <Route path='cart/checkout' element={<CheckOut />} />
          <Route path='payment-result' />
        </Route>
        <Route path='/dashboard' element={<DashboardRoutes theme={theme} toogleTheme={toogleTheme}/>} >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='products' element={<ManageProducts />} />
          <Route path='quantity' element={<QuantityProducts />} />
          <Route path='orders' element={<ManegeOrders />} />
        </Route>
        <Route path='/login' element={<Login theme={theme}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
