import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
    const [btnName, setbtnName] = useState("Login");

    return (

        <div className="header">
            <div className="logo">
                <img className="logo" alt="not rendered" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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
