"use client"

import SidebarLink from "./SidebarLink";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { SET_IS_SIDEBAR_COLLAPSED } from "@/redux/features/globalSlice";

import { Archive, CircleDollarSign, Clipboard, Layout, Menu, SlidersHorizontal, User } from "lucide-react";

const Sidebar = () => {

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

    const toggleSidebar = () => {
        dispatch(SET_IS_SIDEBAR_COLLAPSED(!isSidebarCollapsed));
    };

    const sidebarClassNames = `fixed flex flex-col z-40 h-full ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"} bg-white transition-all duration-300 overflow-hidden shadow-md`;

    return (
        <div className={sidebarClassNames}>
            {/* TOP LOGO */}
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"} `} >
                <div>Logo</div>
                <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>
                    STOCKIFY
                </h1>

                <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={toggleSidebar} >
                    <Menu className="w-4 h-4" />
                </button>
            </div>

            {/* LINKS */}
            <div className="flex-grow mt-8">
                <SidebarLink
                    href="/"
                    icon={Layout}
                    label="Dashboard"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/inventory"
                    icon={Archive}
                    label="Inventory"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/products"
                    icon={Clipboard}
                    label="Products"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/users"
                    icon={User}
                    label="Users"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/settings"
                    icon={SlidersHorizontal}
                    label="Settings"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/expenses"
                    icon={CircleDollarSign}
                    label="Expenses"
                    isCollapsed={isSidebarCollapsed}
                />
            </div>

            {/* FOOTER */}
            <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`} >
                <p className="text-center text-xs text-gray-500">&copy; 2024 Stockify</p>
            </div>
        </div>
    )
}

export default Sidebar