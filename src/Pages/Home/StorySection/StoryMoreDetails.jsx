
import { Link, useLoaderData } from 'react-router-dom';
import SliderSection from '../SliderSection/SliderSection';

const StoryMoreDetails = () => {
    const storyMoreDetails = useLoaderData();
    const { story: storyContent, TouristName, TouristImage } = storyMoreDetails;
    // console.log(storyMoreDetails);
    return (
        <div>
            <SliderSection></SliderSection>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={TouristImage} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Mr. {TouristName} Describes:</h1>
                            <p className="py-6">{storyContent}</p>
                            <div>
                                <Link to='/allStory'>
                                    <button className="btn bg-blue-400 btn-block text-white">See All Story</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryMoreDetails;