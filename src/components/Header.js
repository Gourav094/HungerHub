import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (

        <div className="header">
            <div className="logo">
                <img className="logo" alt="not rendered" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/Grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li>Status: {onlineStatus ? " online":"offline"}</li>
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
