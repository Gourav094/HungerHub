import { LOGO_URL } from "../utils/constant";
import { useState,useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
const Header = () => {
    const [btnName, setbtnName] = useState("Login");

    const[Hovered,setHovered] = useState("false");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    return (

        <div className="flex mb-6 justify-between place-items-center shadow-md">
            <div className="logo">
                <Link to={"/"}>
                <img className="w-40 ml-20" alt="not rendered" src={LOGO_URL} />
                </Link>
            </div>
            <div className="nav-items text-md text-gray-700 font-medium mr-20">
                <ul className="flex text-lg p-3">
                    <li className="p-2 m-2"><Link to="/">Home</Link></li>
                    <li className="p-2 m-2"><Link to="/about">About</Link></li>
                    <li className="p-2 m-2"><Link to="/contact">Contact us</Link></li>
                    <li className="p-2 m-2"><Link to="/Grocery">Grocery</Link></li>
                    <li className="p-2 m-2">Cart</li>
                    <li className="p-2 m-2">Status: {onlineStatus ? " online":"offline"}</li>
                    <button className="login" 
                        onClick={() => {
                            btnName === "Login" ? setbtnName("Logout") : (setbtnName("Login"));
                        }}
                        onMouseEnter = {()=>{setHovered("true")}}
                        onMouseLeave = {()=>{setHovered("false")}}

                    >{btnName === "Login"?btnName:loggedInUser }</button>
                    {Hovered === "true" && btnName !== "Login" &&(
                        
                        <div>
                            <li className="focus:outline-none mt-12 -ml-16 absolute cursor-pointer shadow-md border-t-2 border-orange-400 py-2 px-3 " onClick={()=>
                                {
                                    setbtnName("Login")
                                    setHovered("false")
                                }
                            }>Logout</li>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Header;
