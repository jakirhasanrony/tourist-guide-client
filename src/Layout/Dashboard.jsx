import { FaAd, FaBook, FaHome, FaList, FaTable, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useWishList from "../Hooks/useWishList";
import useAdmin from "../Hooks/useAdmin";
import useTourGuide from "../Hooks/useTourGuide";

const Dashboard = () => {
    const [wishListItem] = useWishList();
    const [isAdmin] = useAdmin();
    const [isTourGuide] = useTourGuide();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-300">
                <ul className="menu">

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminProfile">
                                    <FaUser></FaUser>
                                    Admin Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addPackages">
                                    <FaAd></FaAd>
                                    Add Package
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageUsers">
                                    <FaUsers></FaUsers>
                                    Manage Users
                                </NavLink>
                            </li>

                        </> :
                            isTourGuide ? <>
                                <li>
                                    <NavLink to="/dashboard/adminProfile">
                                        <FaUser></FaUser>
                                        Tour Guide Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addPackages">
                                        <FaAd></FaAd>
                                        My Assigned Tours

                                    </NavLink>
                                </li>


                            </>
                                :
                                <>

                                    <li>
                                        <NavLink to="/dashboard/myProfile">
                                            <FaUser></FaUser>
                                            My Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myBookings">
                                            <FaBook></FaBook>
                                            My Bookings
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myWishList">
                                            <FaList></FaList>
                                            My Wishlist: ({wishListItem.length})
                                        </NavLink>
                                    </li>
                                </>



                    }




                    {/* shared navLinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Go To Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/allPackage">
                            <FaTable></FaTable>
                            Tour Packages
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;