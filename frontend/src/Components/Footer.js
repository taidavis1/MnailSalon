import {React} from "react"
import Logo from "../img/Logo.png";

export default function Footer(){
    return(
        <footer className="bg-white cursor-pointer">
            <div className="mx-auto max-w-screen-xl px-6 pb-6 pt-16 lg:px-8 lg:pt-24">
                <div className="grid lg:space-x-12 grid-cols-1 gap-12 lg:grid-cols-3">
                    <div className="grid justify-items-center">
                        <div>
                            <div className=" flex items-center flex-col">
                                <h2 className="flex md:hidden text-2xl font-Lora italic tracking-wider font-bold text-gray-900">M Spa Beauty</h2>
                                <h2 className="flex md:hidden text-xl font-Lora italic font-thin tracking-wider text-gray-900">Lash & Nail</h2>
                            </div>
                            <img alt ="#" className="md:w-28 hidden md:flex" src={Logo} />
                        </div> 
                        <p className="mt-6 max-w-md tracking-wide leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                                    A leading nail salon located in the heart of Plano, Texas. Our salon is the perfect destination for those looking 
                                    to indulge in a bit of pampering and self-care, while also seeking innovative beauty solutions 
                                    tailored specifically to their needs.
                        </p>
                
                        <ul className="mt-8 flex justify-center gap-6 md:gap-8">
                            <li className="">
                                <a href="https://www.yelp.com/biz/m-spa-and-beauty-nails-plano-3" target="_blank" className="text-teal-700 transition hover:text-teal-700/75">
                                    <img src="https://img.icons8.com/fluent/30/000000/yelp.png"/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:mspabeautynails@gmail.com" target="_blank" className="text-teal-700 transition hover:text-teal-700/75">
                                    <img src="https://img.icons8.com/fluent/30/000000/gmail-new.png"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/mspabeautynails/" target="_blank" className="text-teal-700 transition hover:text-teal-700/75">
                                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com/maps/place/M+Spa+%26+Beauty+Nails/@33.0022604,-96.7675107,17z/data=!3m1!4b1!4m6!3m5!1s0x864c22114ed50c57:0xf813007a332e70df!8m2!3d33.0022559!4d-96.7649304!16s%2Fg%2F11bx1s17w_?entry=ttu" target="_blank" className="text-teal-700 transition hover:text-teal-700/75">
                                    <img src="https://img.icons8.com/fluency/30/google-logo.png"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">About Us</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a href="/" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a  href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a  href="/Gallery" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Galery
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.lldtek.org/salon/appt/VkZoZk1UQXdPREk9" target="_blank" className="transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Booking
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Services</p> 
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a target="_blank" href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Manicure
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Pedicure
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Waxing
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Polish Change
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Eyelash Extension
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Eyebrows Laminate
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Eyebrows Microblading
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Business Hours</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Mon: 9:30 am - 7:30 pm
                                    </a>
                                </li>
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Tues: 9:30 am - 7:30 pm
                                    </a>
                                </li>
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Wed: 9:30 am - 7:30 pm
                                    </a>
                                </li>
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Thu: 9:30 am - 7:30 pm
                                    </a>
                                </li>
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Fri: 9:30 am - 7:30 pm
                                    </a>
                                </li>
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Sat: 9:00 am - 7:00 pm
                                    </a>
                                </li>
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Sun: 12:00 pm - 6:00 pm
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Contact Us</p>
                            <ul className="mt-8 space-y-5 text-sm">
                                <li>
                                    <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <a href="mailto:mspabeautynails@gmail.com" className="flex-1 text-gray-700">mspabeautynails@gmail.com</a>
                                    </a>
                                </li>
      
                                <li>
                                    <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="tel:9729430322">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
      
                                        <span className="flex-1 text-gray-700">(972) 943-0322</span>
                                    </a>
                                </li>
      
                                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    </svg>
                                    <a  target="_blank"  rel="noreferrer" href = "https://maps.app.goo.gl/BsqTK3fUdE9D3pCd8" className="-mt-0.5 flex-1 not-italic text-gray-700">
                                        308 Coit Rd #200, Plano, TX 75075                                   
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
      
                <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm text-gray-500">
                            <span className="block sm:inline">All rights reserved.</span>
                        </p>  
        
                        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                            &copy; 2024 M Spa & Beauty Nails
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};