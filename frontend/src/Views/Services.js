import React from "react";
import thirdimg from "../img/third-img.png";
import ServicesData from "../Components/ServicesData";

export default function Services(){
    return (
        <section className = "space-y-2 pb-5 md:pb-12 ">
            <div className="bg-gpage1 bg-no-repeat bg-center bg-cover h-[300px] lg:h-[480px] relative">
                <div className="font-newFont top-8 lg:top-12 -left-12 lg:-left-24 w-full absolute text-3xl h-full flex items-center justify-center cursor-pointer text-black lg:text-5xl">
                    <h2 className="">Services & Pricing</h2>
                </div>
            </div>
            <div className="lg:p-4 p-2 mx-auto max-w-screen-2xl">
                <div className=" flex flex-col lg:space-y-14">
                    <div className="grid gap-4 lg:gap-8 lg:grid-cols-2">
                        <div className="flex mt-6 lg:mt-14 flex-col space-y-2 lg:space-y-4">
                            <span className=" lg:text-start text-center font-newFont tracking-wide text-black/50">Vibrant , Gleaming , Dazzling</span>
                            <h1 className=" lg:text-start text-center text-3xl lg:text-5xl">
                                Illuminate Your Look with Radiant Nails!
                            </h1>
                        </div>
                        <div className="cursor-pointer">
                            <img className=" hover:opacity-60 transition-opacity ease-in-out duration-200 delay-100" src={thirdimg} />
                        </div>
                    </div>
                
                    {/* Desktop View */}
                    {ServicesData.map((ser) => (
                       <div className="p-3 space-y-8 hidden md:block">
                            <div id={ser.servicename} key={ser.id} className="flex justify-center">
                                <div className="bg-main-color/80 rounded-full shadow-md  px-12 py-3">
                                    <h1 className="tracking-wide capitalize cursor-pointer italic text-white md:text-4xl font-bold">{ser.servicename}</h1>
                                </div>
                            </div>
                            <div className="p-4 cursor-pointer">
                                <div className=" grid gap-8 grid-cols-4">
                                    {ser.service.map((s , index) => (
                                        <div key={index} className="shadow-lg h-fit rounded-lg mb-2 ease-in-out transition-all duration-1000 lg:hover:scale-105">
                                            <div className="overflow-hidden">

                                            </div>
                                            <div className="px-8 space-y-4 mb-4 mt-4">
                                                <h1 className="md:text-lg text-center capitalize border-main-color/40 border-b-2 py-1">{s.name}</h1>
                                                {ser.servicename === 'Manicure & Pedicure' && (
                                                    <div className=" text-black/60 text-justify">
                                                        <ul className=" list-inside list-disc">
                                                            <li>
                                                                {s.desc}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className="text-xl text-center">
                                                    {s.price}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                       </div>
                    ))}
                </div>
            </div>
        </section>
    );
};