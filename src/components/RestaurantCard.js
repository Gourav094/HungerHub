import {CDN_URL} from "../utils/constant";

const Restaurantcard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        cuisines,
        name,
        avgRating,
        costForTwo,
        
    } = resData?.info;
    
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <p id="cuisines">{cuisines.join(", ")}</p>
            <p class = "rating">{avgRating}  
                <circle>
                    <i class="fa-regular fa-star" id="icon"></i>
                </circle>
            </p>
            <p>{costForTwo}</p>
        </div>
    )
}

export default Restaurantcard;