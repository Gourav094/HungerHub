const Shimmer = () => {
    return (
        <div className="mx-auto pl-3 my-4 max-w-6xl">
            <div className="flex py-2 pl-4 mb-5 gap-4 text-[16px]">
                    <div className="search rounded-3xl border-[1px] border-solid border-gray-300 truncate">
                        <input type="text"
                            className="text-[14px] min-w-[380px] px-4 py-[5px] focus:outline-none"/>
                    </div>
                    
                    <div className="search">
                        <input type="text"
                            className="rounded-3xl text-[14px] border-[1px] mr-2 mt-1 px-3 py-[5px] border-solid border-gray-300"/>  
                    </div>
                </div>
            <div className="flex flex-wrap gap-6 ">
                <div className=" w-60 h-64 m-2 bg-gray-300 p-2 rounded-lg"></div>
                <div className=" w-60 h-64 m-2 bg-gray-300 p-2 rounded-lg"></div>
                <div className=" w-60 h-64 m-2 bg-gray-300 p-2 rounded-lg"></div>
                <div className=" w-60 h-64 m-2 bg-gray-300 p-2 rounded-lg"></div>
                <div className=" w-60 h-64 m-2 bg-gray-300 p-2 rounded-lg"></div>
                <div className=" w-60 h-64 m-2 bg-gray-300 p-2 rounded-lg"></div>
                <div className=" w-60 h-64 m-2 bg-gray-300 p-2 rounded-lg"></div>
                <div className=" w-60 h-64 m-2 bg-gray-300 p-2 rounded-lg"></div>
                <div className=" w-60 h-64 m-2 bg-gray-300 p-2 rounded-lg"></div>
                <div className=" w-60 h-64 m-2 bg-gray-300 p-2 rounded-lg"></div>
            </div>
        </div>
    )
}

export default Shimmer;