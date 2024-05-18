import { Inter } from "next/font/google";
import MainLayout from "@/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Gifts() {
    return (
        <MainLayout>
            <div className={"text-black p-4 font-medium text-lg"}>
                Мои награды
            </div>
        </MainLayout>
    );
}