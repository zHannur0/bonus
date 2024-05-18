import Header from "@/components/Header";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const MainLayout = ({children}) => {
    return (
        <div className={`min-h-screen bg-[#F4F7FA] ${inter.className}`}>
            <Header />
            <div className={"flex flex-col gap-[30px] overflow-auto scrollbar-hide"}>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
