// ImageSlider.jsx
import { useState } from "react";
// import mango from '../assets/mango.jpg';
import logo from '../assets/logo.jpg'; // Assuming you have a logo image
import parveen from '../assets/parveen.jpg'; // Assuming you have a parveen image

const ImageSlider = () => {
    const images = [
        parveen,
        logo,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-full max-w-xl mx-auto p-4">
            <div className="relative">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full rounded-lg"
                />
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded"
                >
                    ‹
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded"
                >
                    ›
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
