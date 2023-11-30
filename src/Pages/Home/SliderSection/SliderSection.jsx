import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Typewriter } from 'react-simple-typewriter'
const SliderSection = () => {
    return (
        <>
            <Carousel className="text-center ">
                <div>
                    <img className="max-h-[70vh]" src="https://i.ibb.co/gDHM68m/cropped-nicolas-j-leclercq-va-nr-BLonf8-unsplash.jpg" />
                    <h2 className="pt-8 text-center -mt-32 md:-mt-64"></h2>
                    <span className="text-lg md:text-5xl" style={{ color: 'white', fontWeight: 'bold', }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={["Embark on an unforgettable journey filled with captivating landscapes", "rich cultural experiences", "and cherished memories with our expertly guided tours tailored to make your adventure truly extraordinary."]}
                            loop={100}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>

                </div>
                <div>
                    <img className="max-h-[70vh]" src="https://i.ibb.co/k4HCtwy/cropped-outdoor-terrace-sea-nature-beach.jpg" />
                    <h2 className="pt-8 text-center -mt-32 md:-mt-64"></h2>
                    <span className="text-lg md:text-5xl" style={{ color: 'white', fontWeight: 'bold', }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={["Embark on an unforgettable journey filled with captivating landscapes", "rich cultural experiences", "and cherished memories with our expertly guided tours tailored to make your adventure truly extraordinary."]}
                            loop={100}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>
                <div>
                    <img className="max-h-[70vh]" src="https://i.ibb.co/bKF1j6P/cropped-sebastian-unrau-sp-p7uu-T0tw-unsplash.jpg" />
                    <h2 className="pt-8 text-center -mt-32 md:-mt-64"></h2>
                    <span className="text-lg md:text-5xl" style={{ color: 'white', fontWeight: 'bold', }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={["Embark on an unforgettable journey filled with captivating landscapes", "rich cultural experiences", "and cherished memories with our expertly guided tours tailored to make your adventure truly extraordinary."]}
                            loop={100}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>
                <div>
                    <img className="max-h-[70vh]" src="https://i.ibb.co/g6tTj0r/cropped-adam-jang-MLKrf51-NV8w-unsplash.jpg" />
                    <h2 className="pt-8 text-center -mt-32 md:-mt-64"></h2>
                    <span className="text-lg md:text-5xl" style={{ color: 'white', fontWeight: 'bold', }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={["Embark on an unforgettable journey filled with captivating landscapes", "rich cultural experiences", "and cherished memories with our expertly guided tours tailored to make your adventure truly extraordinary."]}
                            loop={100}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>
                <div>
                    <img className="max-h-[70vh]" src="https://i.ibb.co/2MZ1XJq/cropped-christina-brinza-NEQC4iy-HE-s-unsplash.jpg" />
                    <h2 className="pt-8 text-center -mt-32 md:-mt-64"></h2>
                    <span className="text-lg md:text-5xl" style={{ color: 'white', fontWeight: 'bold', }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={["Embark on an unforgettable journey filled with captivating landscapes", "rich cultural experiences", "and cherished memories with our expertly guided tours tailored to make your adventure truly extraordinary."]}
                            loop={100}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>
                <div>
                    <img className="max-h-[70vh]" src="https://i.ibb.co/PQFyVPM/cropped-ryan-stone-czw-AQm4-Yyk-E-unsplash.jpg" />
                    
                    
                </div>
                

            </Carousel>

        </>
    );
};

export default SliderSection;