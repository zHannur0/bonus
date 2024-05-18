import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const BonusMember = ({ memberId }) => {
    const router = useRouter();
    const id = String(router.query.id);
    const [code, setCode] = useState(null);

    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearInterval(timerId);
        } else {
            setCode(null);
            setTimeLeft(30);
        }
    }, [timeLeft]);

    const fetchBonuses = async () => {
        if(router.isReady && id && memberId.memberData.memberId)
        try {
            const response = await axios.get(`https://floating-cliffs-29386-36b6181e9613.herokuapp.com/order/code/${id}/${memberId.memberData.memberId}`, {
                headers: {
                    'Accept': '*/*'
                }
            });
            setCode(response.data);
        } catch (error) {
        }
    };

    return (
        <div className="p-4 bg-white rounded-md">
            <div className="flex flex-col p-4 mb-4 bg-[#F7F7F7] rounded-lg w-full gap-4">
                <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-start">
                        <h3 className="text-lg font-bold text-[#000000]">{memberId.memberData.name}</h3>
                        <p className="text-[#818C99]">{memberId.memberData.address}</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <img src="/img/def.png" alt="" className="w-[65px] h-[65px]" />
                    <div className="flex flex-col gap-4 w-full text-sm">
                        <div className="text-black">Накоплено</div>
                        <div className="flex items-center w-full justify-between gap-2">
                            {Array.from({ length: 6 }, (_, i) => (
                                <div
                                    key={i}
                                    className={`h-1 w-[15%] rounded-full ${
                                        i < memberId.amount ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {
                code ? (
                    <div className="p-4">
                        <p className="text-lg font-medium text-black">Скажите код: <span className="font-bold">{code}</span></p>
                        <p className="text-gray-500">Код аннулируется через: <span
                            className="font-bold">{timeLeft}</span> сек.</p>
                    </div>
                ) : (
                    <div className={"flex flex-col gap-2 text-sm"}>
                        <button className={"w-full bg-[#007AFE] p-2 rounded-lg"} onClick={fetchBonuses}>
                            Добавить кружку кофе
                        </button>
                        {memberId.amount > 0 &&
                            <Link href={`/${id}/gifts`}>
                                <button className={"w-full bg-[#09C151] p-2 rounded-lg"}>Забрать награду</button>
                            </Link>
                        }
                    </div>
                )
            }


        </div>
    );
};

export default BonusMember;
