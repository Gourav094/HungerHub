import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();

    //created a custom hook to make code cleaner
    const resInfo = useRestaurantMenu(resId);

    const [showIndex,setshowIndex] = useState(0);
    console.log(resInfo)
    if (resInfo === null) {
        return;
    }
    const { name, areaName, cuisines, avgRatingString, costForTwoMessage,sla ,feeDetails} = resInfo?.cards[0]?.card?.card?.info;
    console.log(resInfo?.cards[0]?.card?.card?.info)
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const  categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

    )

    return (
        <div className="max-w-3xl my-0 mx-auto font-[arial] pt-5 mb-5">
            <div className="flex justify-between mb-3 items-center">
                <div className="text-sm text-gray-500">
                    <p id="name" className="font-semibold text-gray-800 text-lg">{name}</p>
                    <p id="cuisines">{cuisines.join(", ")}</p>
                    <p id="location">{areaName}</p>
                    <p id="location" className="mt-2"><i className="fa-solid fa-person-biking mr-1"></i>
                        {feeDetails.message}</p>

                </div>
                <div id="rating" className="text-green-600 text-sm border p-1 px-2 rounded-md shadow cursor-pointer">{avgRatingString} 
                    <i className="fa-solid fa-star text-md" ></i>
                </div>
            </div>
            
            <hr className="border-b-2 border-dashed "></hr>

            <div className="price flex my-4 gap-6">
                <p className="font-semibold text-gray-700">
                    <i className="fa-solid fa-circle-half-stroke mr-1"></i>
                    {sla.deliveryTime} MINS</p>
                <p id="cost" className="font-semibold text-gray-700">{costForTwoMessage}</p>
            </div> 
            <hr className="mb-10 "></hr>
            
            {/* we need to add accodian for all categories*/}
            {categories.map((category,index) => (
                // controlled component -> controlling with showItem
                <RestaurantCategory
                    key={category?.card?.card?.title} 
                    data = {category?.card?.card}
                    showItem={(index === showIndex) ? true: false}   
                    setshowIndex = {() => {
                        (showIndex === index) ? setshowIndex(null):
                        setshowIndex(index)}}
                />

            ))}
            
        </div>
    )
}

export default RestaurantMenu;