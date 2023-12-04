import { useForm } from "react-hook-form";
import { FaThList } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPackages = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the img url
            const packageItem = {
                trip_title: data.trip_title,
                tour_type: data.tour_type,
                tourGuide: data.tourGuide,
                price: parseFloat(data.price),
                details: data.details,
                image: res.data.data.display_url
            }
            // 
            const tourPackageRes = await axiosSecure.post('/tourPackage', packageItem);
            console.log(tourPackageRes.data);
            if (tourPackageRes.data.insertedId) {
                reset();
                // show success pop up
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.trip_title} is added to the database`,
                    showConfirmButton: false,
                    timer: 1500
                });

            }

        }
        console.log(res.data);
    };

    return (
        <div className="bg-blue-200 min-h-screen">
            <h2 className="text-4xl text-center py-12">Add a Package</h2>
            <div className="p-12">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-wrap gap-6 w-full">
                        <div className="form-control flex-1  my-6">
                            <label className="label">
                                <span className="label-text">Trip Title <span className="text-red-600 font-bold text-lg">*</span> </span>

                            </label>
                            <input
                                type="text"
                                placeholder="Trip Title"
                                {...register("trip_title", { required: true })}
                                required
                                className="input input-bordered w-full " />
                        </div>
                        <div className="form-control  my-6">
                            <label className="label">
                                <span className="label-text">Trip Price <span className="text-red-600 font-bold text-lg">*</span> </span>

                            </label>
                            <input
                                type="number"
                                placeholder="Trip price"
                                {...register("price", { required: true })}
                                required
                                className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Tour Type <span className="text-red-600 font-bold text-lg">*</span> </span>

                        </label>
                        <select defaultValue="default" {...register("tour_type", { required: true })} className="select select-bordered w-full ">
                            <option disabled value="default">Select tour type name</option>
                            <option value="Cultural Tours">Cultural Tours</option>
                            <option value="Adventure Tours">Adventure Tours</option>
                            <option value="Wildlife Tours">Wildlife Tours</option>
                            <option value="Culinary Tours">Culinary Tours</option>
                            <option value="Sightseeing Tours">Sightseeing Tours</option>
                        </select>
                    </div>
                    <div className="my-6 ">
                        <label className="label">
                            <span className="label-text">Tour Guide Name<span className="text-red-600 font-bold text-lg">*</span> </span>

                        </label>
                        <select defaultValue="default" {...register("tourGuide", { required: true })} className="select select-bordered w-full ">
                            <option disabled value="default">Select tour guide name</option>
                            <option value="Sophie Miller">Sophie Miller</option>
                            <option value="David Smith">David Smith</option>
                            <option value="Alice Johnson">Alice Johnson</option>
                            <option value="Emily Wilson">Emily Wilson</option>
                            <option value="Michael Brown">Michael Brown</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tour Details<span className="text-red-600 font-bold text-lg">*</span> </span>

                        </label>
                        <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="tour details"></textarea>

                    </div>



                    <div className="form-control w-full my-6">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Packages <FaThList className="ml-4"></FaThList>

                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddPackages;