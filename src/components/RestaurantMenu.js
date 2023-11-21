import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams} from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
    const [resInfo,setresInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchData();
    } ,[])
    
    const fetchData = async () => {
        const data =await fetch(MENU_API + resId);
        const jsonData = await data.json();
        console.log(jsonData);
        setresInfo(jsonData);
    }

    if(resInfo === null){
        return <Shimmer/>
    }

    const {name,avgRatingString,costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    return (
        <div>
            <h1>This is restaurant menu page</h1>
            <h2>{name}</h2>
            <h2>{avgRatingString}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {itemCards.map((item) => (

                    <li key = {item.card.info.id}>
                        {item.card.info.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;