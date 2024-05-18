import { Inter } from "next/font/google";
import MainLayout from "@/layouts/MainLayout";
import BonusList from "@/components/BonusList";
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import BonusMember from "@/components/BonusMember";


export default function Bonus() {
    const [bonuses, setBonuses] = useState([]);
    const router = useRouter();
    const id = String(router.query.id);
    const [memberId, setMemberId] = useState(null);

    useEffect(() => {
            const fetchBonuses = async () => {
                try {
                    const response = await axios.get(`https://floating-cliffs-29386-36b6181e9613.herokuapp.com/bonus/all/${id}`, {
                        headers: {
                            'Accept': '*/*'
                        }
                    });
                    setBonuses(response.data);
                } catch (error) {
                }
            };

            if(router.isReady && id) {
                fetchBonuses();
            }
    }, [router.isReady,id]);

    return (
        <MainLayout>
            {!memberId ? (
                <BonusList bonuses={bonuses} setMemberId={setMemberId}/>
            ) : (
                <BonusMember memberId={memberId}></BonusMember>
            )}
        </MainLayout>
    );
}