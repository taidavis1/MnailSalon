import React from "react";
import spapic from "../img/spapic.png"
export default function Contact(){

    return (
        <section className = "space-y-2 pb-5 md:pb-12 ">
            <div className="bg-gpage3 bg-no-repeat lg:bg-center bg-cover h-[300px] lg:h-[480px] relative">
                <div className="font-newFont top-8 lg:top-12 -left-12 lg:-left-1/4 w-full absolute text-3xl h-full flex items-center justify-center cursor-pointer text-black lg:text-5xl">
                    <h2 className="">Contact Us</h2>
                </div>
            </div>
            <div className="mx-auto md:max-w-screen-2xl cursor-pointer">
                <div className="grid grid-cols-1 text-justify md:gap-8 lg:grid-cols-3 ">
                    <div className="col-span-2 md:w-full w-screen p-4 space-y-4 lg:space-y-8 h-96 transition ease-in-out duration-200 delay-100 hover:opacity-50">
                        <img src={spapic} alt="" />
                    </div>

                    <div className="p-4 lg:mt-20 space-y-4 lg:space-y-8 lg:text-justify lg:grid justify-center text-center">
                        <div className="">
                            <div className="grid grid-cols-1 p-4 space-y-5">
                                <div>
                                    <span className="text-3xl tracking-wider">See us in person</span>
                                </div>
                                <div className="space-y-3">
                                   <p className="font-newFont">We love our customers and welcome them to visit during our normal business hours of 10am to 7:30pm, Monday through Friday.</p>
                                   <ul className="space-y-2 font-semibold">
                                        <li>
                                            <a className="transition text-black t-underline t-underline-black border-b-yellow-500" target="_blank"  rel="noreferrer" href = "https://www.google.com/maps/place/NAILS+TECH/@39.125234,-76.5347105,15z/data=!4m6!3m5!1s0x89b7feb081c4ffd5:0xc692714eadeeba94!8m2!3d39.125234!4d-76.5347105!16s%2Fg%2F1tlqqwsn?entry=ttu">
                                                Address: 308 Coit Rd #200, Plano, TX 75075
                                            </a>
                                        </li>
                                        <li>
                                            <a className="transition text-black t-underline t-underline-black border-b-yellow-500" href="tel:14104376300">
                                                Phone#: (972) 943-0322
                                            </a>
                                        </li>
                                        <li>
                                            <a className="transition text-black t-underline t-underline-black border-b-yellow-500" href="mailto:dv_nailsspa@yahoo.com">
                                                Email: mnails@gmail.com
                                            </a>
                                        </li>
                                   </ul>
                                </div>
                                <hr></hr>
                                <div>
                                    <div className="font-semibold text-lg">Business Hours:</div>
                                    <ul className="space-y-4 text-sm mt-4">
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Mon: 10:00 am - 7:30 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Tues: 10:00 am - 7:30 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Wed: 10:00 am - 7:30 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Thu: 10:00 am - 7:30 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Fri: 10:00 am - 7:30 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Sat: 10:00 am - 7:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span href="" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Sun: 12:00 pm - 6:00 pm
                                            </span>
                                        </li>
                                    </ul>
                                    <button className=" mt-5 py-3 transition ease-in-out duration-200 delay-100 group border-main-color hover:bg-main-color px-12 border-[1px]">
                                       <span className=" transition ease-in-out duration-200 delay-100 text-lg group-hover:text-white">
                                            Book Now
                                       </span>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid justify-items-center mt-96 pt-72">
            <iframe className="w-full md:px-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.0576374309658!2d-96.76750532313976!3d33.00225587357038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c22114ed50c57%3A0xf813007a332e70df!2sM%20Spa%20%26%20Beauty%20Nails!5e0!3m2!1sen!2sus!4v1707705637970!5m2!1sen!2sus"  height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>

    )
    
}