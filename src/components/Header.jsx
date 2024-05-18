import React, { useState } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
    const [num, setNum] = useState(1);
    const router = useRouter();
    const id = String(router.query.id);
    const currentPath = router.asPath.split("/").pop();

    const navItems = [
        { href: `/${id}/gifts`, icon: currentPath === "gifts" ? "/img/GiftBlue.svg" : "/img/Gift.svg", hasBadge: true },
        { href: `/${id}/`, label: 'Рекомендации', isActive: currentPath === "" || currentPath === id },
        { href: `/${id}/bonus`, label: 'Мои бонусы', isActive: currentPath === "bonus" },
        { href: `/${id}/search`, icon: currentPath === "search" ? "/img/Search.svg" : "/img/SearchBlack.svg", isActive: currentPath === "search" }
    ];

    return (
        <nav className="flex justify-around px-4 py-4 bg-white shadow mb-2">
            {navItems.map(({ href, label, icon, num, isActive }) => (
                <Link href={href} key={label || icon}>
                    <div
                        className={`flex flex-col items-center text-[16px] cursor-pointer ${isActive ? 'text-black font-medium' : 'text-gray-500'}`}
                        onClick={() => setNum(num)}
                    >
                        {icon && <img src={icon} alt={label} className="w-[27px] h-[27px]"/>}
                        {label && (
                            <>
                                <span className={`text-sm `}>{label}</span>
                                {isActive && <span className="block w-full h-[2px] bg-blue-500 mt-1"></span>}
                            </>
                        )}
                    </div>
                </Link>
            ))}
        </nav>
    );
};

export default Header;
