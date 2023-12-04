import useStories from "../../../Hooks/useStories";
import StoryDetails from "./StoryDetails";

const StorySection = () => {
    const [stories] = useStories();
    return (
        <div className="bg-gray-300 py-12">
            <div >
                <h2 className="text-center font-bold text-3xl">Guided by Enchantment: A Travelers Tale of Discovery: {stories.length}</h2>
            </div>
            <div className="flex flex-wrap gap-6 justify-center items-center p-12">
                {
                    stories.map(story => <StoryDetails
                        key={story._id}
                        story={story}
                    ></StoryDetails>)
                }
            </div>
        </div>
    );
};

export default StorySection;