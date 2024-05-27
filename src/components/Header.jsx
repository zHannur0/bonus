import React, { useState } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

const Header = ({filter}) => {
    const [num, setNum] = useState(1);
    const router = useRouter();
    const id = String(router.query.id);
    const currentPath = router.asPath.split("/").pop();

    const navItems = [
        { href: `/${id}/`, label: 'Для вас', isActive: currentPath === "" || currentPath === id },
        { href: `/${id}/bonus`, label: 'Мои бонусы', isActive: currentPath === "bonus" },
    ];

    return (
        <div className={"bg-white pt-4 flex flex-col items-center w-full"}>
            <SearchBar filter={filter}/>
            <nav className="flex justify-around w-full px-4 py-4">
                {navItems.map(({href, label, icon, num, isActive}) => (
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
        </div>

    );
};

export default Header;
