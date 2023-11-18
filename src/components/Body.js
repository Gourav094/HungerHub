import Restaurantcard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {

    const [List,setList] = useState(resList)

    return (
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