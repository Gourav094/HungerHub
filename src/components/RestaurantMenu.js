import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();

    //created a custom hook to make code cleaner
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer /> 
    }
    const { name, areaName, cuisines, avgRatingString, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const  categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

    )

    return (
        <div className="max-w-3xl my-0 mx-auto font-[arial] pt-5 mb-5">
            <div className="flex justify-between mb-3 items-center">
                <div className="text-sm text-gray-500">
                    <p id="name" className="font-semibold text-black text-lg">{name}</p>
                    <p id="cuisines">{cuisines.join(", ")}</p>
                    <p id="location">{areaName}</p>

                </div>
                <div id="rating">{avgRatingString} star</div>
            </div>
            <hr className="border-b-2 border-dashed "></hr>
            <div className="price">
                <p id="cost" className="font-semibold my-3 text-gray-800">{costForTwoMessage}</p>
            </div> 
            <hr className="mb-10 "></hr>
            
            {/* we need to add accodian for all categories*/}
            {categories.map((category,index) => (
                <RestaurantCategory key={index} data = {category?.card?.card}/>
            ))}
            
        </div>
    )
}

export default RestaurantMenu;





{/* <ul>
                    {itemCards.map((item) => (

                        <li key = {item.card.info.id}>
                            {item.card.info.name}
                        </li>
                    ))}
                </ul> */}
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