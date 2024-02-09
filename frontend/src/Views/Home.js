import {React} from "react"

export default function Home(){
    return(
        <section className="relative font-Lora overflow-x-hidden space-y-2 lg:space-y-8">
            <div className="w-screen bg-pagel bg-no-repeat lg:bg-center bg-cover h-screen relative">
                <div className="absolute lg:left-48 top-1/3 px-3 py-5 space-y-5 lg:py-8 md:space-y-6 text-center">
                    <div className="">
                        <h1 className="text-4xl capitalize ml-4 text-black md:text-6xl tracking-widest whitespace-nowrap font-extrabold">
                            M nail & lash
                        </h1>
                    </div>
                    <div className="p-2">
                        <div className="flex justify-center italic">
                            <ul className=" text-black space-y-2 font-light capitalize">
                                <li>
                                    <h2 className="text-lg md:text-xl tracking-wide">Be Shiny, Be Beautiful, Extravagant,</h2>
                                </li>
                                <li>
                                    <h2 className="text-lg md:text-xl tracking-wide italic">Friendly Nail Service</h2>
                                </li>
                                <li>
                                    <h2 className="text-lg md:text-xl tracking-wide"> at an Affordable Price</h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="hover:bg-white/0 hover:border-2 hover:border-black transition-all duration-200 delay-100 md:text-xl text-white text-lg py-3 px-4 group cursor-pointer md:px-12 bg-[#da3b85] md:tracking-wide">
                        <a className = "group-hover:text-black font-extrabold transition-all duration-200 delay-100">Book Appointment</a>
                    </button>
                </div>
            </div>
        </section>
    )
}