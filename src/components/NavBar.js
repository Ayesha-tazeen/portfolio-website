

import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="bg-head sticky top-0 z-50 mx-auto  md:py-5 justify-end text-white flex flex-row items-center p-3">
               
                <ul className="flex flex-row  p-0 list-none m-0 text-white space-x-3 md:space-x-10">
                    <li className="m-0">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                            `py-2 px-3 duration-200 ${isActive ? "bg-wall text-head rounded-md font-bold" :  " font-bold bg-head "} topic`
                        }
                        >
                            Portfolio
                        </NavLink>
                    </li>
                   
                    <li className="m-0">
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `py-2 px-3 duration-200 ${isActive ? "bg-wall text-head rounded-md font-bold" :  " font-bold bg-head "} topic`
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li className="m-0">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `py-2 px-3 duration-200 ${isActive ? "bg-wall text-head rounded-md font-bold" :  " font-bold bg-head "} topic`
                            }>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;
