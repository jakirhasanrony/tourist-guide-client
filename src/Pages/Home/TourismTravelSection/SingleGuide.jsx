import { Link } from "react-router-dom";

const SingleGuide = ({ guide }) => {
    const { _id, name, details, profile_picture } = guide;
    // console.log(contact_email);

    const roundedCorners = {
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' // Specifies individual radii for each corner
    };
    return (
        <div>
            <div className="card w-96 bg-base-100 pb-4 shadow-xl">
                <div >

                    <div className="bg-blue-200" style={roundedCorners}>
                        <figure className="px-10 pt-10">
                            <img src={profile_picture} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-gray-600 font-bold">{name}</h2>
                    <p className="mb-3">{details}</p>
                    <Link to={`/guide/${_id}`}>
                        <div className="card-actions">
                            <button className="btn bg-blue-500 text-white">See More Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleGuide;