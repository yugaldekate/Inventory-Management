"use client"

import React from 'react';
import { Bell, Menu, Settings, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full mb-7">

            {/* LEFT SIDE */}
            <div className="flex justify-between items-center gap-5">
                <button
                    className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
                    onClick={() => {}}
                >
                    <Menu className="w-4 h-4" />
                </button>

                <div className="relative">
                    <input
                        type="search"
                        placeholder="Start type to search groups & products"
                        className="pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
                    />

                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
                        <Bell className="text-gray-500" size={20} />
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-between items-center gap-5">
                <div className="hidden md:flex justify-between items-center gap-5">
                    <div>
                        <button onClick={() => {}}>
                            <Sun className="cursor-pointer text-gray-500" size={24} />
                        </button>
                    </div>

                    <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />

                    <div className="flex items-center gap-3 cursor-pointer">
                        <Image
                            src="https://www.shareicon.net/data/128x128/2016/05/24/770117_people_512x512.png"
                            alt="Profile"
                            width={30}
                            height={30}
                            className="rounded-full h-full object-cover"
                        />
                        <span className="font-semibold">Yugal</span>
                    </div>
                </div>

                <Link href="/settings">
                    <Settings className="cursor-pointer text-gray-500" size={24} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar;