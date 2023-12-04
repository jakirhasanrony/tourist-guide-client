import { Link, useLoaderData } from "react-router-dom";
import SliderSection from "../SliderSection/SliderSection";
import { Typewriter } from "react-simple-typewriter";
import './PackageDetails.css'
import useGuides from "../../../Hooks/useGuides";


const PackageDetails = () => {
    const packageDetails = useLoaderData();
    const [guides] = useGuides();
    const { trip_title, tour_type, price, image, details } = packageDetails;
    return (
        <>
            <div className=" w-full bg-blue-200">
                <SliderSection></SliderSection>
                <div className="image-gallery p-12">
                    <div className="image border-8 border-blue-300">
                        <img src="https://i.ibb.co/ZNb1XjH/cropped-ancient-hindu-temple-bali-majestic-spiritual-travel-destination-generated-by-artificial-inte.jpg" alt="" />
                    </div>
                    <div className="image border-8 border-blue-300">
                        <img src="https://i.ibb.co/hBtS8TP/cropped-men-women-hiking-through-foggy-forest-generated-by-ai-24640-81061.jpg" alt="" />
                    </div>
                    <div className="image border-8 border-blue-300">
                        <img src="https://i.ibb.co/mN12rKk/cropped-view-wild-elk-nature-23-2150829525.jpg" alt="" />
                    </div>
                    <div className="image border-8 border-blue-300">
                        <img src="https://i.ibb.co/rwmnMw9/cropped-male-hiker-with-backpack-taking-picture-rocky-mountains-covered-snow-181624-11714.jpg" alt="" />
                    </div>
                    <div className="image border-8 border-blue-300">
                        <img src="https://i.ibb.co/Mpbp69y/cropped-3d-render-yacht-still-blue-water-against-tree-hill-landscape-1048-6214.jpg" alt="" />
                    </div>
                    <div className="image border-8 border-blue-300">
                        <img src="https://i.ibb.co/cwr7NQt/cropped-3d-render-wild-animals-sunset-landscape-1048-6116.jpg" alt="" />
                    </div>
                    <div className="image border-8 border-blue-300">
                        <img src="https://i.ibb.co/tLQV7sp/beautiful-viewpoint-koh-nangyuan-island-surat-thani-thailand-335224-1097.jpg" alt="" />
                    </div>

                </div>

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
                        <div className="">
                            <div className="mx-auto text-center md:w-4/12 my-5">
                                <h3 className=" font-bold uppercase border-y-4 py-4">About This Package</h3>
                            </div>
                        </div>
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


                        <div className="flex flex-wrap justify-center items-center gap-6">
                            <div>
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Day 1: Arrival and Exploration</button>
                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg">Day 1: Arrival and Exploration</h3>
                                        <p className="py-4">
                                            1. Arrive at the destination city and check into your accommodation. <br />
                                            2. Spend the afternoon exploring the citys landmarks and cultural sites. <br />
                                            3. Visit popular attractions, museums, or historic areas. <br />
                                            4. Enjoy a local dinner at a recommended restaurant.</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                            <div>
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Day 2: Nature and Scenic Tour</button>
                                <dialog id="my_modal_5" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg">Day 2: Nature and Scenic Tour</h3>
                                        <p className="py-4">1. Depart early for a day trip to nearby natural attractions (e.g., national park, scenic viewpoints, or beaches). <br />
                                            2. Engage in outdoor activities like hiking, wildlife spotting, or relaxation by the sea. <br />
                                            3. Capture stunning views and enjoy the natural beauty of the area. <br />
                                            4. Return to the city in the evening for leisure time.</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                            <div>
                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn" onClick={() => document.getElementById('my_modal_6').showModal()}>Day 3: Day Excursion to Nearby Towns</button>
                                <dialog id="my_modal_6" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg">Day 3: Day Excursion to Nearby Towns</h3>
                                        <p className="py-4">1. Take a day trip to nearby towns or villages known for their unique features. <br />
                                            2. Discover historical sites, local crafts, or regional specialties. <br />
                                            3. Enjoy the different ambiance and charm of these smaller communities. <br />
                                            4. Return to the main city for the night.</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>




                </div>
                <div>
                    <h2 className="text-4xl font-bold text-center py-12">Meet Our Tour Guides</h2>
                </div>

                <div className="grid grid-cols-1, justify-center items-center pb-12">
                    {
                        guides.map(guide => <>
                            <Link to={`/guide/${guide._id}`}>
                                <li className="p-2 font-bold " key={guide._id}>{guide.name}</li>
                            </Link>
                        </>)
                    }
                </div>



            </div>

        </>
    );
};

export default PackageDetails;