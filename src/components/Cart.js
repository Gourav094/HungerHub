import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";
import cart from "../Images/clear-cart.jpg" ;
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const [totalPrice,settotalPrice] = useState(0);

    useEffect(() => {
        const updated = cartItems.reduce(
        (total,cartItem) => total + (cartItem.card.info.price || cartItem.card.info.defaultPrice),0)

        settotalPrice(updated/100);
    },[cartItems]);

    
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
        <div className="bg-gray-100 h-fit">
            <div className="py-10 text-center">
                <h1 className="pb-4 font-semibold text-xl tracking-wider">Free Shipping on order above Rs99</h1>
                <button className="border bg-orange-400 pb-1 px-2 rounded text-white" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="max-w-[1100px] my-0 mx-auto flex gap-10">
                <div className="bg-white w-3/5 min-h-[60vh] shadow py-4 px-6">
                    <ItemList items = {cartItems}/>
                </div>    
                <div className="bg-white w-1/3 h-fit shadow py-4 px-8 text-gray-600">
                    <h1 className="font-semibold text-2xl py-4 text-gray-950">Summary</h1>

                    <h1 className="font-semibold text-md py-2 text-gray-950">Do You have a promocode?</h1>

                    <div className="flex justify-between">
                        <h1 className="text-md py-2">Subtotal</h1>
                        <h1 className="text-md py-2">
                        ₹{totalPrice}
                        </h1>
                    </div>

                    <div className="flex justify-between text-sm">
                        <h1 className="text-md py-2">Estimated Shipping</h1>
                        <h1 className="py-2">
                        {totalPrice >= 100 ? (
                            <span>
                                <span className="line-through pr-1">₹30</span>
                                <span className="text-green-600">Free</span>
                            </span>
                        ): ("₹30")}
                        </h1>
                    </div>

                    <div className="flex justify-between text-sm">
                        <h1 className="text-md py-2">Estimated Tax</h1>
                        <h1 className="text-md py-2">₹50</h1>
                    </div>

                    <div className="flex justify-between text-sm">
                        <h1 className="text-md py-2">Discount</h1>
                        <h1 className="py-2">- ₹50</h1>
                    </div>

                    <hr className="border my-3"/>

                    <div className="flex justify-between">
                        <h1 className="text-md font-semibold">Total</h1>
                        <h1 className="text-md ">
                            ₹{totalPrice >= 100 ? totalPrice:totalPrice+30}
                            </h1>
                    </div>

                    <hr className="border my-3"/>

                    <div className="mt-6">
                        <button className="border bg-green-700 text-white rounded-3xl py-3 px-4 w-full hover:opacity-90">Checkout</button>
                    </div>
                </div>
            </div>    
        </div>
    )
}
export default Cart;                