import React from 'react'
import { Outlet } from 'react-router-dom'
import { CustomerHeader } from '../layouts'
export default function CustomerRoutes({ theme, toogleTheme }) {
  return (
    <>
      <CustomerHeader theme={theme} toogleTheme={toogleTheme} />
      <Outlet />
    </>
  )
}
