import Restaurantcard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"

const Body = () => {
    const [List, setList] = useState([])

    const [FilteredList, setFilteredList] = useState([])

    const [Searchtxt, setSearchtxt] = useState([]);

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
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6871407&lng=76.6646509&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        let resData = [];
        for (const each of json?.data?.cards) {
            if (each?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                resData = each?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            }
        }
        console.log(json);
        setList(resData);
        setFilteredList(resData);
    };


    return (List.length === 0) ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"
                        className="search-box"
                        value={Searchtxt}
                        onChange={(e) => { 
                            setSearchtxt(e.target.value) 
                        }} 
                        onKeyPress={HandleKeyPress}
                        />
                        

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
                        <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><Restaurantcard resData={restaurant} /> </Link>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Body;