import { Link } from "react-router-dom";
import useTourPackages from "../../../Hooks/useTourPackages";
import SinglePackageCard from "./SinglePackageCard";

const OurPackages = () => {
    const [tourPackages] = useTourPackages();
    // console.log(tourPackages);
    const slicedTourPackages = tourPackages.slice(0, 3);
    // console.log(slicedTourPackages);
    return (
        <>
            <div className="">
                <div className="mx-auto text-center md:w-4/12 my-5">
                    <h3 className=" font-bold uppercase border-y-4 py-4">Our Packages</h3>
                </div>
            </div>
            <div className=" py-8 my-8 flex flex-wrap gap-5 justify-center items-center">
                {
                    slicedTourPackages.map(singlePackage => <SinglePackageCard
                        key={singlePackage._id}
                        singlePackage={singlePackage}
                    ></SinglePackageCard>)
                }

            </div>
            <div>
                <Link to="/allPackage">
                    <button className="btn bg-blue-300 btn-block text-white">All Packages</button>
                </Link>
            </div>
        </>
    );
};

export default OurPackages;