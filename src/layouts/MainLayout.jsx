import Header from "@/components/Header";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const MainLayout = ({children, filter}) => {
    return (
        <div className={`min-h-screen bg-[white] ${inter.className}`}>
            <Header filter={filter}/>
            <div className={"flex flex-col gap-[30px] overflow-auto scrollbar-hide"}>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
