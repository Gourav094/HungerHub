import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";
import cart from "../Images/clear-cart.jpg" ;
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (cartItems.length === 0) ? (
        <div className="flex flex-col justify-center items-center text-gray-700 ">
            <img className="h-64 w-72 mt-14 pl-2" src={cart}/>
            <h1 className="text-xl font-semibold">Your cart is empty</h1>
            <p className="mt-2 mb-5">You can go to home page to view more restaurants</p>
            <button className="py-2 px-5 text-white bg-orange-500 cursor-pointer font-semibold text-md">
                <Link to="/">See Restaurants</Link>
            </button>
        </div>
    ):(
        <div className="bg-gray-100 h-screen">
            <div className=" w-6/12 my-0 mx-auto">
                <div className="py-10">
                    <button className="border bg-orange-400 py-1 px-2 rounded text-white" onClick={handleClearCart}>Clear Cart</button>
                </div>
                <div className="bg-white  min-h-[60vh] shadow">
                    <div className="py-4 px-6">
                        <ItemList items = {cartItems}/>
                    </div>
                </div>    
            </div>            
        </div>
    )
}
export default Cart;                