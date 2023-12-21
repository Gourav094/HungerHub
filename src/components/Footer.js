import { LOGO_URL } from "../utils/constant";
const Footer = () => {
    return ( 
        <div className="bg-gray-950 max-w-full">
            <div className="lg:flex justify-center text-gray-400 py-10 pl-20 gap-36">
                <h1 className="text-2xl pt-4 pb-3">HungerHub</h1>
                <div>
                    <ul>
                        <li className="font-bold text-md py-2 text-gray-200">Company</li>
                        <li className="py-2">About</li>
                        <li className="py-2">Carrer</li>
                        <li className="py-2">Team</li>
                        <li className="py-2">Grocery</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="font-bold text-md py-2 text-gray-200">Contact Us</li>
                        <li className="py-2">Help & Support</li>
                        <li className="py-2">Partner with us</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="font-bold text-md py-2 text-gray-200">Legal</li>
                        <li className="py-2">Privacy Policy</li>
                        <li className="py-2">Terms & condition</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="font-bold text-md py-2 text-gray-200">We deliver to:</li>
                        <li className="py-2">Bangelore</li>
                        <li className="py-2">Gurgaon</li>
                        <li className="py-2">Hyderabad</li>
                        <li className="py-2">Chandigarh</li>
                        <li className="py-2">Delhi</li>
                    </ul>
                </div>
            </div>
            <div className="text-gray-400 text-center pb-8">
                <span className="">© 2023 Gourav garg</span>
            </div>
        </div>
    )
}
export default Footer;