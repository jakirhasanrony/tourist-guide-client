
import { Link } from 'react-router-dom';
import './TourTypeSection.css'
const TourTypeSection = () => {
    return (
        <>
            <div className="">

                <div className="featured-item min-h-[70vh] bg-fixed ">
                    <div className="flex flex-wrap gap-6 justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
                        <div>
                            <Link to="/culturaltour">
                                <div className="card w-96  shadow-xl ">
                                    <figure className="px-10 pt-10">
                                        <img src="../../../../src/assets/TourType/culturalTour.png" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-black font-extrabold">Cultural Tours</h2>

                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="adventureTour">
                                <div className="card w-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src="../../../../src/assets/TourType/adventureTour.png" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-black font-extrabold">Adventure Tours</h2>

                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div>
                            <Link to="wildlifetour">
                                <div className="card w-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src="../../../../src/assets/TourType/wildLifeTour.png" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-black font-extrabold">Wildlife Tours</h2>

                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="culinarytour">
                                <div className="card w-96  shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src="../../../../src/assets/TourType/culinaryTour.png" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-black font-extrabold">Culinary Tours</h2>

                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="sightseeingtour">
                                <div className="card w-96 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img src="../../../../src/assets/TourType/sightseeingTour.png" alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-black font-extrabold">Sightseeing Tours</h2>

                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default TourTypeSection;