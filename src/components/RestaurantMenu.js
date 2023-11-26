import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    //created a custom hook to make code cleaner
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer /> 
    }
    const { name, areaName, cuisines, avgRatingString, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)

    return (
        <div className="container">
            <div className="restaurant-details">
                <div className="details">
                    <p id="name">{name}</p>
                    <p id="cuisines">{cuisines.join(", ")}</p>
                    <p id="location">{areaName}</p>

                </div>
                <div id="rating">{avgRatingString} star</div>
            </div>
            <hr></hr>
            <div className="price">
                <p id="cost">{costForTwoMessage}</p>
            </div> 
            <hr></hr>
            <ul>
                    {itemCards.map((item) => (

                        <li key = {item.card.info.id}>
                            {item.card.info.name}
                        </li>
                    ))}
                </ul>
            {/* <div className="recommended">
                <div className="main">

                    <button className="recommend-btn">
                        <h3>Recommended (20)</h3>
                    </button>

                    <div className="Items">

                        <div className="item">

                            <div className="item-description">
                                <h3 id="name">Crisppy Veg Burger</h3>
                                <span id="cost">price</span>
                            </div>
                            
                            <div className="item-image">
                                <span>Image</span>
                            </div>

                        </div>
                        
                        <div className="divider"></div>
                    </div>
                </div>  
            </div> */}
        </div>
    )
}

export default RestaurantMenu;