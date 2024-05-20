import React, {useEffect, useState} from 'react';
import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/router";



const StoreList = ({members, value}) => {
    const router = useRouter();
    const id = String(router.query.id);
    return (
        <div className="p-4 h-[90%]">
            <h2 className="mb-4 text-lg font-medium text-black">Все партнеры</h2>
            {members.slice().filter((item)=> item.name.toLowerCase().includes(value.toLowerCase())).map((store, index) => (
                <div key={store.memberId} className="flex items-center p-4 bg-white gap-4 justify-between">
                    <div className={"flex gap-4"}>
                        <img src={"/img/def.png"} alt={store.name} className="w-[65px] h-[65px]"/>
                        <div className="flex-col items-center">
                            <h3 className="text-lg font-bold text-[#000000]">{store.name}</h3>
                            <p className="text-[#818C99]">{store.address}</p>
                        </div>
                    </div>
                    <Link href={`/${id}/${store.memberId}`}>
                        <img src="/img/shift.png" alt=""/>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default StoreList;
