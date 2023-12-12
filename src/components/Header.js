import logo from "../Images/logo.png";
import { useState, useContext, useEffect } from "react";
import { Link, json } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
import swal from "sweetalert";
const Header = () => {
    const [btnName, setbtnName] = useState("Login");

    const [Hovered, setHovered] = useState("false");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items)

    const handleClick = () => {
        if (btnName === "Login" && loggedInUser === '') {
            swal('Ooh, you forgot to add username', 'Please Enter Username')
        }
        else {
            btnName === "Login" ? setbtnName("Logout") : (setbtnName("Login"));
        }
    }
    return (

        <div className="flex justify-between place-items-center shadow-md py-1">
            <div className="logo">
                <Link to={"/"}>
                    <img className="w-40 ml-20" alt="not rendered" src={logo} />
                </Link>
            </div>
            <div className="nav-items text-md text-gray-700 font-medium mr-20">
                <ul className="flex text-lg p-3">
                    <li className="p-2 m-2 transition hover:text-orange-400"><Link to="/">Home</Link></li>
                    <li className="p-2 m-2 transition hover:text-orange-400"><Link to="/about">About</Link></li>
                    <li className="p-2 m-2 transition hover:text-orange-400"><Link to="/contact">Contact us</Link></li>
                    <li className="p-2 m-2 transition hover:text-orange-400"><Link to="/contact">Grocery</Link></li>

                    <li className="p-2 m-2 transition hover:text-orange-400"><Link to="/cart">
                        Cart({cartItems.length})
                    </Link></li>

                    <li className="p-2 m-2">Status: {onlineStatus ? " online" : "offline"}</li>
                    <button className="login"
                        onClick={() => {
                            handleClick()
                        }}
                        onMouseEnter={() => {
                            setTimeout(() => {
                                setHovered("true")
                            }, 500)
                        }}
                        onMouseLeave={() => { setHovered("false") }}

                    >
                    {btnName === "Login" ?btnName :
                        (loggedInUser === '' ? 'Logout' : loggedInUser)
                    }</button>
                    {Hovered === "true" && btnName !== "Login" && (
                        <div>
                            <li className="focus:outline-none mt-11 -ml-24 absolute cursor-pointer shadow-lg py-2 px-3 bg-gray-300 text-white" onClick={() => {
                                setbtnName("Login")
                                setHovered("false")
                            }}
                            >
                                click to Logout
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Header;
