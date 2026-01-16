"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav>
            <ul className="flex items-center gap-8">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li key={item.href}>
                            <Link 
                                href={item.href} 
                                className={`flex items-center text-sm transition-colors ${
                                    isActive 
                                        ? "text-white font-medium" 
                                        : "text-gray-100 hover:text-white"
                                }`}
                            >
                                <span className={isActive ? "text-purple-400" : "text-purple-100"}>#</span>
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Nav