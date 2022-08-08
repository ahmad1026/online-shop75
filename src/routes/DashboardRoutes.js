import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
export default function DashboardRoutes() {
    if (true) {
        return (
            <Outlet />
        );
    } else {
        return (
            <Navigate to="/login" />
        )
    }
}
