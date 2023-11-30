

import { FaRegHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const SinglePackageCard = ({ singlePackage }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const { _id, trip_title, image, tour_type, price } = singlePackage;
    const handleAddToWishList = wishPackage => {
        if (user && user.email) {
            // sent wishlist item to database
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the wish list!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { form: location } })
                }
            });
        }
    }
    return (
        <>

            <div className="card w-96 bg-blue-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-gray-500">{trip_title}</h2>
                    <p className="font-bold text-gray-400">Tour Type: {tour_type}</p>
                    <p className="font-bold text-gray-400">Tour Price: {price}
                    </p>

                    <FaRegHeart onClick={() => handleAddToWishList(singlePackage)} className="text-4xl"></FaRegHeart>

                    <Link to={`/tourPackage/${_id}`}>
                        <div className="card-actions">
                            <button className="btn bg-blue-400 text-white">View Package Details</button>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default SinglePackageCard;