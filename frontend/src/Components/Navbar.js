import {React , useState} from "react";
import Logo1 from "../img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF , faInstagram , faGoogle , faYelp} from "@fortawesome/free-brands-svg-icons";
import {faBarsStaggered ,faXmark , faPhone , faLocationDot} from "@fortawesome/free-solid-svg-icons"

function Navbar(){
    const [Click , setClick] = useState(false);
    const [Scroll , SetScroll] = useState(false);
    const Change_color = () => {
        if(window.scrollY >= 10){
            SetScroll(true);
        }
        else{SetScroll(false);}
    };
    window.addEventListener('scroll' , Change_color)
    const Icon_Style = {fontSize: '22',};
    return (
        <div className="">
            <nav className= {Scroll?"bg-white transition ease-out duration-200 delay-100 flex justify-between p-2 lg:justify-around lg:py-4 shadow-md w-full fixed top-0 left-0 right-0 z-10 ":"flex text-white justify-between p-2 lg:justify-around lg:py-4 bg-none w-full fixed top-0 left-0 right-0 z-10"}>
                <div className="flex items-center space-x-1 cursor-pointer group">
                    <img src={Logo1} alt="" className=" w-20 md:w-24 group-hover:opacity-70"/>
                </div>
                <div className={Scroll?"lg:hidden text-3xl cursor-pointer flex items-center text-black space-x-4": "lg:hidden space-x-4 blkock text-3xl cursor-pointer flex items-center text-[#3C6CA8]"}>
                    <div onClick={() => window.location.href = "tel:9729430322"} className={`${Scroll? "bg-green-400" : "border-0" } p-[6px] rounded-full`}>
                        <FontAwesomeIcon className= {`${Scroll? "text-white" : "text-green-400"} flex text-sm`} icon = {faPhone}/>
                    </div>
                    <div onClick={(e) => {e.preventDefault(); window.open("https://www.google.com/maps/place/M+Spa+%26+Beauty+Nails/@33.0022604,-96.7675107,17z/data=!3m1!4b1!4m6!3m5!1s0x864c22114ed50c57:0xf813007a332e70df!8m2!3d33.0022559!4d-96.7649304!16s%2Fg%2F11bx1s17w_?entry=ttu" , '_blank')}} className={`${Scroll? "" : "border-0" } p-2 rounded-full`}>
                        <FontAwesomeIcon className= "flex !text-xl text-sky-400" icon = {faLocationDot}/>
                    </div>
                    <div onClick={() => setClick(!Click)} className={Scroll?"lg:hidden transition text-3xl cursor-pointer flex items-center text-black space-x-4": "lg:hidden space-x-4 blkock text-3xl cursor-pointer flex items-center text-[#3C6CA8]"}>
                        {!Click? 
                            <FontAwesomeIcon className=" text-main-color" icon = {faBarsStaggered}/> : 
                            <FontAwesomeIcon className=" text-main-color" icon={faXmark} />
                        }
                    </div>
                </div>
                <div className= {Scroll? "lg:flex text-md hidden items-center space-x-12 text-xl capitalize text-black" : "lg:flex font-Lora text-md hidden items-center space-x-12 text-xl capitalize text-black" }>
                    <a className="flex hover:text-main-color transition ease-in-out delay-150 duration-200" href = "/">
                        Home
                    </a>
                    <a className="flex hover:text-main-color transition ease-in-out delay-150 duration-200" href = "/Services">
                        Services
                    </a>
                    <a className="flex hover:text-main-color transition ease-in-out delay-150 duration-200" href = "/Gallery">
                        Gallery
                    </a>
                    <a className="flex hover:text-main-color transition ease-in-out delay-150 duration-200" href = "/Contact">
                        Contact Us
                    </a>
                </div>
                <div className = {Scroll? "hidden lg:flex items-center space-x-12 text-black": "hidden lg:flex items-center space-x-12 text-white"}>
                    <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.instagram.com/mspabeautynails/">
                        <FontAwesomeIcon className="hover:text-rose-300 transition ease-in-out delay-150 duration-200" style={Icon_Style}  icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a className="cursor-pointer flex" target="_blank"  rel="noreferrer" href = "https://www.google.com/maps/place/M+Spa+%26+Beauty+Nails/@33.0022604,-96.7675107,17z/data=!3m1!4b1!4m6!3m5!1s0x864c22114ed50c57:0xf813007a332e70df!8m2!3d33.0022559!4d-96.7649304!16s%2Fg%2F11bx1s17w_?entry=ttu">
                        <FontAwesomeIcon className="hover:text-green-300" style={Icon_Style} icon={faGoogle}></FontAwesomeIcon>
                    </a>
                    <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.yelp.com/biz/m-spa-and-beauty-nails-plano-3">
                        <FontAwesomeIcon className="hover:text-red-400 transition ease-in-out delay-150 duration-200" style={Icon_Style}  icon={faYelp}></FontAwesomeIcon>
                    </a>
                    <button
                        className= {Scroll? "transition ease-in-out duration-200 delay-100 group border-main-color hover:bg-main-color border-[1px] group cursor-pointer px-4 py-3 capitalize":"hover:bg-white/20 duration-200 ease-in-out delay-100 bg-main-color group cursor-pointer px-4 py-3 capitalize"}>
                        <a href = "https://www.lldtek.org/salon/appt/VkZoZk1UQXdPREk9" target="_blank" className = {Scroll?"group-hover:text-white transition ease-in-out duration-200 tracking-wider uppercase":"tracking-wider uppercase"}>Book Now</a>
                    </button>
                </div>
            </nav>
            {Click?
                <nav className="overflow-hidden space-y-12 md:space-y-24 top-24 md:top-28 fixed p-6 w-screen h-screen bg-white transition duration-700 ease-out lg:hidden left-0 right-0 z-20  mx-auto  text-black">
                    <div className=" space-y-16 md:space-y-24 flex uppercase flex-col text-lg mt-12">
                        <a onClick={() => setClick(!Click)} className="" href="/">Home</a>
                        <a onClick={() => setClick(!Click)} className="" href="/Services">Services</a>
                        <a onClick={() => setClick(!Click)} className=" " href="/Gallery">Gallery</a>
                        <a onClick={() => setClick(!Click)} className="" href="/Contact">Contact us</a>
                        <button
                            className="hover:bg-black group  transition ease-out duration-200 cursor-pointer px-4 py-3 border-black border-2 capitalize tracking-wide">
                            <a target="_blank" href="https://www.lldtek.org/salon/appt/VkZoZk1UQXdPREk9" className = "group-hover:text-white">Book Now</a>
                        </button>
                    </div>
                    <div className="flex space-x-10 text-2xl justify-center">
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.instagram.com/mspabeautynails/">
                            <FontAwesomeIcon className="text-rose-300"  icon={faInstagram}></FontAwesomeIcon>
                        </a>
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.google.com/maps/place/M+Spa+%26+Beauty+Nails/@33.0022604,-96.7675107,17z/data=!3m1!4b1!4m6!3m5!1s0x864c22114ed50c57:0xf813007a332e70df!8m2!3d33.0022559!4d-96.7649304!16s%2Fg%2F11bx1s17w_?entry=ttu">
                            <FontAwesomeIcon className="text-green-300"  icon={faGoogle}></FontAwesomeIcon>
                        </a>
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.yelp.com/biz/m-spa-and-beauty-nails-plano-3">
                            <FontAwesomeIcon className="text-red-400" style={Icon_Style}  icon={faYelp}></FontAwesomeIcon>
                        </a>
                    </div>
                </nav>
                :null
            }
        </div>
    );
};

export default Navbar;