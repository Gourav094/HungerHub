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
        <div data-testid = "resCard" className="res-card m-[10px] w-60 rounder-2xl font-[arial] transition duration-200 hover:cursor-pointer hover:scale-95 hover:duration-200">
            <img className="w-[100%] h-[150px] rounded-2xl" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <div className="p-1 ml-1  text-gray-600 text-sm">

                <h3 className="mt-2 mb-1 truncate text-gray-700  font-bold text-[16px] " >{name}</h3>
                <p className="truncate" id="cuisines">{cuisines.join(", ")}</p>
                <p className = "rating">{avgRating}  
                    <span className="text-green-600 ">
                        <i className="fa-regular fa-star" id="icon"></i>
                    </span>
                </p>
                <p>{costForTwo}</p>
            </div>
        </div>
    )
}

// creating higher order funtion that takes component and return component
export const PromotedData = (Restaurantcard) => {  
    //return a component that also return some JSX
    return (props) => {
        // console.log(props);
        return (
            <div className="group">
                <label className="rounded-md absolute p-2 m-3 z-20 bg-red-500 text-white text-sm font-medium duration-200 group-hover:opacity-0">
                    Best seller
                </label>
                <Restaurantcard {...props}/>
            </div>
        )
    }
}

export default Restaurantcard;