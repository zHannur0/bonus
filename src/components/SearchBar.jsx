const SearchBar = ({filter}) => {
    return (
        <div className="flex items-center px-2 w-[90%] bg-[#ECEDF0] rounded-full">
            <img src="/img/SearchBlack.svg" alt="Search" className="w-[15px] h-[15px] ml-2"/>
            <input
                type="text"
                placeholder="Поиск"
                className="w-full p-2 ml-2 text-gray-500 bg-transparent focus:outline-none"
                onChange={(event) => filter(event.target.value)}
            />
        </div>
    );
};

export default SearchBar;