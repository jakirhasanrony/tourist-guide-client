
import SingleGuide from "./SingleGuide";
import useGuides from "../../../Hooks/useGuides";


const TourGuides = () => {
    const [guides] = useGuides();
    return (
        <>
            <div className="">
                <div className="mx-auto text-center md:w-4/12 my-5">
                    <h3 className=" font-bold uppercase border-y-4 py-4">Our Guides, Our Pride</h3>
                </div>
            </div>
            <div className=" py-8 my-8 flex flex-wrap gap-5 justify-center items-center">
                {
                    guides.map(guide => <SingleGuide
                        key={guide._id}
                        guide={guide}
                    ></SingleGuide>)
                }
            </div>
        </>
    );
};

export default TourGuides;