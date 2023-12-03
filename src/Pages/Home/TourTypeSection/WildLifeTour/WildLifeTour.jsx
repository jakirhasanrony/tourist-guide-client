import useTourPackages from "../../../../Hooks/useTourPackages";
import SinglePackageCard from "../../OurPackages/SinglePackageCard";
import SliderSection from "../../SliderSection/SliderSection";


const WildLifeTour = () => {
    const [tourPackages] = useTourPackages();
    const wildlifeTours = tourPackages.filter(item => item.tour_type === 'Wildlife Tours');
    return (
        <div>
            <SliderSection></SliderSection>
            <div className="">
                <div className="mx-auto text-center md:w-4/12 my-5">
                    <h3 className=" font-bold uppercase border-y-4 py-4">Wildlife Tours</h3>
                </div>
            </div>
            <div className=" py-8 my-8 flex flex-wrap gap-5 justify-center items-center">
                {
                    wildlifeTours.map(singlePackage => <SinglePackageCard
                        key={singlePackage._id}
                        singlePackage={singlePackage}
                    ></SinglePackageCard>)
                }

            </div>
        </div>
    );
};

export default WildLifeTour;