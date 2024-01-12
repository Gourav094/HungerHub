import logo from "../Images/logo.png";
import { useState, useContext, useEffect } from "react";
import { Link, json } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
import swal from "sweetalert";
const Header = () => {
    const [btnName, setbtnName] = useState("Login");

    const [Hovered, setHovered] = useState(false);

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items)
    const [Menu,setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!Menu)
    }

    const handleClick = () => {
        if (btnName === "Login" && loggedInUser === '') {
            swal('Ooh, you forgot to add username', 'Please Enter Username')
        }
        else {
            btnName === "Login" ? setbtnName("Logout") : (setbtnName("Login"));
        }
    }
    return (

        <div className="md:flex md:justify-between md:place-items-center shadow-md py-1 max-w-full">
            <div className="logo flex justify-between items-center">
                <span>
                    <Link to={"/"}>
                        <img className="w-32 h-18 md:ml-20" alt="not rendered" src={logo} />
                    </Link>
                </span>
                <span className="cursor-pointer text-xl md:hidden pr-6">
                    <i className="fa-solid fa-bars" onClick={handleMenu}></i>
                </span>
            </div>
            <div className={`text-md text-gray-800 font-medium md:mr-20 overflow-hidden md:opacity-100 md:pointer-events-auto ${Menu === true ? 'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'}`}>
                <ul className="md:flex text-lg p-3 md:static z-[2] md:z-auto absolute bg-white w-full transition-all ease-in duration-700">
                    <li className="p-2 m-2 transition hover:text-orange-400"><Link to="/">Home</Link></li>
                    <li className="p-2 m-2 transition hover:text-orange-400"><Link to="/about">About</Link></li>
                    <li className="p-2 m-2 transition hover:text-orange-400"><Link to="/contact">Contact us</Link></li>
                    <li className="p-2 m-2 transition hover:text-orange-400"><Link to="/cart">
                        Cart({cartItems.length})
                    </Link></li>

                    <li className="p-2 m-2">Status: {onlineStatus ? " online" : "offline"}</li>
                    <button className="login p-2 m-2 transition hover:text-orange-400"
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
                    <div>
                    {Hovered === "true" && btnName !== "Login" && (
                        <div className="focus:outline-none md:mt-20 md:-ml-24 min-h-[30px] absolute cursor-pointer shadow py-2 px-3 bg-white text-gray-500 text-sm">
                            <li  onClick={() => {
                                setbtnName("Login")
                                setHovered("false")
                            }}
                            >
                                click to Logout
                            </li>
                            
                        </div>
                    )}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Header;
