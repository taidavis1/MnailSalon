// src/Popup.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Popup1 from '../img/popup1.png';
import Popup2 from '../img/popup2.png';
import Popup3 from '../img/popup3.png';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [Popup1, Popup2 , Popup3];
    const handleButtonClick = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setIsOpen(!isOpen);
        }
    };

    return (
		<div className={`${!isOpen? "opacity-100" : "hidden" } px-2 fixed left-0 top-0 inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50`}>
			<div className='relative'>
                {currentImageIndex === 2? (
                    <img className='h-[600px] lg:h-[800px]' src={images[currentImageIndex]} />
                ): (
                    <img className=' w-[800px] h-[300px] lg:h-[500px]' src={images[currentImageIndex]} />
                )}
                <div className=' absolute top-0 right-0'>
                    <button className = " bg-white p-2" onClick={handleButtonClick}>
                        <FontAwesomeIcon className=' text-2xl text-main-color' icon={faXmark} />
                    </button>
                </div>
            </div>
		</div>
    );
};

export default Popup;