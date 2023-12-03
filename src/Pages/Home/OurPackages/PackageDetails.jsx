import { useLoaderData } from "react-router-dom";
import SliderSection from "../SliderSection/SliderSection";
import { Typewriter } from "react-simple-typewriter";
const PackageDetails = () => {
    const packageDetails = useLoaderData();
    const { trip_title, tour_type, price, image, details } = packageDetails;
    return (
        <>
            <div className=" pb-12w-full">
                <SliderSection></SliderSection>

                <div >
                    <div className="w-3/4 mx-auto">
                        <div className=" mx-auto mb-8">
                            <div className='flex justify-center items-center text-2xl text-amber-700 font-bold text-center'>
                                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                    Package Details: {' '}
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={['Best Best Best', 'Choose Our Guide, Choose Our Best']}
                                            loop={20}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>: {name}
                                </h1>
                            </div>

                        </div>
                        <div className=" mb-8 mx-auto  border border-[#cee3db] border-b-2">
                        </div>

                    </div>
                    <div className=" mt-4 shadow-lg mx-auto p-8  grid grid-cols-1 justify-center items-center" >
                        <div >
                            <div className=" flex flex-wrap justify-center items-center ">
                                <div >

                                    <div className="hero-content  flex-col lg:flex-row">
                                        <img src={image} className="max-w-sm rounded-lg shadow-2xl " />
                                        <div className="ml-3 grid grid-cols-1 ">
                                            <hr />
                                            <h1 className="text-3xl py-2 font-bold">{trip_title}</h1>
                                            <h1 className="text-xl  font-bold">Tour Type: {tour_type}</h1>

                                            <p className="py-2 mb-2">{details}</p>
                                            <p className="py-2 mb-2">Price of this package: {price}</p>
                                            <hr />

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mb-12">
                            
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default PackageDetails;