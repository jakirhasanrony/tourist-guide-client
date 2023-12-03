import { FaBook, FaHome, FaList, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useWishList from "../Hooks/useWishList";

const Dashboard = () => {
    const [wishListItem] = useWishList();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-300">
                <ul className="menu">
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
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Go To Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/allPackage">
                            <FaHome></FaHome>
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