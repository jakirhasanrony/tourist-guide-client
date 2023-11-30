import useTourPackages from "../../../../Hooks/useTourPackages";
import SliderSection from "../../SliderSection/SliderSection";
import SinglePackageCard from "../SinglePackageCard";

const AllPackage = () => {
    const [tourPackages] = useTourPackages();
    <SliderSection></SliderSection>
    return (
        <div>
            <SliderSection></SliderSection>
            <div className="">
                <div className="mx-auto text-center md:w-4/12 my-5">
                    <h3 className=" font-bold uppercase border-y-4 py-4">Our Packages</h3>
                </div>
            </div>
            <div className=" py-8 my-8 flex flex-wrap gap-5 justify-center items-center">
                {
                    tourPackages.map(singlePackage => <SinglePackageCard
                        key={singlePackage._id}
                        singlePackage={singlePackage}
                    ></SinglePackageCard>)
                }

            </div>
        </div>
    );
};

export default AllPackage;