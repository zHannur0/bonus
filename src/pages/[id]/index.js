import { Inter } from "next/font/google";
import MainLayout from "@/layouts/MainLayout";
import axios from "axios";
import StoreList from "@/components/StoreList";
import {useEffect, useState} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterValue, setFilterValue] = useState("");

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('https://floating-cliffs-29386-36b6181e9613.herokuapp.com/member/all', {
                    headers: {
                        'Accept': '*/*'
                    }
                });
                setMembers(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    const filter = (value) => {
        setFilterValue(value);
    }
    return (
        <MainLayout filter={filter}>
            <div className={"bg-white"}>
                <StoreList members={members} value={filterValue}/>
                {/*<hr className={"w-full border-t border-[##D9D9D9]"}/>*/}
                {/*<div className={"w-full flex justify-center text-black mt-4"}>*/}
                {/*    {members.slice().filter((item)=> item.name.toLowerCase().includes(filterValue.toLowerCase())).length} партнера*/}
                {/*</div>*/}
            </div>
        </MainLayout>
    );
}