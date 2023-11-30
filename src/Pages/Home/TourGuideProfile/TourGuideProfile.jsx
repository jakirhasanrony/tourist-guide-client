import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import SliderSection from "../SliderSection/SliderSection";

const TourGuideProfile = () => {
    const singleGuideDetails = useLoaderData();
    const { name, contact_email, details, profile_picture, contact_phone, contact_address, education, skill1, skill2, work_experience } = singleGuideDetails;
    console.log(name, details);

    return (


        <div className=" w-full">
            <SliderSection></SliderSection>

            <div >
                <div className="w-3/4 mx-auto">
                    <div className=" mx-auto mb-8">
                        <div className='flex justify-center items-center text-2xl text-amber-700 font-bold text-center'>
                            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                Member Portrait: {' '}
                                <span style={{ color: 'red', fontWeight: 'bold' }}>
                                    <Typewriter
                                        words={['Meet Our Proud Guide', 'Our Guide, Our Pride']}
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
                                    <img src={profile_picture} className="max-w-sm rounded-lg shadow-2xl " />
                                    <div className="ml-3 grid grid-cols-1 ">
                                        <h1 className="text-3xl  font-bold">{name}</h1>
                                        <p className="py-2 mb-2">Embark on a captivating journey with our expert tour guide ! Discover the hidden gems and rich history of this incredible location as our knowledgeable guide leads you through fascinating landmarks, sharing intriguing stories and local insights. Explore with confidence, gaining a deeper understanding of its culture, traditions, and must-see attractions. Book your unforgettable experience today and let our seasoned guide create lasting memories on this immersive adventure! </p>
                                        <hr />
                                        <div className="flex flex-wrap gap-10 items-center">
                                            <div className="py-8">
                                                <p className="font-bold">Contact Details: </p>
                                                <p>Email: {contact_email}</p>
                                                <p>Phone: {contact_phone}</p>
                                                <p>Address: {contact_address}</p>
                                            </div>
                                            <div className="py-4">
                                                <p className="font-bold">Education and Skills Details: </p>
                                                <p>Education: {education}</p>
                                                <p>Skills: {skill1}, {skill2}</p>

                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-bold">Work Experience Details: </p>
                                            <p>Experience: {work_experience}</p>
                                        </div>
                                        <hr />

                                        {/* <button className="btn mt-2 btn-block bg-[#cee3db] text-black font-bold">See Details </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TourGuideProfile;