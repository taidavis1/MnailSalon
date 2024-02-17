import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYelp  , faFacebook , faInstagram , faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faAddressCard} from "@fortawesome/free-regular-svg-icons";
import Logo from "../img/Logo.png";
function SocialTree(){
    return(
        <div className="flex font-newFont items-center justify-center py-6 px-4 flex-col overflow-y-hidden overflow-x-hidden bg-gradient-to-t from-red-100 to-amber-100 bg-center w-screen h-screen bg-cover bg-no-repeat">
            <div className= "w-32 mx-auto cursor-pointer">
                <img alt="#" src={Logo} className="rounded-lg w-full h-full transition ease-in-out delay-150 duration-200"/>
            </div>
            <div className="group md:my-7 mx-auto my-4 group hover:bg-rose-600 border-2 w-full h-16 md:w-4/5 md:h-20 rounded-lg border-rose-600 shadow-lg  hover:opacity-50 transition ease-in-out delay-150 duration-200">
                <a href = "https://www.yelp.com/biz/m-spa-and-beauty-nails-plano-3" target="_blank" rel="noreferrer">
                    <button className="w-full md:text-3xl group-hover:text-white text-rose-600 italic font-semibold h-full inline-flex items-center justify-center">
                        <FontAwesomeIcon className="mx-2 group-hover:text-white md:mx-4 overflow-hidden text-rose-500 transition ease-in-out delay-150 duration-200 text-3xl md:text-5xl" icon={faYelp}></FontAwesomeIcon>
                    Yelp</button>
                </a>
            </div>
            <div className="group mx-auto md:my-7 hover:bg-black my-4 border-2 group w-full h-16 md:w-4/5 md:h-20 rounded-lg border-black shadow-lg  hover:opacity-50 transition ease-in-out delay-150 duration-200">
                <a href = "http://mnail-lashplano.com/" target="_blank" rel="noreferrer">
                    <button className="w-full md:text-3xl italic group-hover:text-white font-semibold text-black h-full inline-flex items-center justify-center">
                        <FontAwesomeIcon className="mx-2 md:mx-4 text-4xl  group-hover:text-white md:text-5xl rounded-lg shadow-md transition ease-in-out delay-150 duration-200" icon={faAddressCard}></FontAwesomeIcon>
                    Website</button>
                </a>
            </div>
            <div className="group md:my-7 mx-auto my-4 group hover:bg-red-400 border-2 w-full h-16 md:w-4/5 md:h-20 rounded-lg border-main-color shadow-lg  hover:opacity-50 transition ease-in-out delay-150 duration-200">
                <a href = "https://www.instagram.com/mspabeautynails/" target="_blank" rel="noreferrer">
                    <button className="w-full h-full md:text-3xl group-hover:text-white text-main-color font-semibold italic inline-flex items-center justify-center mx-2">
                        <FontAwesomeIcon className="mx-2 md:mx-4  text-4xl md:text-5xl group-hover:text-white text-main-color " icon={faInstagram}></FontAwesomeIcon>
                    Instagram</button>
                </a>
            </div>
            <div className="group md:my-7 mx-auto hover:bg-green-500 group  my-4 border-2 w-full h-16 md:w-4/5 md:h-20 rounded-lg border-green-500 shadow-lg  hover:opacity-50 transition ease-in-out delay-150 duration-200">
                <a href = "https://www.google.com/maps/place/M+Spa+%26+Beauty+Nails/@33.0022559,-96.7649304,17z/data=!4m16!1m9!3m8!1s0x864c22114ed50c57:0xf813007a332e70df!2sM+Spa+%26+Beauty+Nails!8m2!3d33.0022559!4d-96.7649304!9m1!1b1!16s%2Fg%2F11bx1s17w_!3m5!1s0x864c22114ed50c57:0xf813007a332e70df!8m2!3d33.0022559!4d-96.7649304!16s%2Fg%2F11bx1s17w_?entry=ttu" target="_blank" rel="noreferrer" >
                    <button className="w-full md:text-3xl group-hover:text-white text-green-500 italic font-semibold h-full inline-flex items-center justify-center mx-2">
                        <FontAwesomeIcon className="mx-2 md:mx-4 text-4xl md:text-5xl rounded-lg group-hover:text-white text-green-500 " icon={faGoogle}></FontAwesomeIcon>
                    Google</button>
                </a>
            </div>
        </div>
    )
};
export default SocialTree;