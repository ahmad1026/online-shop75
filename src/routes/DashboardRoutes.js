import React, { useEffect } from 'react'
import { Outlet, Navigate , useLocation } from 'react-router-dom';
import { AdminHeader } from '../layouts'
import { useAuth, CheckUserExpired } from '../utils/functions.utils';
export default function DashboardRoutes({ theme, toogleTheme }) {
    const location = useLocation()
    useEffect(() => {
        CheckUserExpired()
    },[location])


    return (useAuth() ? (
        <>
            <AdminHeader theme={theme} toogleTheme={toogleTheme} />
            <Outlet />
        </>) :
        <Navigate to="/login" />)
}
