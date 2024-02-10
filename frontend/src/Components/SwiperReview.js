import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay, Pagination} from "swiper/modules";
import ReviewData from "../Components/ReviewData.js";
import 'swiper/css/pagination';
import Stars from './Star.js';

export default function SwiperReview(){
    return(
        <Swiper
            loop = {true}
            breakpoints={{
                340: {
                    slidesPerView:1,
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            autoplay = {{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination = {{
                dynamicBullets: true,
                clickable:true
            }}
            modules={[Autoplay , Pagination]}
        >
            {ReviewData.map((r) => (
                <SwiperSlide key = {r.id}>
                    <div className="p-2 cursor-pointer lg:p-12">
                        <div className=" flex space-y-4 flex-col items-center justify-center text-center">
                            <div className=" flex flex-col">
                                <h1 className=" text-2xl">{r.name}</h1>
                            </div>
                            <Stars len = {r.star} />
                            <div className=" font-newFont text-black/80">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="inline-block h-7 w-7 pr-2"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                    </svg>
                                    {r.desc}
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};