"use client"

import { Link } from 'react-router-dom'

export function Header() {
    return (
        <div className="absolute top-0 left-0 w-full h-10 bg-transparent z-20"> {/* header div */}
            <Link style={{color: 'gray', textDecoration: "none"}} to="/home" className="px-10 font-mono relative inline-block text-gray-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">
                Valentine's Day!!!
            </Link>

            <Link style={{color: 'gray', textDecoration: "none"}} to="/wall" className="px-10 font-mono relative inline-block text-gray-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full">
                Wall of Grievances
            </Link>
        </div>
    )
}