import Restaurantcard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [List, setList] = useState([])

    const [FilteredList,setFilteredList] = useState([]) 

    const [Searchtxt, setSearchtxt] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);




    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6871407&lng=76.6646509&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        let resData = [];
        for (const each of json?.data?.cards) {
            if (each?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                resData = each?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            }
        }

        setList(resData);
        setFilteredList(resData);
    };


    return (List.length === 0) ? (
        <Shimmer />
    ) : (
        <div className="Body">
            <div className="filter">
                <div className="search">
                    <input type="text"
                        className="search-box"
                        value={Searchtxt}
                        onChange={(e) => { setSearchtxt(e.target.value) }} />
                    <button className="search-btn"
                    
                    onClick={() => { 
                        
                        const filterData = List.filter((res) => res.info.name.toLowerCase().includes(Searchtxt.toLowerCase()));

                        setFilteredList(filterData);
                        
                     }}>
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filterData = List.filter((res) => res.info.avgRating > 4);

                        setFilteredList(filterData);
                    }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    FilteredList.map(restaurant => (
                        <Restaurantcard key={restaurant.info.id} resData={restaurant} />
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Body;