import {React} from "react";
import nailIcon from "../img/nail.png";
import eyeLash from "../img/eyelashes.png";
import gelx from "../img/gelx.png";

export default function Home(){
    return(
        <section className="relative font-Lora overflow-x-hidden space-y-2 lg:space-y-8">
            <div className="w-screen bg-pagel bg-no-repeat lg:bg-center bg-cover h-screen relative">
                <div className="w-screen absolute lg:right-56 text-center top-1/3 px-3 py-5 space-y-5 lg:py-8 md:space-y-6">
                    <div className="">
                        <h1 className="text-4xl capitalize ml-4 text-black md:text-6xl tracking-widest whitespace-nowrap font-extrabold">
                            M nail & lash
                        </h1>
                    </div>
                    <div className="p-2">
                        <div className="italic">
                            <ul className=" text-black space-y-2 font-light capitalize">
                                <li>
                                    <h2 className="text-lg md:text-2xl tracking-wide">Be Shiny, Be Beautiful, Extravagant,</h2>
                                </li>
                                <li>
                                    <h2 className="text-lg md:text-2xl tracking-wide italic">Friendly Nail Service</h2>
                                </li>
                                <li>
                                    <h2 className="text-lg md:text-2xl tracking-wide"> at an Affordable Price</h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="hover:bg-white/0 hover:border-[1px] hover:border-black transition-all duration-200 delay-100 md:text-xl text-white text-lg py-3 group cursor-pointer px-12 bg-[#da3b85] md:tracking-wide">
                        <a className = "group-hover:text-black font-extrabold">Book Appointment</a>
                    </button>
                </div>
            </div>

            <div className="p-5 lg:p-8 space-y-4">
                <div className="lg:p-4 p-2 mx-auto max-w-screen-xl">
                    <div className=" grid gap-8  lg:gap-24 place-items-center lg:grid-cols-3">
                        <div className=" flex text-center justify-center items-center space-y-5 flex-col">
                            <img className="w-28" src={nailIcon} alt="#" />
                            <div className=" flex flex-col space-y-2">
                                <h2 className=" text-2xl font-Marcok">Custom Design</h2>
                                <div className="">
                                    <span className="">
                                        Ligula risus auctor tempus and dolor vitae undo purus semper sodales
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className=" flex text-center justify-center items-center space-y-5 flex-col">
                            <img className="w-28" src={eyeLash} alt="#" />
                            <div className=" flex flex-col space-y-2">
                                <h2 className=" text-2xl font-Marcok">Eyelash</h2>
                                <div className="">
                                    <span className="">
                                        Ligula risus auctor tempus and dolor vitae undo purus semper sodales
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className=" flex text-center justify-center items-center space-y-5 flex-col">
                            <img className="w-28" src={gelx} alt="#" />
                            <div className=" flex flex-col space-y-2">
                                <h2 className=" text-2xl font-Marcok">Gel-X</h2>
                                <div className="">
                                    <span className="">
                                        Ligula risus auctor tempus and dolor vitae undo purus semper sodales
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}