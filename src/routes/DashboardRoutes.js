import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { AdminHeader } from '../layouts'

export default function DashboardRoutes({theme , toogleTheme}) {
    if (true) {
        return (
            <>
                <AdminHeader theme={theme} toogleTheme = {toogleTheme} />
                <Outlet />
            </>
        );
    } else {
        return (
            <Navigate to="/login" />
        )
    }
}
