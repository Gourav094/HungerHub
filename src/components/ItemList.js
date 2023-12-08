import { useDispatch, useSelector } from "react-redux";
import {addItem,removeItem} from "../utils/cartSlice"
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {

    const cartItems = useSelector((state) => state.cart.items);

    const dispatch = useDispatch();

    const handleAddItem = ((item) => {
        dispatch(addItem(item));
    })

    const handleDeleteItem = ((item) => {
        dispatch(removeItem());
    })

    const countOccurence = (itemId) => {
        const occurence = cartItems.filter((cartItem) => cartItem?.card?.info?.id === itemId)
        return occurence.length;
    }
    return (
        <div>
            {/* show description for each items */}
            {items.map((item,index) => (
                <div key={index} className="border-b-2 p-2 my-2 border-gray-200 flex justify-between items-center">
                    <div className="mr-4 max-w-[calc(100% - 144px)]">
                        <div className="py-2 flex flex-col text-gray-800">
                            <span className="font-semibold text-gray-700">{item?.card?.info?.name} </span>
                            {/* if price property is not getting from api then can use condition for property name */}
                            <span className="text-sm"> ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-5">{item?.card?.info?.description}</p>
                    </div>

                    <div className="ml-2 min-w-[118px] p-1 relative">

                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-28 h-24 rounded-md" />

                        <div className="absolute inset-x-0 bottom-0 text-center ">

                            <button className="bg-white font-semibold shadow-lg rounded-md text-xs text-green-500 p-2 w-3/4" >
                                    <i className="fa-solid fa-minus pr-3" onClick={() => {handleDeleteItem(item)}}></i>
                                    {countOccurence(item?.card?.info?.id) === 0 ? ("Add"):countOccurence(item?.card?.info?.id)}
                                    <i className="fa-solid fa-plus pl-3" onClick={() => {handleAddItem(item)}}></i>
                            </button>
                            
                        </div>

                    </div>
                </div>
                
            ))}
        </div>
    )
}
export default ItemList;