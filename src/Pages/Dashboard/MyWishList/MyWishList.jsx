import { Link } from "react-router-dom";
import useWishList from "../../../Hooks/useWishList";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyWishList = () => {

    const axiosSecure = useAxiosSecure();
    const [wishListItem, refetch] = useWishList();
    // console.log(wishListItem);


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // axiosSecure.delete(`/carts/${id}`)
                axiosSecure.delete(`/wishlist/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <>
            <div className="p-12">
                <h2 className="text-4xl text-center font-bold my-6">My Wish List</h2>
                <h2 className="text-xl text-center font-bold my-6">My Wish List Items: {wishListItem.length}</h2>
                <hr />
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Trip Title</th>
                            <th>Trip Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishListItem.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.trip_title}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <Link >
                                        <div className="card-actions">
                                            <button className="btn bg-blue-400 text-white">Details</button>
                                        </div>
                                    </Link>

                                </th>
                                <th>
                                    <div className="card-actions">
                                        <button onClick={() => handleDelete(item._id)} className="btn bg-red-400 text-white">Delete</button>
                                    </div>

                                </th>
                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </>
    );
};

export default MyWishList;