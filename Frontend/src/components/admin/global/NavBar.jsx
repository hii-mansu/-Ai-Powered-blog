import { Bell, LogOut, User } from 'lucide-react'
import React, { useState } from 'react'
const NavBar = () => {
    return (
        <nav className="hidden md:flex items-center justify-end px-6 md:px-16 lg:px-24 xl:px-32 py-4.5 border-b border-violet-200 bg-white relative transition-all">

            <div className="hidden sm:flex items-center gap-8">

                <button className="cursor-pointer transition text-violet-700">
                    <User />
                </button>
            </div>

        </nav>
    )
}

export default NavBar