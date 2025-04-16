import React , {useState} from "react";
import thirdimg from "../img/third-img.png";
import ServicesData from "../Components/ServicesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark , faPlus} from "@fortawesome/free-solid-svg-icons";
import {Fade,Slide} from "react-awesome-reveal";

export default function Services(){
    const [IsClick , setIsClick] = useState(false);
    const handleBtn = (id) => {
        setIsClick((lastClick) => ({
            ...lastClick,
            [id]: !lastClick[id],
        }));
    };
    return (
        <section className = "space-y-2 lg:pb-12 ">
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
                            <img alt="Third Photo" className=" hover:opacity-60 transition-opacity ease-in-out duration-200 delay-100" src={thirdimg} />
                        </div>
                    </div>

                    {/* Mobile View */}
                    <div className="p-2 mt-5 space-y-5 md:hidden">
                        {ServicesData.map((s) => (
                            <div className="grid grid-cols-1 overflow-auto">
                                <div className="space-y-2">
                                    <div className="w-full py-3 shadow-lg rounded-lg  bg-main-color/60 text-white font-semibold tracking-wide uppercase text-center" key={s.id} onClick={() => handleBtn(s.id)}>
                                        <div className="grid grid-cols-3">
                                            <div className="col-span-2 italic tracking-wider">{s.servicename}</div>
                                            <div>
                                                {!IsClick[s.id]?
                                                    <FontAwesomeIcon className="" icon={faPlus} />: <FontAwesomeIcon className="text-white" icon={faXmark} />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {IsClick[s.id] && (
                                        <Fade duration={1000} delay={50}>
                                            <div className="">
                                                <div className="p-2 shadow-md space-y-4 rounded-lg">
                                                    <div className="">
                                                        <img src={s?.img_url} alt = {s.servicename} />
                                                    </div>
                                                    {s.service.map((se , index) => (
                                                        <>
                                                            <div className="text-black flex flex-col gap-4">
                                                                <div className="flex font-newFont flex-col space-y-2">
                                                                    <span className="text-xl">{index + 1}. {se.name}</span>
                                                                    {s.id === 1 && (
                                                                        <span className=" text-justify">{se.desc}</span>
                                                                    )}
                                                                </div>
                                                                <div className=" flex justify-center items-center">
                                                                    <span className=" text-main-color text-lg tracking-wider font-bold">{se.price}</span>
                                                                </div>
                                                            </div>
                                                            <hr></hr>  
                                                        </>
                                                    ))}
                                                </div>
                                            </div>
                                        </Fade>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                                                        
                    {/* Desktop View */}
                    <Slide duration={1500} delay={100}>
                        {ServicesData.map((ser, index) => (
                        <div className="p-3 space-y-8 hidden md:block">
                                <div id={index} key={index} className="flex justify-center">
                                    <div className="bg-main-color/80 rounded-full shadow-md  px-12 py-3">
                                        <h1 className="tracking-wide capitalize cursor-pointer italic text-white md:text-4xl font-bold">{ser.servicename}</h1>
                                    </div>
                                </div>
                                <div className="p-4 cursor-pointer">
                                    <div className=" grid gap-4 grid-cols-4">
                                        {ser.service.map((s , index) => (
                                            <div key={index} className="shadow-lg h-fit rounded-lg mb-2 ease-in-out transition-all duration-1000 lg:hover:scale-105">
                                                {(ser.id === 1 || ser.id === 3 || ser.id === 6 || ser.id === 7 || ser.id === 2 )&& (
                                                    <div className="overflow-hidden">
                                                        {s.img_url && <img alt={s.name} src={s.img_url} />}
                                                    </div>
                                                )}
                                                <div className="px-8 space-y-4 mb-4 mt-4">
                                                    <h1 className="md:text-lg text-center capitalize border-main-color/40 border-b-2 py-1">{s.name}</h1>
                                                    {(ser.servicename === 'Manicures' || ser.servicename === 'Pedicure') && (
                                                        <div className=" text-black/60 text-justify">
                                                            <ul className=" list-inside font-newFont list-disc">
                                                                <li>
                                                                    {s.desc}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                    <div className="text-xl tracking-wide text-center">
                                                        {s.price}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                        </div>
                        ))}
                    </Slide>
                </div>
            </div>
        </section>
    );
};