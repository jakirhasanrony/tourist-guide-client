import { Link } from "react-router-dom";

const StoryDetails = ({ story }) => {
    const { _id, TouristName, TouristImage } = story;
    // console.log(storyContent);
    // console.log(_id);
    return (
        <div>
            <div className="card w-96 h-[500px] bg-blue-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={TouristImage} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Story Teller: {TouristName}</h2>
                    <p>To see this beautiful story from this tourist click on the see details button</p>

                    <div className="card-actions">
                        <Link to={`/stories/${_id}`}>
                            <button className="btn bg-blue-500  text-white">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryDetails;