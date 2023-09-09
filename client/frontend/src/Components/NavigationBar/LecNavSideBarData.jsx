import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const LecNavSideBarData = [
    {
        title: 'Home',
        path: '/LecturerHome',
        icon: <AiIcons.AiFillHome />,
        cName: 'lec-nav-text'
    },
    {
        title: 'Profile',
        path: '/LecturerProfile',
        icon: <FaIcons.FaUserAlt />,
        cName: 'lec-nav-text'
    },
    {
        title: 'Add Course Materials',
        path: '/LecturerDashboard',
        icon: <FaIcons.FaTh />,
        cName: 'lec-nav-text-01'
    },
    {
        title: 'Add Assignments',
        path: '/LecturerAddAss',
        icon: <IoIcons.IoIosPaper style={{fontSize: '1.2rem'}}/>,
        cName: 'lec-nav-text-01'
    },
    {
        title: "View Student's Assignments",
        path: '/LecturerViewAss',
        icon: <FaIcons.FaAddressCard style={{fontSize: '1rem'}}/>,
        cName: 'lec-nav-text-01'
    }
]