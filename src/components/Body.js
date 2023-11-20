import Restaurantcard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [List, setList] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

// SImple fetching data fom api but sometimes it can be empty so will better in writing in another form
    // const fetchData = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6871407&lng=76.6646509&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const jsonData = await data.json();

    //     console.log(jsonData);

    //     setList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }


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
    };



    // conditional rendering
    // if (List.length === 0) {
    //     return <Shimmer />
    // }
    // lets write the above code in ternary operator -- just the another way of writing

    return (List.length === 0) ? (
        <Shimmer />
        ) : (
        <div className="Body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filterData = List.filter((res) => res.info.avgRating > 4);
                        setList(filterData);
                    }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    List.map(restaurant => (
                        <Restaurantcard key={restaurant.info.id} resData={restaurant} />
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Body;