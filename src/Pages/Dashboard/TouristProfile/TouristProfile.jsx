import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaBook } from "react-icons/fa";

const TouristProfile = () => {
    const { user } = useAuth();
    console.log(user);
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data);

        // now send the menu item data to the server with the img url
        const story = {
            story: data.story,
            TouristName: user.displayName,
            TouristImage: user.photoURL,

        }
        // 
        const storyRes = await axiosPublic.post('/stories', story);
        console.log(storyRes.data);
        if (storyRes.data.insertedId) {
            reset();
            // show success pop up
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Story is added to the database`,
                showConfirmButton: false,
                timer: 1500
            });

        }

    }

    return (

        <>
            <div className="bg-blue-200 min-h-screen">
                <div>
                    <h2 className="text-4xl font-bold text-center py-12">My Profile As a Tourist</h2>
                    <hr />
                </div>
                <div className="flex justify-center items-center">
                    <div className="hero  bg-blue-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Wecole Mr. {user.displayName},</h1>
                                <p className="py-6 font-bold">As a tourist you can Browse through our diverse range of tour guides, each offering unique specialties and areas of expertise tailored to suit your preferences. Whether  are seeking an architectural aficionado to explore ancient ruins, an adventure enthusiast for thrilling hikes, or a culinary expert to navigate local food markets, our platform caters to all interests and desires.</p>
                                <p className="font-bold">You are browsing with: {user.email} this Email address</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* form  */}
                <div className="mt-3 pb-4 w-1/2 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>  <div className="form-control">
                        <label className="label">
                            <span className="label-text">Add your story here </span>

                        </label>
                        <textarea {...register("story")} className="textarea textarea-bordered h-24" placeholder="write your here..."></textarea>

                    </div>
                        <button className="btn my-3">
                            Add Story
                            <FaBook className="ml-4"></FaBook>

                        </button>
                    </form>
                </div>
            </div>

        </>

    );
};

export default TouristProfile;