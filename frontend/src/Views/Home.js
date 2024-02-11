import {React} from "react";
import nailIcon from "../img/nail.png";
import eyeLash from "../img/eyelashes.png";
import gelx from "../img/gelx.png";
import secondimg from "../img/second-img.png";
import thirdimg from "../img/third-img.png";
import DataHome from "../Components/DataHome";
import SwiperReview from "../Components/SwiperReview";
function importImg(r){
    return r.keys().map(r);
}
export default function Home(){
	const fnames = importImg(require.context('../img/nail-img/' , false , /\.(png|jpg|jpeg)$/));
    return(
        <section className="relative font-Lora overflow-x-hidden space-y-2 lg:space-y-8">
            <div className="w-screen bg-pagesm lg:bg-pagel bg-no-repeat lg:bg-center bg-cover h-screen relative">
                <div className="w-screen absolute lg:right-56 text-center top-1/3 px-3 py-5 space-y-5 lg:py-8 md:space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl capitalize ml-4 text-black md:text-6xl tracking-widest font-extrabold">
                            M spa beauty
                        </h1>
                        <h1 className="text-3xl capitalize ml-4 text-black md:text-5xl tracking-widest font-extrabold">lash & nail</h1>
                    </div>
                    <div className="p-2">
                        <div className="italic">
                            <ul className=" text-black space-y-2 font-light capitalize">
                                <li>
                                    <h2 className="text-xl md:text-2xl tracking-wide">Be Shiny, Be Beautiful, Extravagant,</h2>
                                </li>
                                <li>
                                    <h2 className="text-xl md:text-2xl tracking-wide italic">Friendly Nail Service</h2>
                                </li>
                                <li>
                                    <h2 className="text-xl md:text-2xl tracking-wide"> at an Affordable Price</h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="hover:bg-white/0 hover:border-[1px] hover:border-black transition duration-200 delay-100 md:text-xl text-white text-lg py-3 group cursor-pointer px-12 bg-[#da3b85] md:tracking-wide">
                        <a className = "group-hover:text-black transition duration-200 delay-100 font-extrabold">Book Appointment</a>
                    </button>
                </div>
            </div>

            <div className="p-5 lg:p-8 space-y-4">
                <div className="lg:p-4 p-2 mx-auto max-w-screen-xl">
                    <div className=" grid gap-12  lg:gap-24 place-items-center lg:grid-cols-3">
                        <div className=" cursor-pointer flex text-center justify-center items-center space-y-5 flex-col">
                            <img className="w-28" src={nailIcon} alt="#" />
                            <div className=" flex flex-col space-y-5">
                                <div className=" space-y-2">
                                    <div>
                                        <h2 className=" text-2xl font-Marcok">Custom Design</h2>
                                    </div>
                                    <div>
                                        <span className="">
                                            Our custom nail designs reflect your personal style, featuring everything from intricate patterns to bold colors.
                                        </span>
                                    </div>
                                </div>
                                <div className="">
                                    <button className=" py-3 transition ease-in-out duration-200 delay-100 group border-main-color hover:bg-main-color px-12 border-[1px]">
                                       <span className=" transition ease-in-out duration-200 delay-100 text-lg group-hover:text-white">
                                            View More
                                       </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=" cursor-pointer flex text-center justify-center items-center space-y-5 flex-col">
                            <img className="w-28" src={gelx} alt="#" />
                            <div className=" flex flex-col space-y-5">
                                <div className=" space-y-2">
                                    <div>
                                        <h2 className=" text-2xl font-Marcok">Gel-X</h2>
                                    </div>
                                    <div>
                                        <span className="">
                                            Offering the latest in nail enhancement technology, 
                                            Gel-X extensions provide durability and a natural look.                                        
                                        </span>
                                    </div>
                                </div>
                                <div className="">
                                    <button className=" py-3 transition ease-in-out duration-200 delay-100 group border-main-color hover:bg-main-color px-12 border-[1px]">
                                       <span className=" transition ease-in-out duration-200 delay-100 text-lg group-hover:text-white">
                                            View More
                                       </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=" cursor-pointer p-2 flex text-center justify-center items-center space-y-5 flex-col">
                            <img className="w-28 " src={eyeLash} alt="#" />
                            <div className=" flex flex-col space-y-5">
                                <div className=" space-y-2">
                                    <div>
                                        <h2 className=" text-2xl font-Marcok">Eyelash</h2>
                                    </div>
                                    <div>
                                        <span className="">
                                            From subtle to dramatic, our eyelash extensions are customized to 
                                            enhance your natural beauty
                                        </span>
                                    </div>
                                </div>
                                <div className="">
                                    <button className=" py-3 transition ease-in-out duration-200 delay-100 group border-main-color hover:bg-main-color px-12 border-[1px]">
                                       <span className=" transition ease-in-out duration-200 delay-100 text-lg group-hover:text-white">
                                            View More
                                       </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:p-4 p-2 mx-auto max-w-screen-xl">
                <div className=" grid gap-8 lg:grid-cols-2">
                    <div className=" h-fit shadow-md cursor-pointer">
                        <img className=" hover:opacity-60 transition-opacity ease-in-out duration-200 delay-100" src={secondimg} />
                    </div>
                    <div className="flex flex-col xl:py-14 space-y-2 lg:space-y-4 px-6 lg:px-8">
                        <h3 className=" font-Lora tracking-wide text-center lg:text-start text-3xl lg:text-5xl">Who we Are ?</h3>
                        <div className=" font-newFont space-y-3">
                            <span className="lg:text-xl text-lg text-black/90">
                                Welcome to M Nail & Lash, a leading nail salon located in the heart of Plano, Texas. 
                                Renowned for our exceptional services in custom nail design, Gel-X extensions, 
                                and eyelash enhancements, we are dedicated to offering a unique and personalized beauty 
                                experience to each of our clients. Our salon is the perfect destination for those looking 
                                to indulge in a bit of pampering and self-care, while also seeking innovative beauty solutions 
                                tailored specifically to their needs.
                            </span>
                            <ul className="text-lg text-black/60 space-y-2 list-inside list-disc">
                                <li>
                                    Our skilled professionals are dedicated to bringing you the latest 
                                    beauty solutions with a focus on quality and safety.
                                </li>
                                <li>
                                    We prioritize understanding your beauty desires, crafting services that 
                                    perfectly align with your vision.
                                </li>
                            </ul>
                        </div>
                        <div className=" hidden lg:flex justify-center">
                            <button className=" py-3 transition ease-in-out duration-200 delay-100 group border-main-color hover:bg-main-color px-12 border-[1px]">
                                <span className=" transition ease-in-out duration-200 delay-100 text-lg group-hover:text-white">
                                    Book Appointment
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:p-4 p-2 mx-auto max-w-screen-xl">
                <div className=" flex flex-col space-y-12">
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
                    <div className="grid gap-4 lg:gap-8 lg:grid-cols-3">
                        {DataHome.map((d) => (
                            <div key={d.id} className="max-w-lg cursor-pointer shadow-lg rounded-lg mb-2 ease-in-out transition-all duration-1000 lg:hover:scale-105">
                                <div className="overflow-hidden">
                                    <img src={d.img} alt="#" className="w-full" />
                                </div>
                                <div className="text-center px-6 py-4 space-y-3 mb-4">
                                    <h1 className=" text-lg  md:text-xl capitalize border-b-2 font-semibold border-main-color/20">{d.name}</h1>
                                    <div>
                                        <span className=" text-md font-newFont text-black/70 font-bold space-y-2">
                                            {d.description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" hidden lg:flex justify-center">
                        <button className=" py-3 transition ease-in-out duration-200 delay-100 group border-main-color hover:bg-main-color px-12 border-[1px]">
                            <span className=" transition ease-in-out duration-200 delay-100 text-lg group-hover:text-white">
                                View More
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:p-4 p-2 bg-cover lg:bg-center lg:h-[518px] bg-no-repeat w-screen bg-bg2 relative">
                <div className="px-12 lg:ml-28 py-8 space-y-5 lg:py-24 md:space-y-6">
                    <div className=" flex flex-col space-y-6 lg:space-y-8">
                       	<div className=" max-w-lg text-center">
                            <span className=" font-Lora text-xl lg:text-2xl">
                                Our goal is to ensure every woman feels beautiful, joyful, and cherished!
                            </span>
                       	</div>
                       <div className=" max-w-lg flex flex-col space-y-5 text-center">
                            <span className="font-Lora text-4xl font-extrabold lg:text-6xl">
                                    10%  Off
                            </span>
                            <span className="font-Lora text-black/60 text-xl uppercase">
                                on all pedicure services
                            </span>
                       	</div>
                       	<div className=" flex max-w-lg justify-center">
						   	<button className=" py-3 transition ease-in-out duration-200 delay-100 group border-main-color hover:bg-main-color px-12 border-[1px]">
                                <span className=" transition ease-in-out duration-200 delay-100 text-lg group-hover:text-white">
                                    Book Appointment
                                </span>
                            </button>
                       	</div>
                    </div>
                </div>
            </div>
			<div className="p-8 mx-auto max-w-screen-xl">
				<div className=" flex flex-col space-y-4 lg:space-y-6">
					<span className = "text-center text-xl lg:text-2xl text-black/50">Testimonial</span>
					<span className = "text-center text-3xl lg:text-5xl text-black">Our Customer Review</span>
					<div>
						<SwiperReview />
					</div>
				</div>
			</div>
			<div className="p-8 mx-auto max-w-screen-xl">
				<div className=" flex flex-col space-y-4 lg:space-y-6">
					<span className = "text-center text-xl lg:text-2xl text-black/50">Gallery</span>
					<span className = "text-center text-3xl lg:text-5xl text-black">Halt the Clock. Maintain Your Beauty</span>
					<div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 justify-items-center p-4 cursor-pointer">
						{fnames.slice(0,8).map((fname , index) =>(
							<div key={index} className="shadow-lg overflow-hidden rounded-lg">
								<img className="w-full ease-in-out transition-all duration-1000 hover:scale-125" src={fname} alt={fname}/>
							</div>
						))}
                    </div>
					<div className=" flex justify-center">
						<button className=" py-3 transition ease-in-out duration-200 delay-100 group border-main-color hover:bg-main-color px-12 border-[1px]">
							<span className=" transition ease-in-out duration-200 delay-100 text-lg group-hover:text-white">
								View More
							</span>
						</button>
					</div>
				</div>
			</div>
        </section>
    );
};