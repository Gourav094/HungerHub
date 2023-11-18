import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo" alt="not rendered" src={LOGO_URL} />
                {/* <img className="logo" src="https://static.vecteezy.com/system/resources/previews/009/291/628/non_2x/restaurant-logo-design-vector.jpg" /> */}
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
