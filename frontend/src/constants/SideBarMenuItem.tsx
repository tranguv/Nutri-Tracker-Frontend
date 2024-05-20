import React from "react";
import { FaHome, FaRegChartBar, FaRunning, FaGamepad, FaUserAlt, FaSignOutAlt } from "react-icons/fa";

export const menuItem = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: <FaHome />,
    },
    {
        path: '/reports',
        name: 'Reports',
        icon: <FaRegChartBar />,
    },
    {
        path: '/logs',
        name: 'Logs',
        icon: <FaRunning />,
    },
    {
        path: '/coinstore',
        name: 'Coin Store',
        icon: <FaGamepad />,
    },
    {
        path: '/profilePage',
        name: 'Profile',
        icon: <FaUserAlt />,
    },
    {
        path: '/logout',
        name: 'Log Out',
        icon: <FaSignOutAlt />,
    },
];