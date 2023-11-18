import Restaurantcard from "./RestaurantCard";
import resList from "../utils/mockData";



const Body = () => {
    return (
        <div className="Body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        console.log("button clicked")
                    }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    resList.map(restaurant => (
                        <Restaurantcard key={restaurant.info.id} resData={restaurant} />
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Body;