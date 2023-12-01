import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (

        <div className="flex mb-3 justify-between place-items-center shadow-md">
            <div className="logo">
                <img className="w-40 ml-2" alt="not rendered" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex text-lg p-3">
                    <li className="p-2 m-2"><Link to="/">Home</Link></li>
                    <li className="p-2 m-2"><Link to="/about">About</Link></li>
                    <li className="p-2 m-2"><Link to="/contact">Contact us</Link></li>
                    <li className="p-2 m-2"><Link to="/Grocery">Grocery</Link></li>
                    <li className="p-2 m-2">Cart</li>
                    <li className="p-2 m-2">Status: {onlineStatus ? " online":"offline"}</li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
