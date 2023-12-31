import { Link } from "react-router-dom";
import User from "./User";
import UserClass from "./UserClass";
import banner from "../Images/about-banner.jpg"

const About = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${banner})`, width: "100%", height: '55vh',backgroundSize:'cover' }} className="md:bg-center bg-no-repeat"></div>
            
            <div className="max-w-6xl my-0 text-center mx-auto pb-20 px-4">
                <h3 className="text-lg py-10">We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
                    <br />
                    The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India.
                </h3>
                <h2 className="text-3xl tracking-wider">Where Do You Belong?</h2>
            </div>
            <div className="bg-orange-500 h-80">
                <h2 className="text-gray-100 text-center md:p-28 tracking-wide md:text-3xl pt-24 px-2">Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, 
                "Let's do this."</h2>
            </div>
            <div className="max-w-6xl my-0 py-14 px-6 mx-auto">
                <div className="md:mx-12 py-8 md:px-12 md:text-center">
                    <h3 className="text-4xl font-semibold text-gray-800 mb-11 tracking-wider">What’s In Store For The Future?</h3>
                    <h4 className="text-xl tracking-wide">HungerHub has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings.</h4>
                </div>
            </div>
            <hr className="mb-16 border-2"/>
            <div className="max-w-6xl mb-20 py-12 px-6 mx-auto lg:flex gap-40">
                <div className="md:mr-6 mb-7 md:text-left text-center">
                    <h1 className="text-5xl tracking-widest px-4">Changing <br/>
                    <span className="font-semibold"> the game</span></h1>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="max-w-[35%] text-center py-4 px-1 rounded border border-orange-500">
                        <h2 className="inline-block font-bold text-2xl">150000+</h2>
                        <h3 className="inline-block">Restaurant Partners Countrywide</h3>
                    </div>
                    <div className="max-w-[35%] text-center py-4 px-1 rounded border border-orange-500">
                        <h2 className="inline-block font-bold text-2xl">150000+</h2>
                        <h3 className="inline-block">Restaurant Partners Countrywide</h3>
                    </div>
                    <div className="max-w-[35%] text-center py-4 px-1 rounded border border-orange-500">
                        <h2 className="inline-block font-bold text-2xl">150000+</h2>
                        <h3 className="inline-block">Restaurant Partners Countrywide</h3>
                    </div>
                </div>
                
            </div>
            <div className="bg-purple-500 h-48 text-center py-20">
                <div className="pb-10">
                    <i className="fa-brands fa-instagram text-2xl text-gray-100 pr-10 cursor-pointer"></i>
                    <i className="fa-brands fa-linkedin text-2xl text-gray-100 pr-10 cursor-pointer" ></i>
                    <Link target="_blank" to={"https://twitter.com/Gouravgarg094"}><i className="fa-brands fa-twitter text-2xl text-gray-100 pr-10 cursor-pointer"></i></Link>
                    <i className="fa-brands fa-facebook text-2xl text-gray-100 pr-10 cursor-pointer"></i>
                    <i className="fa-brands fa-whatsapp text-2xl text-gray-100 pr-10 cursor-pointer"></i>
                </div>
                <span className="text-gray-100">©2023 Gourav garg</span>
            </div>
            {/* <UserClass name={"child1"} location={"india"} /> */}
        </div>
    )
}

export default About;