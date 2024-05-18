import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";


const BonusList = ({bonuses, setMemberId}) => {
    const router = useRouter();
    const id = String(router.query.id);
    return (
        <div className="p-4 bg-white rounded-md">
            <div className={"w-full justify-between flex mb-2"}>
                <h2 className="text-lg font-medium text-black">Мои бонусы</h2>
                <Link href={`/${id}/gifts`}>
                    <h3 className={"text-[15px] text-[#007AFE]"}>Награды</h3>
                </Link>
            </div>
            {bonuses.map((bonus, index) => (
                <>
                <div key={index} className="flex flex-col p-4 mb-4 bg-[#F7F7F7] rounded-lg w-full">
                    <div className={"flex gap-4 items-center"}>
                        <img src="/img/def.png" alt=""/>
                        <div className="flex-col items-center">
                            <h3 className="text-lg font-bold text-[#000000]">{bonus.memberData.name}</h3>
                            <p className="text-[#818C99]">{bonus.memberData.address}</p>
                        </div>
                            <button className={"py-2 px-4 bg-[#007AFE] rounded-[10px]"} onClick={() => setMemberId(bonus)}>
                                Открыть
                            </button>
                    </div>
                    <div className={"flex flex-col gap-2 w-full"}>
                    <div className={"text-black"}>Накоплено</div>
                        <div className="flex items-center w-full justify-between">
                            {Array.from({length: 6}, (_, i) => (
                                <div
                                    key={i}
                                    className={`h-1 w-[15%] rounded-full ${
                                        i < bonus.amount ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                </>
            ))}
        </div>
    );
};

export default BonusList;
