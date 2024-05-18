
const CategoryFilter = () => {
    return (
        <div className={"flex flex-col gap-[10px]"}>
            <h1 className={"text-lg font-bold"}>Категории</h1>
            <div className="flex gap-[5px]">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full">Все</button>
                <button className="px-4 py-2 bg-gray-200 rounded-full">Новое</button>
            </div>
        </div>

    );
};

export default CategoryFilter;
