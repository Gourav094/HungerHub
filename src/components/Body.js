import Restaurantcard,{PromotedData} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [List, setList] = useState([])

    const [FilteredList, setFilteredList] = useState([])

    const [Searchtxt, setSearchtxt] = useState([]);

    const PromotedRestaurant = PromotedData(Restaurantcard);

    // This function is used to handle search option using Enter
    const HandleKeyPress = (e) => {
        if(e.key === "Enter"){
            const filterData = List.filter((res) => res.info.name.toLowerCase().includes(Searchtxt.toLowerCase()));
            setFilteredList(filterData);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6871407&lng=76.6646509&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        let resData = [];
        for (const each of json?.data?.cards) {
            if (each?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                resData = each?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            }
        }
        // console.log(json);
        setList(resData);
        setFilteredList(resData);
    };
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h2>Looks like You are offline! Please connect to internet</h2>
    }
    return (List.length === 0) ? (
        <Shimmer />
    ) : (
        <div className="body font-sans max-w-[1300px] my-0 mx-auto">
            <div className="flex py-2 pl-4 mb-3 gap-4 text-[16px]">
                <div className="search">
                    <input type="text"
                        className="rounded-3xl text-[14px] min-w-[400px] border-[1px] pl-4 py-[7px] border-solid border-black-100"
                        value={Searchtxt}
                        onChange={(e) => { 
                            setSearchtxt(e.target.value) 
                        }} 
                        onKeyPress={HandleKeyPress}
                        />
                        

                </div>
                <div>
                <button className="font-semibold cursor-pointer py-[5px] px-3 rounded-lg border-2 border-black-100 border-solid hover:bg-black hover:opacity-75 hover:text-white"
                        
                        onClick={() => {
                            const filterData = List.filter((res) => res.info.name.toLowerCase().includes(Searchtxt.toLowerCase()));

                            setFilteredList(filterData);
                        }}>
                        Search
                    </button>
                </div>
                <div>
                <button
                    className="font-semibold cursor-pointer py-[5px] px-4 rounded-lg border-2 border-black-100 border-solid hover:bg-black hover:opacity-75 hover:text-white"
                    onClick={() => {
                        const filterData = List.filter((res) => res.info.avgRating > 4);

                        setFilteredList(filterData);
                    }}
                >Top Rated Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    FilteredList.map(restaurant => (
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                            {/* <Restaurantcard resData={restaurant} />  */}
                            {restaurant.info.avgRating > 4 ? (<PromotedRestaurant resData={restaurant} />) : (<Restaurantcard resData={restaurant} />)}
                        </Link>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Body;