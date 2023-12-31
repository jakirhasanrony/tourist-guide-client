import SliderSection from "../SliderSection/SliderSection";
import StorySection from "../StorySection/StorySection";
import TourTypeSection from "../TourTypeSection/TourTypeSection";
import TourismTravelSection from "../TourismTravelSection/TourismTravelSection";

const Home = () => {
    return (
        <div>
            <SliderSection></SliderSection>
            <TourismTravelSection></TourismTravelSection>
            <TourTypeSection></TourTypeSection>
            <StorySection></StorySection>

        </div>
    );
};

export default Home;