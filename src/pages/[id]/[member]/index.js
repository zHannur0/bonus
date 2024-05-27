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
    const member = String(router.query.member);
    useEffect(() => {
        const fetchBonuses = async () => {
            try {
                const response = await axios.get(`https://floating-cliffs-29386-36b6181e9613.herokuapp.com/bonus/${id}/${member}`, {
                    headers: {
                        'Accept': '*/*'
                    }
                });
                setBonuses(response.data);
            } catch (error) {
            }
        };

        if(router.isReady && id && member) {
            fetchBonuses();
        }
    }, [router.isReady,id, member]);

    return (
        <MainLayout>
                <BonusMember memberId={bonuses}></BonusMember>
        </MainLayout>
    );
}