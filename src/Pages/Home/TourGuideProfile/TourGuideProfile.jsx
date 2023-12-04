import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import SliderSection from "../SliderSection/SliderSection";
import { useForm } from "react-hook-form";
import { FaThList } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const TourGuideProfile = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data);

        // now send the menu item data to the server with the img url
        const comment = {
            TourGuideName: name,
            TourGuideImage: profile_picture,
            comment: data.comment,
            ratings: data.ratings,

        }
        // 
        const commentRes = await axiosPublic.post('/comments', comment);
        console.log(commentRes.data);
        if (commentRes.data.insertedId) {
            reset();
            // show success pop up
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Comment is added to the database for ${name}`,
                showConfirmButton: false,
                timer: 1500
            });

        }

    }


    const singleGuideDetails = useLoaderData();
    const { name, contact_email, details, profile_picture, contact_phone, contact_address, education, skill1, skill2, work_experience } = singleGuideDetails;
    console.log(name, details);

    return (


        <div className=" w-full bg-blue-200">
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
                <div className=" mt-4  mx-auto p-8  grid grid-cols-1 justify-center items-center" >
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

                {/* form  */}
                <div className="mt-3 pb-4 w-1/2 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>  <div className="form-control">
                        <label className="label">
                            <span className="label-text">Comment here for this tour guide </span>

                        </label>
                        <textarea {...register("comment")} className="textarea textarea-bordered h-24" placeholder="comment here..."></textarea>

                    </div>
                        <div className="form-control flex-1  my-6">
                            <label className="label">
                                <span className="label-text">Give Rating out of 5 </span>

                            </label>
                            <input
                                type="number"
                                placeholder="ratings"
                                {...register("ratings")}

                                className="input input-bordered w-full " />
                        </div>
                        <button className="btn my-3">
                            Add Comment <FaThList className="ml-4"></FaThList>

                        </button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default TourGuideProfile;