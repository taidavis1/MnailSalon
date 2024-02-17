import React from "react";
import {Gallery as Glery , Item} from "react-photoswipe-gallery";
import 'photoswipe/dist/photoswipe.css';

function importImg(r){
    return r.keys().map(r);
};

export default function Gallery(){
    const fnames = importImg(require.context('../img/gallery' , false ,/\.(png|jpg|jpeg)$/));
    const options = {
        zoom: false,
        tapAction:'close',
        doubleTapAction: false,
    };

    return (
        <section className = "space-y-6 pb-5 md:pb-12 ">
            <div className="bg-gpage bg-no-repeat bg-center bg-cover h-[300px] lg:h-[480px] relative">
                <div className="tracking-wider font-newFont top-8 lg:top-12 -left-12 lg:-left-24 w-full absolute text-3xl h-full flex items-center justify-center cursor-pointer text-black lg:text-5xl">
                    <h2 className="">Our Gallery</h2>
                </div>
            </div>
                <div class="cursor-pointer px-4 mx-auto max-w-screen-2xl overflow-x-hidden">
                    <div class="grid md:grid-cols-4 grid-cols-2 justify-items-center gap-2 cursor-pointer">
                        <Glery options={options}>
                            {fnames.map((fname , index) => (
                                    <>
                                        <div key={index} class="p-1 shadow-lg md:p-2">
                                            <Item width="900" height="900"key={index} original={fname}  alt= "#">
                                                {({ref , open}) => (
                                                    <div className="sticky h-full">
                                                        <img ref={ref} onClick={open} className=" rounded-lg" alt="#" src={fname} />
                                                        <div ref={ref} onClick={open} className=" hidden absolute p-8 inset-0 z-10 bg-black lg:flex flex-col justify-center opacity-0 hover:opacity-100 ease-linear duration-500 transition-all bg-opacity-50">                                                            
                                                            <div className=" bg-black/20 p-1 lg:p-4">
                                                                    <div className=" flex justify-center text-lg text-white font-thin space-x-1">
                                                                        <span className="">View Image</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </div>
                                                )}
                                            </Item>
                                        </div>
                                    </>
                            ))}
                        </Glery>
                    </div>
                </div>
        </section>
    );
};
