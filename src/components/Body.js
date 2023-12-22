import Restaurantcard,{PromotedData} from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import Footer from "./Footer";

const Body = () => {
    const [List, setList] = useState([])

    const [FilteredList, setFilteredList] = useState([])

    const [title,settitle] = useState();

    const [Searchtxt, setSearchtxt] = useState("");

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
        const data = await fetch("https://kind-puce-bull-tie.cyclic.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=30.6871407&lng=76.6646509&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // TO find restaurant data from all cards 
        let resData = [];
        for (const each of json?.data?.cards) {
            if (each?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                resData = each?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            }
        }
        console.log(json)
        setList(resData);
        setFilteredList(resData);
        settitle(json.data.cards[3].card.card.title)
    };
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h2>Looks like You are offline! Please connect to internet</h2>
    }
    const {loggedInUser,setUserName} = useContext(UserContext);
    
    return (List.length === 0) ? (
        <Shimmer />
    ) : (
        <div>
            <div className="body font-sans max-w-6xl my-10 mb-20 mx-auto">
                <div className="flex py-2 pl-4 mb-5 gap-4 text-[16px]">
                    <div className="search rounded-3xl border-[1px] border-solid border-gray-500 truncate">
                        <input type="text"
                            className="text-[14px] min-w-[380px] px-4 py-[5px] focus:outline-none"
                            placeholder={"Search"}
                            data-testid = "searchInput"
                            value={Searchtxt}
                            onChange={(e) => { 
                                setSearchtxt(e.target.value) 
                            }} 
                            onKeyPress={HandleKeyPress}
                            />
                        <i className="fa-solid fa-search text-gray-600 text-lg py-2 mr-2"></i>
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
                        className="hidden md:block font-semibold cursor-pointer py-[5px] px-4 rounded-lg border-2 border-black-100 border-solid hover:bg-black hover:opacity-75 hover:text-white"
                        onClick={() => {
                            const filterData = List.filter((res) => res.info.avgRating > 4);

                            setFilteredList(filterData);
                        }}
                    >Top Rated Restaurant</button>
                    </div>
                    <div className="search hidden md:block">
                        <span className="font-semibold">UserName : </span>
                        <input type="text"
                        data-testid = "userInput"
                            className="rounded-3xl text-[14px] border-[1px] mr-2 mt-1 px-3 py-[5px] border-solid border-gray-500"
                            value={loggedInUser}
                            maxLength={"18"}
                            onChange={(e) => { 
                                setUserName(e.target.value) 
                            }} 
                            />  
                    </div>
                </div>
                <div className="my-4 pl-10  font-bold text-2xl">
                    <h2>{FilteredList.length === 0 ? ("Oops! No Restaurant found"):title}</h2>
                </div>
                <div className="flex flex-wrap gap-4 md:mx-4 mx-12 items-center pl-3 my-5">
                    {
                        FilteredList.map(restaurant => (
                            <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                                {/* <Restaurantcard resData={restaurant} />  */}
                                {restaurant.info.avgRating >= 4.5 ? (<PromotedRestaurant resData={restaurant} />) : (<Restaurantcard resData={restaurant} />)}
                            </Link>
                        ))
                    }
                    {
                        FilteredList.map(restaurant => (
                            <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                                {/* <Restaurantcard resData={restaurant} />  */}
                                {restaurant.info.avgRating >= 4.4 ? (<PromotedRestaurant resData={restaurant} />) : (<Restaurantcard resData={restaurant} />)}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Body;