import {React} from "react"
import QuoteCarousel from "../Components/QuoteCarousel"

export default function Home(){
    return(
        <section className="relative font-Lora overflow-x-hidden space-y-2 lg:space-y-8">
            <div className="w-screen bg-pagel bg-no-repeat lg:bg-center bg-cover h-screen relative">
                <div className="absolute left-48 top-1/3 px-3 py-5 space-y-5 lg:py-8 md:space-y-6 text-center">
                    <div className="">
                        <h1 className="text-4xl uppercase ml-4 text-black md:text-6xl tracking-widest whitespace-nowrap font-extrabold">
                            M nail & lash
                        </h1>
                    </div>
                    <QuoteCarousel />
                    <button className="hover:bg-white rounded-full md:text-xl text-white text-lg py-3 px-4 group cursor-pointer md:px-12 bg-[#3C6CA8] md:tracking-wide">
                        <a className = "group-hover:text-[#3C6CA8] font-extrabold">Book Appointment</a>
                    </button>
                </div>
            </div>
        </section>
    )
}